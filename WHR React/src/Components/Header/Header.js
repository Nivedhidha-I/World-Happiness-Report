import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Header/logo.png';
function Header(){
    return (
    <div>
        <div className="header">
            <div className="logo">
            <Link to="/"><img id="logo" src={Logo} alt="Logo"/></Link>
            </div>
            <div className="Navbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About Dataset</Link>
                <Link className="link" to="/analysis">Analysis</Link>
            </div>
        </div>
    </div>
    )
}

export default Header;