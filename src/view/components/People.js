import React, { Component } from 'react';

import './people.css';

import { fetchUsers } from '../../services/UserService';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetchUsers()
            .then(users =>
                this.setState({
                    users
                })
            );
    }

    render() {
        const users = this.state.users.map(user => {
            return (
                <div className="col-8 offset-2 mb-3">
                    <div className="row border">
                        <div className="col-2">
                            <img className="img-fluid img-width img-circle my-2" src={user.avatar} alt="avatar"></img>
                        </div>
                        <div className="col-7">
                            <h3 className="mt-2 mb-0">{user.name}</h3>
                            <p>{user.about}</p>
                        </div>
                        <div className="col-3">
                            <p className="mt-3 mb-0">Last post</p>
                            <p>at {(!user.date) ? '' : (user.date).substring(11, 16)}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="container mbt-80auto90">
                {users}
            </div>
        );
    };
}

export {
    People
};