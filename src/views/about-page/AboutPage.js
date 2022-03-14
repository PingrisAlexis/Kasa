import React, { Component } from 'react';
import {AboutBanner, Collapse} from '../../components';
import styles from "./AboutPage.module.scss";
import {aboutData} from "../../datas/aboutData";

export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutMessages: aboutData,
        };
    }
    render() {
        return (
                <main>
                    <AboutBanner />
                    <div className={styles.collapses_container}>
                        {this.state.aboutMessages.map((aboutMessage) => {
                            return (
                                <Collapse key={aboutMessage.id} title={aboutMessage.title} content={aboutMessage.description} />
                            );
                        })}
                    </div>
                </main>
        );
    }
}