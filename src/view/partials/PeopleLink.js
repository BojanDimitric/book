import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PeopleLink extends Component {
    render() {
        return <Link to={`/users/${this.props.user.id}`}>
            <div className="col-8 offset-2 mb-3">
                <div className="row border">
                    <div className="col-2">
                        <img className="img-fluid img-width img-circle my-2" src={this.props.user.avatar} alt="avatar"></img>
                    </div>
                    <div className="col-7">
                        <h3 className="name-width mt-2 mb-0">{this.props.user.name}</h3>
                        <p>{this.props.user.about}</p>
                    </div>
                    <div className="col-3">
                        <p className="mt-3 mb-0">Last post</p>
                        <p>at {(!this.props.user.date) ? '' : (this.props.user.date).substring(11, 16)}</p>
                    </div>
                </div>
            </div>
        </Link>
    };
}

export {
    PeopleLink
};