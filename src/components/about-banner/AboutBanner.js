import React, { Component } from 'react';
import about_banner from "../../assets/about-banner-desktop.png";
import styles from "./AboutBanner.module.scss";

export default class HomeBanner extends Component {
    render() {
        return (
            <div className={styles.about_banner_contenair}>
                <div>
                    <img src={about_banner} alt="Banner Kasa About Page" />
                </div>
            </div>
        );
    }
}