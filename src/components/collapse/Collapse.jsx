import React, {Component} from 'react';
import {BiChevronUp, BiChevronDown} from 'react-icons/bi'
import styles from './Collapse.module.scss';

export default class Collapse extends  Component {
    
    constructor(props) {
        super(props);
        this.state = {collapseIsOpen : false};
    };

    toggleCollapseClick = () => {
        this.setState((state) => ({collapseIsOpen: !state.collapseIsOpen}));
    };

    render() {
        const {title, content} = this.props;
        const collapseIsOpen = this.state.collapseIsOpen;

        return <div className={styles.collapse_container}>
                    <div className={styles.collapse_title_block} onClick={this.toggleCollapseClick}>
                        <span>{title}</span>
                        {collapseIsOpen ? <BiChevronUp className={styles.collapse_BiChevron}/> : <BiChevronDown className={styles.collapse_BiChevron}/> }
                    </div>
                    {collapseIsOpen ? <div className={styles.collapse_description_block}>
                        {typeof (content) === "string" ? <span>{content}</span> :
                            content.map((elt, index) =>
                                <li key={index}>{elt}</li>
                            )
                        }
                    </div> : null}
                </div>
    };
};
