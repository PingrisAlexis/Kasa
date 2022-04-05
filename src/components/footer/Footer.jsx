import React, { Component } from 'react';
import Logo from '../../assets/footer-logo.png';
import styles from './Footer.module.scss';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {

    render() {
        return <footer className={styles.footer_container}>
                    <NavLink to="/" >
                        <img className="logo" src={Logo} alt="Logo Footer Kasa" />
                    </NavLink>
                    <span>© 2020 Kasa. All rights reserved</span>
                </footer>
    }
};