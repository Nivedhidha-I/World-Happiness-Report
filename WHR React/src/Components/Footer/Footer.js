import './Footer.css';
import GitHub from '../Footer/GitHub.jpg';
import Kaggle from '../Footer/kaggle.jpg';
function Footer(){
    return (
    <div>
        <div className="footer">
            <div className="links">
                <a href="https://github.com/Nivedhidha-I/World-Happiness-Report"><img class="icons" src={GitHub} alt="Github"/></a>
                <a href="https://www.kaggle.com/mathurinache/world-happiness-report?select=2020.csv"><img class="icons" src={Kaggle} alt="Kaggle"/></a>
            </div>
            <div className="team">
                <p>Jishnu V</p>
                <p>Joselyn Diana Cindrella M</p>
                <p>Kabilan A</p>
                <p>Kali Deepak T</p>
                <p>Nivedhidha I</p>
            </div>
        </div>
    </div>
    )
}

export default Footer;