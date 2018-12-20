import React, { Component } from 'react';

import './addpostbuttons.css';

import { FaEdit, FaImage, FaVideo } from 'react-icons/fa';

class AddPostButtons extends Component {

    render() {
        return (
            <div className={`container display-${this.props.isShown}`} >
                <div className="row">
                    <div className="col-12">
                        <div>
                            <div className="bg-primary text" onClick={() => this.props.onTypeSelected('text')}>
                                <FaEdit className="icon" />
                                <span className="text-span">Post</span>
                            </div>
                            <div className="bg-success image" onClick={() => this.props.onTypeSelected('image')}>
                                <FaImage className="icon" />
                                <span className="image-span">Image</span>
                            </div>
                            <div className="bg-danger video" onClick={() => this.props.onTypeSelected('video')}>
                                <FaVideo className="icon" />
                                <span className="video-span">Video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export {
    AddPostButtons
};