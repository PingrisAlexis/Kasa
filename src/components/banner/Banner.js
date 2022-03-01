import React, { Component } from 'react';
import banner from "../../assets/banner.png";
import styles from "./Banner.module.scss";

export default class Banner extends Component {

    render() {
        return (
            <div className={styles.banner_contenair}>
                <div>
                    <img src={banner} alt="Banner Kasa" />
                    <p>Chez vous, partout et ailleurs </p>
                </div>
            </div>
        );
    }
}