import React, { Component } from 'react';

import './profile.css';

import { fetchProfile } from '../../services/ProfileService';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }

    componentDidMount() {
        fetchProfile()
            .then(profile => this.setState({
                profile
            }));
    }

    render() {
        return (
            <div className="container mt-80">
                <div className="row">
                    <div className="col-8 offset-2">
                        <img className="img-circle mx-auto d-block" src={this.state.profile.avatar} alt="avatar" />
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
        );
    };
}

export {
    Profile
};