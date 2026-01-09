import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh } from 'ogl';

const FluidBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        
        // Renderer setup
        const renderer = new Renderer({ 
            alpha: true,
            dpr: Math.min(window.devicePixelRatio, 2) 
        });
        
        const gl = renderer.gl;
        container.appendChild(gl.canvas);

        const camera = new Camera(gl);
        camera.position.set(0, 0, 1);

        const scene = new Transform();

        // Screen-filling plane
        const geometry = new Plane(gl, { width: 2, height: 2 });

        const vertex = /* glsl */ `
            attribute vec3 position;
            attribute vec2 uv;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragment = /* glsl */ `
            precision highp float;
            uniform float uTime;
            uniform vec2 uResolution;
            varying vec2 vUv;

            // Simplex noise function
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v - i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 st = gl_FragCoord.xy / uResolution.xy;
                
                // Aspect ratio correction
                st.x *= uResolution.x / uResolution.y;

                float t = uTime * 0.2;
                
                // Create multiple layers of noise for fluid effect
                float n1 = snoise(vec2(st.x * 2.0 + t, st.y * 2.0 - t));
                float n2 = snoise(vec2(st.x * 4.0 - t, st.y * 4.0 + t * 0.5));
                
                float pattern = n1 * 0.5 + n2 * 0.25;
                
                // Deep Void base
                vec3 color = vec3(0.02, 0.02, 0.02);
                
                // Neon Lime highlights where pattern is high
                float highlight = smoothstep(0.4, 0.6, pattern + 0.2);
                
                // Mix in the lime color subtly
                color = mix(color, vec3(0.8, 1.0, 0.0), highlight * 0.15); // Increased glow intensity
                
                // Add a "scanline" grain
                float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
                color += grain * 0.05;

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height]) },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(scene);

        let animationId: number;
        function update(t: number) {
            animationId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene, camera });
        }
        
        animationId = requestAnimationFrame(update);

        // Resize handler
        function resize() {
            if (!container) return;
            const { clientWidth, clientHeight } = container;
            renderer.setSize(clientWidth, clientHeight);
            program.uniforms.uResolution.value = new Float32Array([clientWidth, clientHeight]);
        }
        
        // Initial resize after a short delay to ensure container has size
        setTimeout(resize, 0);
        
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
            container.removeChild(gl.canvas);
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default FluidBackground;
