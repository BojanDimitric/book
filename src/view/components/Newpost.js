import React, { Fragment } from 'react';

import { createTextPost, createImagePost, createVideoPost } from '../../services/PostService';

import { AddPostButtons } from '../partials/AddPostButtons';
import { ToggleButtons } from '../partials/ToggleButtons';

import { Textmodal } from '../partials/Textmodal';
import { Imagemodal } from '../partials/Imagemodal';
import { Videomodal } from '../partials/Videomodal';

import './newpost.css';

class Newpost extends ToggleButtons {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            isModalOpen: false,
            postType: '',
        };
    }

    setPostType = (postType) => {
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
                };
            });
    };

    onImagePost = (value) => {
        return createImagePost(value)
            .then(isPostCreated => {
                if (isPostCreated === true) {
                    this.props.afterCreation();
                    this.closeModal();
                    this.toggle();
                };
            });
    };

    onVideoPost = (value) => {
        return createVideoPost(value)
            .then(isPostCreated => {
                if (isPostCreated === true) {
                    this.props.afterCreation();
                    this.closeModal();
                    this.toggle();
                };
            });
    };

    showModalType = (type) => {
        console.log(type);
        if (type === 'text') {
            return <Textmodal onPost={this.onTextPost} onModalClose={this.closeModal} isModalOpen={this.state.isModalOpen} />;
        } else if (type === 'image') {
            return <Imagemodal onPost={this.onImagePost} onModalClose={this.closeModal} isModalOpen={this.state.isModalOpen} />;
        } else if (type === 'video') {
            return <Videomodal onPost={this.onVideoPost} onModalClose={this.closeModal} isModalOpen={this.state.isModalOpen} />;
        };
    };

    render() {
        return (
            <Fragment>
                <AddPostButtons isShown={this.state.isShown} onTypeSelected={this.setPostType} />
                <ToggleButtons toggle={this.toggle} />
                {this.showModalType(this.state.postType)}
            </Fragment>
        );
    };
}

export {

    Newpost
};