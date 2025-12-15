import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.css';

interface Project {
    id: number;
    title: string;
    category: string;
    type: 'client' | 'hobby';
    image: string;
    description: string;
    videoEmbedUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Neon Dreams",
        category: "Music Video",
        type: "client",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        description: "A cyberpunk-inspired visual journey for the latest synthwave hit.",
        videoEmbedUrl: "https://drive.google.com/file/d/10NqoRJnHHqpwAs_8glmmIfUxD-fa4UQX/preview"
    },
    {
        id: 2,
        title: "Urban Rhythm",
        category: "Commercial",
        type: "client",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80",
        description: "High-energy commercial spot for a leading sportswear brand."
    },
    {
        id: 3,
        title: "Silent Echoes",
        category: "Short Film",
        type: "hobby",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        description: "An award-winning short film exploring themes of isolation."
    },
    {
        id: 4,
        title: "Golden Hour",
        category: "vlog",
        type: "hobby",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=800&q=80",
        description: "Capturing the magical moments of a summer road trip."
    },
    {
        id: 5,
        title: "Tech Noir",
        category: "Fashion",
        type: "client",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        description: "Avant-garde fashion editorial with glitch art effects."
    },
    {
        id: 6,
        title: "VFX Study 01",
        category: "R&D",
        type: "hobby",
        image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80",
        description: "Testing new particle systems and compositing techniques."
    },
    {
        id: 7,
        title: "Corporate Identity",
        category: "Branding",
        type: "client",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
        description: "Sleek corporate video for a fintech startup."
    },
    {
        id: 8,
        title: "Speed Art",
        category: "Timelapse",
        type: "hobby",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
        description: "A look behind the scenes of my editing process."
    }
];

const PortfolioPage = () => {
    const [activeTab, setActiveTab] = useState<'client' | 'hobby'>('client');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(project => project.type === activeTab);

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="portfolio-container">
            <nav className="portfolio-nav">
                <Link to="/" className="back-link">← Back to Home</Link>
                <div className="nav-brand">MARX BENTO DUMBÁ</div>
            </nav>

            <header className="portfolio-header">
                <h1 className="portfolio-title">Selected Works</h1>
                <p className="portfolio-subtitle">A curated collection of visual stories.</p>

                <div className="tab-container">
                    <button
                        className={`tab-button ${activeTab === 'client' ? 'active' : ''}`}
                        onClick={() => setActiveTab('client')}
                    >
                        CLIENTES
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'hobby' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hobby')}
                    >
                        HOBBY & APRIMORAMENTO
                    </button>
                </div>
            </header>

            <div className="project-grid">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => openModal(project)}
                    >
                        <div className="card-image-wrapper">
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-overlay">
                                <button className="play-button">▶</button>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-category">{project.category}</span>
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={closeModal}>×</button>

                        {selectedProject.videoEmbedUrl ? (
                            <div className="video-container">
                                <iframe
                                    src={selectedProject.videoEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    allow="autoplay"
                                    title={selectedProject.title}
                                ></iframe>
                            </div>
                        ) : (
                            <div className="no-video-placeholder">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                                <p>Video content not available for preview.</p>
                            </div>
                        )}

                        <div className="modal-info">
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <footer className="portfolio-footer">
                <p>© {new Date().getFullYear()} Marx Bento Dumbá. Let's create something together.</p>
            </footer>
        </div>
    );
};

export default PortfolioPage;
