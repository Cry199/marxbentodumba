import { Link } from 'react-router-dom';
import './PortfolioPage.css';

const projects = [
    {
        id: 1,
        title: "Neon Dreams",
        category: "Music Video",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        description: "A cyberpunk-inspired visual journey for the latest synthwave hit."
    },
    {
        id: 2,
        title: "Urban Rhythm",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80",
        description: "High-energy commercial spot for a leading sportswear brand."
    },
    {
        id: 3,
        title: "Silent Echoes",
        category: "Short Film",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        description: "An award-winning short film exploring themes of isolation."
    },
    {
        id: 4,
        title: "Golden Hour",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=800&q=80",
        description: "Capturing the magical moments of a summer road trip."
    },
    {
        id: 5,
        title: "Tech Noir",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        description: "Avant-garde fashion editorial with glitch art effects."
    },
    {
        id: 6,
        title: "Velocity",
        category: "Automotive",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
        description: "Cinematic showcase of high-performance vehicles."
    }
];

const PortfolioPage = () => {
    return (
        <div className="portfolio-container">
            <nav className="portfolio-nav">
                <Link to="/" className="back-link">← Back to Home</Link>
                <div className="nav-brand">MARX BENTO DUMBÁ</div>
            </nav>

            <header className="portfolio-header">
                <h1 className="portfolio-title">Selected Works</h1>
                <p className="portfolio-subtitle">A curated collection of visual stories.</p>
            </header>

            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
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

            <footer className="portfolio-footer">
                <p>© {new Date().getFullYear()} Marx Bento Dumbá. Let's create something together.</p>
            </footer>
        </div>
    );
};

export default PortfolioPage;
