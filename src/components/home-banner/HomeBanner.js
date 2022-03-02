import React, { Component } from 'react';
import banner from "../../assets/home-banner.png";
import styles from "./HomeBanner.module.scss";

export default class HomeBanner extends Component {
    render() {
        return (
            <div className={styles.home_banner_contenair}>
                <article>
                    <img src={banner} alt="Banner Kasa Home Page" />
                    <h1>Chez vous, partout et ailleurs </h1>
                </article>
            </div>
        );
    }
}