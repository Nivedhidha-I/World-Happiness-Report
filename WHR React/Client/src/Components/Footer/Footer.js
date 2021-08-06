import './Footer.css';
function Footer(){
    return (
    <div>
        <footer className="footer-grid">
            <div className="links">
                <h3 className="footer-title">References</h3>
                <a href="https://github.com/Nivedhidha-I/World-Happiness-Report"><i class="icons fab fa-github fa-3x"/></a>
                <a href="https://www.kaggle.com/mathurinache/world-happiness-report?select=2020.csv"><i class="icons fab fa-kaggle fa-3x"/></a>
            </div>
            <div className="team">
                <h3 className="footer-title">Team Members</h3>
                <p>Jishnu V</p>
                <p>Joselyn Diana Cindrella M</p>
                <p>Kabilan A</p>
                <p>Kali Deepak T</p>
                <p>Nivedhidha I</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer;