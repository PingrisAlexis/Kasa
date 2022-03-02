import React, { Component } from 'react';
import { AboutBanner } from '../../components';
import { AboutContent } from '../../components';

export default class AboutPage extends Component {

    render() {
        return (
                <main>
                    <AboutBanner />
                    <AboutContent />
                </main>
        );
    }
}