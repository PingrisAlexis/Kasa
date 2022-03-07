import React, { Component } from 'react';
import styles from "./Gallery.module.scss";
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

export default class Gallery extends  Component {
    constructor(props) {
        super(props);
        this.state = { currentPictureIndex: 0 };

    }
    render() {
        const pictures = this.props.pictures;
        const length = pictures.length
        const { currentPictureIndex } = this.state

        const previousSlide = () => {
            this.setState((lastState) => ({
                currentPictureIndex: lastState.currentPictureIndex !== 0 ? lastState.currentPictureIndex - 1 : lastState.currentPictureIndex = length - 1
            }))
        };

        const nextSlide = () => {
            this.setState((lastState) => ({
                currentPictureIndex: lastState.currentPictureIndex !== length - 1 ? lastState.currentPictureIndex + 1 : lastState.currentPictureIndex = 0
            }))
        };

        return (
            <div className={styles.gallery_container}>
                <img  src={pictures[currentPictureIndex]} alt="gallery" />
                <div className={styles.arrows_container}>
                    <BsChevronLeft className={[styles.arrow, styles.left].join(" ")} onClick={previousSlide} />
                    <BsChevronRight className={[styles.arrow, styles.right].join(" ")} onClick={nextSlide} />
                </div>
                <span className={styles.gallery_counter}>{currentPictureIndex + 1}/{length}</span>
            </div>
        );
    }
}