import React, { Component } from 'react';
import {AboutBanner, Accordion} from '../../components';
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
                    <div className={styles.accordions_container}>
                        {this.state.aboutMessages.map((aboutMessage) => {
                            return (
                                <Accordion key={aboutMessage.id} accordionWidth={styles.accordion_width} title={aboutMessage.title} content={aboutMessage.description} />
                            );
                        })}
                    </div>
                </main>
        );
    }
}