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
        title: "Bib'sfiha",
        category: "Commercial",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=10NqoRJnHHqpwAs_8glmmIfUxD-fa4UQX&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/10NqoRJnHHqpwAs_8glmmIfUxD-fa4UQX/preview"
    },
    {
        id: 2,
        title: "Laminie Espaço",
        category: "Commercial",
        type: "client",
        image: "https://drive.google.com/thumbnail?id=1xPJcOb856WgxAFN5YpDcde6DMnmYTJ0-&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1xPJcOb856WgxAFN5YpDcde6DMnmYTJ0-/preview"
    },
    {
        id: 3,
        title: "Edit - Lawn mower",
        category: "Shorts",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=12Y7p9ToqBvLkSLTEFEbCpoz9YX_8RmU9&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/12Y7p9ToqBvLkSLTEFEbCpoz9YX_8RmU9/preview"
    },
    {
        id: 4,
        title: "Edit - Max Verstappen vs Lewis Hamilton",
        category: "Shorts",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1YVHL_CbHq4HG5axaul2ycuHHX33PYF89&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1YVHL_CbHq4HG5axaul2ycuHHX33PYF89/preview"
    },
    {
        id: 5,
        title: "Edit - FNAF",
        category: "Shorts",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1izbem-Yd4l9YNR6pKn0wyB8g8sYWJNb-&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1izbem-Yd4l9YNR6pKn0wyB8g8sYWJNb-/preview"
    },
    {
        id: 6,
        title: "Edit - Yuta x Itadori",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1NmCmKc8ITDBsDXhLkLXLNyYydXbZ4IMi&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1NmCmKc8ITDBsDXhLkLXLNyYydXbZ4IMi/preview"
    },
    {
        id: 7,
        title: "Edit - Remake Makima",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1xW5w6ohtG6cIkeg9y5qkPklNN6iXoHn1&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1xW5w6ohtG6cIkeg9y5qkPklNN6iXoHn1/preview"
    },
    {
        id: 8,
        title: "HALO Art",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1x6zD2AyfbkdR_zk4AT8CJ_kwjUoBraDs&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1x6zD2AyfbkdR_zk4AT8CJ_kwjUoBraDs/preview"
    },
    {
        id: 9,
        title: "Gojo Edit",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1sQaRZXR6Ulz2xyhsCnBr0YsxhXVoOSsu&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1sQaRZXR6Ulz2xyhsCnBr0YsxhXVoOSsu/preview"
    },
    {
        id: 10,
        title: "Edit - Rocket League",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=156rrh3r6SK0_21fIfnxZBnWPT8tvhkEr&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/156rrh3r6SK0_21fIfnxZBnWPT8tvhkEr/preview"
    },
    {
        id: 11,
        title: "Edit - Harley Queen",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1hTYa7d-iYtOWtmQ8Qvp4TxrawBH5ilbA&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1hTYa7d-iYtOWtmQ8Qvp4TxrawBH5ilbA/preview"
    },
    {
        id: 12,
        title: "Edit - Gojo Jujutsu Kaisen 2026",
        category: "hobby",
        type: "hobby",
        image: "https://drive.google.com/thumbnail?id=1QzrKCsPcNiHpgp3lBINvzpi9t-mqmJWq&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1QzrKCsPcNiHpgp3lBINvzpi9t-mqmJWq/preview"
    },
    {
        id: 13,
        title: "Igreja",
        category: "Commercial",
        type: "client",
        image: "https://drive.google.com/thumbnail?id=1r5uO-g9G_ULOWCcrcpkCJFv-R5aCSlQw&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1r5uO-g9G_ULOWCcrcpkCJFv-R5aCSlQw/preview"
    },
    {
        id: 14,
        title: "Gemini Remake",
        category: "Commercial",
        type: "client",
        image: "https://drive.google.com/thumbnail?id=1IfWJjIyxVZByx7Kn1xaZu5wpvl6Q1uP2&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1IfWJjIyxVZByx7Kn1xaZu5wpvl6Q1uP2/preview"
    },
    {
        id: 15,
        title: "Cliente",
        category: "Commercial",
        type: "client",
        image: "https://drive.google.com/thumbnail?id=1tpMDN4iAv1tq2NTz3w9bWRCFLwt9o7ZG&sz=w800",
        description: "",
        videoEmbedUrl: "https://drive.google.com/file/d/1tpMDN4iAv1tq2NTz3w9bWRCFLwt9o7ZG/preview"
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
                <p className="developer-credit">Developed by <a href="https://github.com/Cry199" target="_blank" rel="noopener noreferrer">Cry199</a></p>
            </footer>
        </div>
    );
};

export default PortfolioPage;
