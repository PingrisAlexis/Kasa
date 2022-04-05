import React, {Component} from 'react';
import {HomeBanner, LodgingCard} from '../../components';
import styles from './HomePage.module.scss';
import {data} from '../../datas/data';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lodgings: data,
        };
    };
    
    render() {
        return (
                <main>
                    <HomeBanner />

                    <div className={styles.lodgings_contenair}>
                        <div className={styles.lodgings_list}>
                            {this.state.lodgings.map((lodging) => {
                                return (
                                    <LodgingCard key={lodging.id} lodging={{ ...lodging }} />
                                );
                            })}
                        </div>
                    </div>

                </main>
        );
    };
};