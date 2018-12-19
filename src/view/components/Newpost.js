import React, { Component, Fragment } from 'react';

import { createTextPost, createImagePost, createVideoPost } from '../../services/PostService';

import { AddPostButtons } from '../partials/AddPostButtons';
import { ToggleButtons } from '../partials/ToggleButtons';

import { Textmodal } from '../partials/Textmodal';
import { Imagemodal } from '../partials/Imagemodal';
import { Videomodal } from '../partials/Videomodal';

import './Newpost.css';

class Newpost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            isModalOpen: false,
            postType: '',
        };
    }

    setCreatePostComponent = (postType) => {
        this.setState({ postType, isModalOpen: true });
    };

    toggle = () => {
        const toggle = !this.state.isShown;

        this.setState({
            isShown: toggle
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    };

    onTextPost = (value) => {
        return createTextPost(value)
            .then(isPostCreated => {
                if (isPostCreated === true) {
                    this.props.afterCreation();
                    this.closeModal();
                    this.toggle();
                }
            });
    };

    onImagePost = (value) => {
        return createImagePost(value)
            .then(isPostCreated => {
                if (isPostCreated === true) {
                    this.props.afterCreation();
                    this.closeModal();
                    this.toggle();
                }
            });
    };

    onVideoPost = (value) => {
        return createVideoPost(value)
            .then(isPostCreated => {
                if (isPostCreated === true) {
                    this.props.afterCreation();
                    this.closeModal();
                    this.toggle();
                }
            });
    };

    render() {
        return (
            <Fragment>
                <AddPostButtons isShown={this.state.isShown} onTypeSelected={this.setCreatePostComponent} />
                <ToggleButtons toggle={this.toggle} />
                <Textmodal onPost={this.onTextPost} onModalClose={this.closeModal} />
                <Imagemodal onPost={this.onImagePost} onModalClose={this.closeModal} />
                <Videomodal onPost={this.onVideoPost} onModalClose={this.closeModal} />
            </Fragment>
        );
    };
}

export {

    Newpost
};