import React, { Component } from 'react';
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header>
                <img className="logo" src={Logo} alt="Logo Kasa" />
                <ul>
                    <li>
                        <NavLink className="nav-links" to="/">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links">
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </header>
        );
    }
}