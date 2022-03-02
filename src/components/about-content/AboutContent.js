import React, { Component } from 'react';
import { aboutData } from '../../datas/aboutData';
import { Accordion } from '../../components';
import styles from "./AboutContent.module.scss";

export default class AboutContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutMessages: aboutData,
        };
    }

    render() {
        return (
            <div className={styles.accordions_container}>
                {this.state.aboutMessages.map((aboutMessage) => {
                    return (
                        <Accordion key={aboutMessage.id} title={aboutMessage.title} description={aboutMessage.description} />
                    );
                })}
            </div>
        );
    }
}