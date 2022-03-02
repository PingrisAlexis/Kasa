import React, { Component } from "react";
import styles from "./LodgingCard.module.scss";
import { Link } from "react-router-dom";

export default class LodgingCard extends Component {
    render() {
        const { lodging } = this.props;
        return (
            <Link className={styles.lodging_card} to={{pathname: `/lodging/${lodging.id}`}} key={lodging.id}>
                <div>
                    <img src={lodging.cover} alt="" />
                    <h2>{lodging.title}</h2>
                </div>
             </Link>
        );
    }
}