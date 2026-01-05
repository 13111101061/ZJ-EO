import React, { useState } from 'react';
import './Dropdowns.css';

// Generic Dropdown Container to simulate the behavior
interface DropdownContainerProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
    className?: string;
}

export const DropdownContainer: React.FC<DropdownContainerProps> = ({ trigger, content, className = "" }) => {
    return (
        <div className={`lib-dropdown-container ${className}`}>
            <div className="lib-nav-trigger" style={{
                padding: '10px 20px',
                background: '#111', border: '1px solid #333', borderRadius: '6px',
                cursor: 'pointer', fontSize: '14px', color: '#ccc', transition: '0.3s',
                display: 'flex', alignItems: 'center', gap: '8px'
            }}>
                {trigger}
            </div>
            <div className="lib-dropdown-content">
                {content}
            </div>
        </div>
    );
};

// 1. Visual Matrix
export const VisualMatrix: React.FC = () => {
    return (
        <div className="lib-dd-1">
            <div className="lib-d1-card">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Model" />
                <div className="lib-d1-meta">MODEL: FLUX_V1</div>
            </div>
            <div className="lib-d1-card">
                <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Style" />
                <div className="lib-d1-meta">STYLE: CYBER</div>
            </div>
            <div className="lib-d1-card">
                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Size" />
                <div className="lib-d1-meta">SIZE: 1024x1024</div>
            </div>
            <div className="lib-d1-card" style={{ border: '1px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>+ Upload Ref</span>
            </div>
        </div>
    );
};

// 2. Parameter Tuner
export const ParameterTuner: React.FC = () => {
    return (
        <div className="lib-dd-2">
            <div className="lib-d2-header">
                <span className="lib-d2-title">Parameters</span>
                <i className="ri-settings-3-line" style={{ fontSize: '12px', color: '#666' }}></i>
            </div>
            <div className="lib-d2-control">
                <div className="lib-d2-label"><span>STABILITY</span><span>85%</span></div>
                <div className="lib-d2-slider"><div className="lib-d2-fill" style={{ width: '85%' }}><div className="lib-d2-knob"></div></div></div>
            </div>
            <div className="lib-d2-control">
                <div className="lib-d2-label"><span>CLARITY</span><span>60%</span></div>
                <div className="lib-d2-slider"><div className="lib-d2-fill" style={{ width: '60%' }}><div className="lib-d2-knob"></div></div></div>
            </div>
            <div className="lib-d2-wave">
                <div className="lib-d2-bar" style={{ animationDelay: '0.1s' }}></div>
                <div className="lib-d2-bar" style={{ animationDelay: '0.3s' }}></div>
                <div className="lib-d2-bar" style={{ animationDelay: '0.5s' }}></div>
                <div className="lib-d2-bar" style={{ animationDelay: '0.2s' }}></div>
                <div className="lib-d2-bar" style={{ animationDelay: '0.4s' }}></div>
                <div className="lib-d2-bar" style={{ animationDelay: '0.1s' }}></div>
                <div className="lib-d2-bar" style={{ animationDelay: '0.3s' }}></div>
            </div>
        </div>
    );
};

// 3. Docs Tree
export const DocsTree: React.FC = () => {
    return (
        <div className="lib-dd-3">
            <div style={{ fontSize: '10px', color: '#555', marginBottom: '10px', paddingLeft: '26px' }}>/API/V2/DOCS</div>
            <div className="lib-d3-item"><a href="#" className="lib-d3-link"><span>{`{}`}</span> Introduction</a></div>
            <div className="lib-d3-item"><a href="#" className="lib-d3-link"><span>{`->`}</span> Authentication</a></div>
            <div className="lib-d3-item"><a href="#" className="lib-d3-link"><span>[]</span> Endpoints</a></div>
            <div className="lib-d3-item"><a href="#" className="lib-d3-link"><span>//</span> SDKs & Tools</a></div>
        </div>
    );
};

// 4. Bento Grid
export const BentoGrid: React.FC = () => {
    return (
        <div className="lib-dd-4">
            <div className="lib-d4-box lib-d4-large">
                <i className="ri-brain-line lib-d4-icon-bento"></i>
                <div>
                    <div className="lib-d4-title">Core Engine</div>
                    <div className="lib-d4-sub">The brain of your ops.</div>
                </div>
            </div>
            <div className="lib-d4-box">
                <i className="ri-group-line lib-d4-icon-bento"></i>
                <div className="lib-d4-title">Teams</div>
            </div>
            <div className="lib-d4-box">
                <i className="ri-bar-chart-box-line lib-d4-icon-bento"></i>
                <div className="lib-d4-title">Analytics</div>
            </div>
        </div>
    );
};

// 5. Model Selector
export const ModelSelector: React.FC = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="lib-dd-5">
            <div className={`lib-d5-opt ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>
                <div className="lib-d5-icon"><i className="ri-flashlight-fill"></i></div>
                <div className="lib-d5-info">
                    <h4>GPT-4 Turbo</h4>
                    <p>Fastest & most capable.</p>
                </div>
                <div className="lib-d5-tag">ACTIVE</div>
            </div>
            <div className={`lib-d5-opt ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
                <div className="lib-d5-icon"><i className="ri-box-3-line"></i></div>
                <div className="lib-d5-info">
                    <h4>Claude 3</h4>
                    <p>Large context window.</p>
                </div>
                <div className="lib-d5-tag">BETA</div>
            </div>
            <div className={`lib-d5-opt ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
                <div className="lib-d5-icon"><i className="ri-landscape-line"></i></div>
                <div className="lib-d5-info">
                    <h4>Midjourney V6</h4>
                    <p>Image generation.</p>
                </div>
            </div>
        </div>
    );
};

// 6. Command List
export const CommandList: React.FC = () => {
    return (
        <div className="lib-dd-6">
            <div className="lib-d6-input-box">
                <input type="text" className="lib-d6-input" placeholder="Type a command..." />
            </div>
            <div className="lib-d6-item">
                <span>Create new project</span>
                <span className="lib-d6-key">N</span>
            </div>
            <div className="lib-d6-item">
                <span>Search docs</span>
                <span className="lib-d6-key">S</span>
            </div>
            <div className="lib-d6-item">
                <span>Deploy to prod</span>
                <span className="lib-d6-key">D</span>
            </div>
        </div>
    );
};

// --- IMPORTED DROPDOWNS FROM 4.HTML ---

// 7. The 'Stack' (Style 1 from import)
export const StackDropdown: React.FC = () => {
    return (
        <div className="lib-dd-stack">
            <a href="#" className="lib-dd-stack-item">
                <div className="lib-dd-stack-icon"><i className="ri-radar-line"></i></div>
                <div className="lib-dd-stack-content"><h4>Analytics</h4><p>Real-time data insights.</p></div>
            </a>
            <a href="#" className="lib-dd-stack-item">
                <div className="lib-dd-stack-icon"><i className="ri-cpu-line"></i></div>
                <div className="lib-dd-stack-content"><h4>Compute</h4><p>Serverless functions.</p></div>
            </a>
            <a href="#" className="lib-dd-stack-item">
                <div className="lib-dd-stack-icon"><i className="ri-database-2-line"></i></div>
                <div className="lib-dd-stack-content"><h4>Storage</h4><p>Scalable object store.</p></div>
            </a>
        </div>
    );
};

// 8. The 'Feature Card' (Style 2 from import)
export const FeatureDropdown: React.FC = () => {
    return (
        <div className="lib-dd-feature">
            <div className="lib-dd-feature-list">
                <a href="#" className="lib-dd-feature-link">Documentation</a>
                <a href="#" className="lib-dd-feature-link">API Reference</a>
                <a href="#" className="lib-dd-feature-link">Community Forum</a>
                <a href="#" className="lib-dd-feature-link">Help Center</a>
            </div>
            <div className="lib-dd-feature-card">
                <h5>New: AI Assistant</h5>
                <p>Build faster with our new generative AI tools.</p>
                <button className="lib-dd-feature-btn">Try Beta</button>
            </div>
        </div>
    );
};

// 9. The 'Grid System' (Style 3 from import)
export const AppGridDropdown: React.FC = () => {
    return (
        <div className="lib-dd-app-grid">
            <a href="#" className="lib-dd-app-item"><div className="lib-dd-app-icon"><i className="ri-slack-fill"></i></div><span style={{ fontSize: '11px' }}>Slack</span></a>
            <a href="#" className="lib-dd-app-item"><div className="lib-dd-app-icon"><i className="ri-github-fill"></i></div><span style={{ fontSize: '11px' }}>GitHub</span></a>
            <a href="#" className="lib-dd-app-item"><div className="lib-dd-app-icon"><i className="ri-notion-fill"></i></div><span style={{ fontSize: '11px' }}>Notion</span></a>
            <a href="#" className="lib-dd-app-item"><div className="lib-dd-app-icon"><i className="ri-google-fill"></i></div><span style={{ fontSize: '11px' }}>Drive</span></a>
            <a href="#" className="lib-dd-app-item"><div className="lib-dd-app-icon"><i className="ri-dropbox-fill"></i></div><span style={{ fontSize: '11px' }}>Dropbox</span></a>
            <a href="#" className="lib-dd-app-item"><div className="lib-dd-app-icon"><i className="ri-more-fill"></i></div><span style={{ fontSize: '11px' }}>More</span></a>
        </div>
    );
};

// 10. The 'Bento Box' (Style 4 from import)
export const BentoBoxDropdown: React.FC = () => {
    return (
        <div className="lib-dd-bento-box">
            <div className="lib-dd-bento-item lib-dd-bento-large">
                <div>
                    <div className="lib-dd-bento-title">Enterprise</div>
                    <div className="lib-dd-bento-desc">Scale with confidence.</div>
                </div>
                <i className="ri-building-4-line" style={{ fontSize: '24px', color: '#555' }}></i>
            </div>
            <div className="lib-dd-bento-item">
                <div className="lib-dd-bento-title">Startups</div>
                <div className="lib-dd-bento-desc">Grow fast.</div>
            </div>
            <div className="lib-dd-bento-item">
                <div className="lib-dd-bento-title">Agency</div>
                <div className="lib-dd-bento-desc">Manage clients.</div>
            </div>
        </div>
    );
};

// 11. The 'Sidebar Logic' (Style 5 from import)
export const SidebarLogicDropdown: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    return (
        <div className="lib-dd-sidebar-logic">
            <div className="lib-dd-sidebar-nav">
                <span className={`lib-dd-sidebar-tab ${activeTab === 'Overview' ? 'active' : ''}`} onClick={() => setActiveTab('Overview')}>Overview</span>
                <span className={`lib-dd-sidebar-tab ${activeTab === 'Company' ? 'active' : ''}`} onClick={() => setActiveTab('Company')}>Company</span>
                <span className={`lib-dd-sidebar-tab ${activeTab === 'Careers' ? 'active' : ''}`} onClick={() => setActiveTab('Careers')}>Careers</span>
            </div>
            <div className="lib-dd-sidebar-content">
                <div className="lib-dd-sidebar-group">
                    <h4>Trending</h4>
                    <a href="#" className="lib-dd-sidebar-link"><i className="ri-fire-line"></i> New Frameworks</a>
                    <a href="#" className="lib-dd-sidebar-link"><i className="ri-bar-chart-box-line"></i> Market Reports</a>
                    <a href="#" className="lib-dd-sidebar-link"><i className="ri-video-line"></i> Video Tutorials</a>
                </div>
            </div>
        </div>
    );
};

// 12. The 'Two-Tone Footer' (Style 6 from import)
export const FooterDropdown: React.FC = () => {
    return (
        <div className="lib-dd-footer">
            <div className="lib-dd-footer-body">
                <a href="#" className="lib-dd-footer-link">Submit a Ticket</a>
                <a href="#" className="lib-dd-footer-link">Live Chat</a>
                <a href="#" className="lib-dd-footer-link">Status Page</a>
            </div>
            <div className="lib-dd-footer-bar">
                <span className="lib-dd-footer-text">Need urgent help?</span>
                <i className="ri-arrow-right-line" style={{ fontSize: '12px', color: '#666' }}></i>
            </div>
        </div>
    );
};

// 13. The 'Interactive List' (Style 7 from import)
export const InteractiveListDropdown: React.FC = () => {
    return (
        <div className="lib-dd-interactive">
            <div className="lib-dd-interactive-item">Automated Workflows</div>
            <div className="lib-dd-interactive-item">Team Management</div>
            <div className="lib-dd-interactive-item">Audit Logs</div>
            <div className="lib-dd-interactive-item">SSO & Security</div>
        </div>
    );
};

// 14. The 'User Profile' (Style 8 from import)
export const UserProfileDropdown: React.FC = () => {
    return (
        <div className="lib-dd-profile">
            <div className="lib-dd-profile-header">
                <div className="lib-dd-profile-avatar"></div>
                <div className="lib-dd-profile-user">
                    <h4>Gemini User</h4>
                    <p>Pro Plan</p>
                </div>
            </div>
            <div className="lib-dd-profile-menu">
                <div className="lib-dd-profile-link">Profile Settings</div>
                <div className="lib-dd-profile-link">Billing <span className="lib-dd-profile-badge">1</span></div>
                <div className="lib-dd-profile-link" style={{ color: '#ef4444', marginTop: '5px' }}>Log Out</div>
            </div>
        </div>
    );
};

// 15. The 'Tags Cloud' (Style 9 from import)
export const TagsCloudDropdown: React.FC = () => {
    return (
        <div className="lib-dd-tags">
            <div className="lib-dd-tags-title">Popular Tags</div>
            <div className="lib-dd-tags-cloud">
                <a href="#" className="lib-dd-tags-item">Design</a>
                <a href="#" className="lib-dd-tags-item">Code</a>
                <a href="#" className="lib-dd-tags-item">SaaS</a>
                <a href="#" className="lib-dd-tags-item">Marketing</a>
                <a href="#" className="lib-dd-tags-item">AI</a>
                <a href="#" className="lib-dd-tags-item">Crypto</a>
                <a href="#" className="lib-dd-tags-item">Finance</a>
            </div>
        </div>
    );
};

// 16. The 'Minimal Divider' (Style 10 from import)
export const MinimalDividerDropdown: React.FC = () => {
    return (
        <div className="lib-dd-minimal">
            <a href="#">About Us</a>
            <a href="#">Press Kit</a>
            <hr />
            <a href="#">Legal</a>
            <a href="#">Privacy</a>
        </div>
    );
};
export { SmartDropdown } from './SmartDropdown';
export { VisualMenu } from './VisualMenu';
export { InteractiveGrid } from './InteractiveGrid';
