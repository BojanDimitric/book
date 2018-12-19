import React from 'react';

import './AddPostButtons.css';

import { FaPlusCircle } from 'react-icons/fa';

import { AddPostButtons } from './AddPostButtons';

class ToggleButtons extends AddPostButtons {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <div className="bg-warning plus" onClick={this.props.toggle}>
                                <FaPlusCircle className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export {
    ToggleButtons
};