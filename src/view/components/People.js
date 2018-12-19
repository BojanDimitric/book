import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={`/users/${user.id}`}>
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
                </Link>
            );
        });

        return (
            <div className="container mbt-80auto90">
                <div className="row my-3">
                    <div className="col-4">
                        <p className="text-right text-secondary pt-2">Search users by name</p>
                    </div>
                    <div className="col-6">
                        <form>
                            <div className="form-group row">
                                <div className="col-12 px-0">
                                    <input type="text" className="form-control bg-primary text-white" id="inputText" placeholder="Name" />
                                </div>
                            </div>
                        </form>
                    </div>
                    {users}
                </div>
            </div>
        );
    };
}

export {
    People
};