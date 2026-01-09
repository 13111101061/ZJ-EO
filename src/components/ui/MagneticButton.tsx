import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './MagneticButton.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    
    if (!button || !text) return;

    // Magnetic Effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Move button slightly
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: 'power3.out'
      });
      
      // Move text slightly more for parallax
      gsap.to(text, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to([button, text], {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    // Click Ripple / Shockwave
    const handleClick = (e: MouseEvent) => {
      // Create ripple element
      const ripple = document.createElement('div');
      ripple.className = 'magnetic-ripple';
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      gsap.fromTo(ripple, 
        { scale: 0, opacity: 0.8 },
        { 
          scale: 4, 
          opacity: 0, 
          duration: 0.6, 
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );

      // Button "press" effect
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });

      if (onClick) onClick();
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, [onClick]);

  return (
    <button ref={buttonRef} className={`magnetic-btn ${className}`} type="button">
      <span ref={textRef} className="magnetic-btn-content">
        {children}
      </span>
      <div ref={scanlineRef} className="magnetic-btn-scanline" />
      <div className="magnetic-btn-glow" />
    </button>
  );
};

export default MagneticButton;
