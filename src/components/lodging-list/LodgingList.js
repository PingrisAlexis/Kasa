import React, { Component } from 'react';
import { LodgingCard } from './LodgingCard';
import { data } from '../../data';

export default class LodgingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {data.map((item) => {
                    return (
                        <LodgingCard key={item.id} data={{ ...item }} />
                    );
                })}
            </div>
        );
    }
}