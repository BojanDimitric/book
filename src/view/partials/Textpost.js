import React, { Component } from 'react';
import { deletePost } from '../../services/DeleteService';

class Textpost extends Component {

    deleteTextPost = () => {
        return deletePost(this.props.id)
            .then(isPostDeleted => console.log(isPostDeleted));
    };

    render() {
        return (
            <div className="row">
                <div className="col-8 offset-2 mb-3 pb-3 rounded bg-info">
                    <div className="row">
                        <div className='modal-header ml-auto border-bottom-0'>
                            <button type="button" className="close" onClick={this.deleteTextPost}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="col-12 mb-3">
                            <p className="text-justify text-white">{this.props.text}</p>
                        </div>
                        <div className="col-6">
                            <p className="text-left text-white mb-0">Text post</p>
                        </div>
                        <div className="col-6">
                            <p className="text-right text-white mb-0">{this.props.comments} Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export {
    Textpost
};