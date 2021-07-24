import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Header/logo.png';
import Analysis from '../Header/analysisicon.png';
import Home from '../Header/homeicon.png';
import Survey from '../Header/surveyicon.png';
import About from '../Header/aboutdataseticon.png';
function Header(){
    return (
    <div>
        <div className="header">
            <div className="logo">
            <Link to="/"><img id="logo" src={Logo} alt="Logo"/></Link>
            </div>
            <div className="navbar">
                <Link to="/"><p className="link">Home</p><img className='icon' src={Home}/></Link>
                <Link to="/about"><p className="link">About Dataset</p><img className='icon' src={About}/></Link>
                <Link to="/analysis"><p className="link">Analysis</p><img className='icon' src={Analysis}/></Link>
                <Link to="/survey"><p className="link">Survey</p><img className='icon' src={Survey}/></Link>
            </div>
        </div>
    </div>
    )
}

export default Header;