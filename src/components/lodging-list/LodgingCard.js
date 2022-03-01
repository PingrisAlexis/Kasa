import React, { Component } from "react";
import styles from "./LodgingCard.module.scss";
import { Link } from "react-router-dom";
import {data} from "../../data";
export class LodgingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
        };
    }
    render() {
        const { data } = this.props;
        return (
            <Link to={{pathname: `/lodging/${data.id}`, state: { data: data },}} key={data.id}>
                <div className={styles.lodgingCard}>
                    <img src={data.cover} alt="" />
                    <p>{data.title}</p>
                </div>
             </Link>

        );
    }
}

export default LodgingCard;