import './Header.css';
import Logo from '../Header/logo.png';
function Header(){
    return (
    <div>
        <div className="header">
            <div className="logo">
            <a href=""><img id="logo" src={Logo} alt="Logo"/></a>
            </div>
            <div className="Navbar">
                <a className="link" href="">Home</a>
                <a className="link" href="about">About Dataset</a>
                <a className="link" href="analysis">Analysis</a>
            </div>
        </div>
    </div>
    )
}

export default Header;