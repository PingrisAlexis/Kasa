import React, { Component } from 'react';
import Logo from "../../assets/header-logo.png";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.scss";

export default class Header extends Component {
    render() {
        return (
            <header>
                 <div>
                     <img className="logo" src={Logo} alt="Logo Kasa" />
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? styles.active_nav_link : styles.nav_link}>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"  className={({ isActive }) =>
                                isActive ? styles.active_nav_link : styles.nav_link}>
                                A Propos
                            </NavLink>
                        </li>
                    </ul>
                 </div>
            </header>
        );
    }
}