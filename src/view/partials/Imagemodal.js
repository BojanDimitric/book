import React, { Component } from 'react';

class Imagemodal extends Component {
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
            <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-header">
                        <h5 className="modal-title">New image post</h5>
                        <button type="button" className="close" onClick={this.props.onModalClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="video-input">Type in or paste your image URL</label>
                            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Your URL" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.props.onModalClose}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={this.onSubmit}>POST</button>
                    </div>
                </div>
            </div>
        );
    };
};

export {
    Imagemodal
};