import React, { Component } from 'react';
import { HomeContent, HomeBanner } from '../../components';

export default class HomePage extends Component {
    render() {
        return (
                <main>
                    <HomeBanner />
                    <HomeContent />
                </main>
        );
    }
}