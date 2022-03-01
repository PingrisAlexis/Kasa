import React, { Component } from 'react';
import Logo from "../../assets/logo.png";
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
                        <NavLink to="/" className={styles.nav_link}  >
                            Accueil
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/about" className={styles.nav_link } >
                            A propos
                        </NavLink>
                    </li>
                </ul>
                 </div>
            </header>
        );
    }
}