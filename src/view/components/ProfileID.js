import React, { Component, Fragment } from 'react';

import './profileid.css';

import { fetchProfileID } from '../../services/ProfileService';

class ProfileID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        fetchProfileID(this.props.match.params.id)
            .then(profile => this.setState({
                profile
            }));
    }

    render() {
        return (
            <Fragment>
                {this.state.profile &&
                    <div className="container mt-80">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <img className="img-width img-circle mx-auto d-block" src={this.state.profile.avatar} alt="avatar" />
                                <h4 className="text-center">{this.state.profile.name}</h4>
                                <p className="text-justify text-center">{this.state.profile.about}</p>
                                <div className="row">
                                    <div className="col-2 offset-2">
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-primary border-radius-left">P</button>
                                            <button type="button" className="btn btn-secondary">{this.state.profile.posts} posts</button>
                                            <button type="button" className="btn btn-secondary border-radius-right"></button>
                                        </div>
                                    </div>
                                    <div className="col-2 offset-2">
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-primary border-radius-left">C</button>
                                            <button type="button" className="btn btn-secondary">{this.state.profile.comments} comments</button>
                                            <button type="button" className="btn btn-secondary border-radius-right"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        );
    };
}

export {
    ProfileID
};