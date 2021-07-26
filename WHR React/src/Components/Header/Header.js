import './Header.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
        state = { click:false }
        handleclick = () => {
            this.setState({
                click:(!this.state.click)
            })
        }
    render() { 
        return (
            <div>
                <nav className="nav-grid">
                    <Link to="/"><h1 className="logo">WHR</h1></Link>
                    <i class={this.state.click? "fas fa-times fa-2x" : "fas fa-bars fa-2x"} onClick={this.handleclick}></i>
                    <div className={this.state.click?"links active" : "links"}>
                        {Navbar.map((nav, index) => {
                            return (
                                <Link key={index} className={this.state.click?"link":"link active"} onClick={this.handleclick} to={nav.url}>{nav.title}</Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Header;