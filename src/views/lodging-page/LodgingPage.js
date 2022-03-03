import React, { Component } from 'react';
import {Tag, Accordion} from '../../components';
import { data } from '../../datas/data';
import styles from "./LodgingPage.module.scss";

export default class LodgingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLodging: this.getSelectedLodging()
        };
    }
    getSelectedLodging = () => {
        const selectedLodging = data.filter(
            item => item.id === this.props.match.params.id
        )

      return selectedLodging[0]
    }
    render() {

        return (
            <main>

                <article className={styles.lodging_container}>
                    <img src={this.state.selectedLodging.cover} alt="" />
                    <h1>{this.state.selectedLodging.title}</h1>
                    <p>{this.state.selectedLodging.description}</p>
                </article>
                
                <Tag tags={this.state.selectedLodging.tags}/>

                <div className={styles.accordions_container}>
                    <Accordion accordionWidth={styles.accordion_width} title={"Description"} content={this.state.selectedLodging.description} />
                    <Accordion accordionWidth={styles.accordion_width} title={"Equipements"} content={this.state.selectedLodging.equipments} />
                </div>
                
            </main>
        );
    }
}