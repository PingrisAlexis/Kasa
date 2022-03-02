import React, { Component } from 'react';
import { LodgingContent } from '../../components';

export default class HomePage extends Component {
    constructor() {
        super();
    }



    render() {
        return (
            <main>
                <LodgingContent />
            </main>
        );
    }
}