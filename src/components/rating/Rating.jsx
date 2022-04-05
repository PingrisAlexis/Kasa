import React, {Component} from 'react';
import styles from './Rating.module.scss';
import {BsStarFill} from 'react-icons/bs';

export default class Rating extends  Component {
    
    render() {
        const {rating} = this.props;
        let lodgingRating = rating;
        const ratingScale = [];
        const maxRating = 5;

        for (let i = 0; i < maxRating; i++) {
            lodgingRating > 0 ? ratingScale.push(<BsStarFill className={styles.rating_full} />) : ratingScale.push(<BsStarFill className={styles.rating_empty} />)
            lodgingRating--;
        }
        
        return (
            <div className={styles.rating_container}>
                {
                    ratingScale.map((elt, index) => (
                        <span key={index}>{elt}</span>
                    ))
                }
            </div>

        )
    };
};