import React, { Component } from 'react';
import { LodgingCard } from '../../components';
import { data } from '../../datas/data';
import styles from "./HomeContent.module.scss";

export default class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           lodgings: data,
        };
    }

    render() {
        return (
            <div className={styles.lodgings_contenair}>
                <div className={styles.lodgings_list}>
                    {this.state.lodgings.map((lodging) => {
                        return (
                            <LodgingCard key={lodging.id} lodging={{ ...lodging }} />
                        );
                    })}
                </div>
            </div>
        );
    }
}