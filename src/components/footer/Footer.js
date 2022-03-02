import React, { Component } from 'react';
import Logo from "../../assets/footer-logo.png";
import styles from "./Footer.module.scss";

export default class Header extends Component {

    render() {
        return (
            <footer className={styles.footer_container}>
                <img className="logo" src={Logo} alt="Logo Footer Kasa" />
                <span>© 2020 Kasa. All rights reserved</span>
            </footer>
        );
    }
}