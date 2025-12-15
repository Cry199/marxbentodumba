import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            {/* Background Elements */}
            <div className="bg-gradient"></div>
            <div className="bg-mesh"></div>

            <header className="home-header">
                <div className="logo-section">
                    <h1 className="logo-text">MARX BENTO DUMBÁ</h1>
                    <span className="logo-sub">SHORT FORM SPECIALIST</span>
                </div>

                <nav className="main-nav">
                    <Link to="/portfolio" className="nav-link">SHORTS</Link>
                    <a href="https://www.linkedin.com/in/marx-bento-dumb%C3%A1/" className="nav-link">ABOUT</a>
                    <a href="https://www.instagram.com/marx_e.d/" className="nav-link">CONTACT</a>
                </nav>
            </header>

            <main className="hero-section">
                <div className="hero-content">
                    <h2 className="hero-title">
                        High Retention <br />
                        <span className="highlight">Short Form Content</span>
                    </h2>
                    <p className="hero-description">
                        Expertly crafted Shorts, Reels, and TikToks designed to stop the scroll.
                        Turning raw footage into viral moments with dynamic editing.
                    </p>
                    <div className="hero-cta">
                        <Link to="/portfolio" className="btn-primary">Watch Shorts</Link>
                        <a href="#contact" className="btn-secondary">Let's Talk</a>
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <div className="social-links">
                    <a href="https://www.instagram.com/marx_e.d/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                    <span className="separator">/</span>
                    <a href="https://www.linkedin.com/in/marx-bento-dumb%C3%A1/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                </div>
                <p className="copyright">© {new Date().getFullYear()} Marx Bento Dumbá. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;