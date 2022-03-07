import React, { Component } from 'react';
import styles from "./Tag.module.scss";

export default class Tag extends  Component {
    render() {
        const {tags} = this.props
        return (
             <ul className={styles.tags_container}>
                 {tags.map((elt, index) =>
                 <li key={index}>{elt}</li>)}
             </ul>
        )
    }
}