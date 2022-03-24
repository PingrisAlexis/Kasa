import React, { Component } from 'react';
import styles from "./Host.module.scss";

export default class Host extends  Component {
    
    render() {
        const {name, picture} = this.props;
        return (
            <figure className={styles.host_container}>
                <figcaption>
                    <p>{name.split(" ")[0]}</p>
                    <p>{name.split(" ")[1]}</p>
                </figcaption>
                <img src={picture} alt=""/>
            </figure>
        )
    }
}