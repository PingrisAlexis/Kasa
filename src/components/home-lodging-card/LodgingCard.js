import React, { Component } from "react";
import styles from "./LodgingCard.module.scss";
import { NavLink  } from "react-router-dom";

export default class LodgingCard extends Component {
    render() {
        const { lodging } = this.props;
        return (
            <NavLink  className={styles.lodging_card} to={`/lodging/${lodging.id}`} key={lodging.id}>
                <div>
                    <img src={lodging.cover} alt={`${lodging.title}'s picture`} />
                    <h2>{lodging.title}</h2>
                </div>
             </NavLink>
        );
    }
}