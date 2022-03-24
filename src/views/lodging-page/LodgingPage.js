import React, { Component } from 'react';
import { Tag, Collapse, Host, Rating, Gallery } from '../../components';
import { data } from '../../datas/data';
import styles from './LodgingPage.module.scss';
import {Redirect} from 'react-router-dom';


export default class LodgingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLodging: this.getSelectedLodging()
        };
    };

    getSelectedLodging = () => {
        const selectedLodging = data.filter(
            item => item.id === this.props.match.params.id
        )

      return selectedLodging[0]
    };

    render() {
        if (this.props.location.state === undefined)
            return <Redirect to="/not-found" />;

        return (
            <main className={styles.lodging_container}>
                <Gallery pictures={this.state.selectedLodging.pictures}/>

                <div className={styles.lodging_info}>
                    <article>
                        <h1>{this.state.selectedLodging.title}</h1>
                        <p>{this.state.selectedLodging.location}</p>
                        <Tag tags={this.state.selectedLodging.tags}/>
                    </article>

                    <div className={styles.host_tag_container}>
                        <Host name={this.state.selectedLodging.host.name} picture={this.state.selectedLodging.host.picture} />
                        <Rating rating={this.state.selectedLodging.rating} />
                    </div>
                </div>

                <div className={styles.lodging_collapses_container}>
                    <Collapse title={"Description"} content={this.state.selectedLodging.description} />
                    <Collapse title={"Équipements"} content={this.state.selectedLodging.equipments} />
                </div>
                
            </main>
        );
    };
};