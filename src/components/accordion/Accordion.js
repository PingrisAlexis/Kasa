import React, { Component } from 'react';
import { BiChevronUp } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import styles from "./Accordion.module.scss";

export default class Accordion extends  Component {
    constructor(props) {
        super(props);
        this.state = { AccordionIsOpen : false };
    }

    toggleAccordionClick = () => {
        this.setState((state) => ({AccordionIsOpen: !state.AccordionIsOpen}));
    }

    render() {
        const {title, description} = this.props
        const AccordionIsOpen = this.state.AccordionIsOpen;

        return (
            <div className={styles.accordion_container}>
                <div className={styles.accordion_title_block} onClick={this.toggleAccordionClick}>
                    <span>{title}</span>
                    {AccordionIsOpen ? <BiChevronUp className={styles.accordion_BiChevron}/> : <BiChevronDown className={styles.accordion_BiChevron}/> }
                </div>
                <div className={styles.accordion_description_block}>
                    {AccordionIsOpen ? <span>{description}</span> : null }
                </div>
            </div>
        )
    }
}
