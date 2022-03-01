import React, { Component } from "react";
import Style from "./LodgingCard.module.scss";
import { Link } from "react-router-dom";

export class LodgingCard extends Component {
    render() {
        const { data } = this.props;
        return (
            <Link to={{pathname: `/lodging/${data.id}`, state: { data: data },}} key={data.id}>
                <div className={Style.lodgingCard}>
                    <img src={data.cover} alt="" />
                    <p>{data.title}</p>
                </div>
             </Link>

        );
    }
}

export default LodgingCard;