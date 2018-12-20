import React, { Component, Fragment } from 'react';

class Videomodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onValueChange = (event) => this.setState({ value: event.target.value });

    onSubmit = () => {
        this.props.onPost(this.state.value);
    }

    render() {
        return (
            <Fragment>
                {this.props.isModalOpen &&
                    <div className="container">
                        <div className="row modal-overlay">
                            <div className="col-8 offset-2 px-0">
                                <div id="videoModal" className="border rounded">
                                    <div className="modal-header">
                                        <h5 className="modal-title">New video post</h5>
                                        <button type="button" className="close" onClick={this.props.onModalClose}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label for="video-input">Type in or paste your video URL</label>
                                            <input onChange={this.onValueChange} type="text" className="form-control mb-2 mr-sm-2" placeholder="Your URL" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={this.props.onModalClose}>Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.onSubmit}>POST</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        );
    };
};

export {
    Videomodal
};