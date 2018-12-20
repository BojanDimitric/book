import React, { Component } from 'react';

import './people.css';

import { fetchUsers } from '../../services/UserService';

import { PeopleLink } from '../partials/PeopleLink';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputText: ''
        };
    }

    loadUsers = () => {
        fetchUsers()
            .then(users =>
                this.setState({
                    users
                })
            );
    };

    setInputText = (event) => {
        this.setState({ inputText: event.target.value });
        this.loadUsers();
    };

    filterInputText = (input) => {
        return input.name.toLowerCase() === this.state.inputText.toLowerCase();
    };

    displayUsers = () => {
        const filteredUsers = this.state.users.filter(this.filterInputText);
        if (filteredUsers.length > 0) {
            return filteredUsers.map(user => {
                return <PeopleLink user={user} />;
            });
        } else {
            return this.state.users.map(user => {
                return <PeopleLink user={user} />;
            });
        };
    };

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return (
            <div className="container mbt-80auto90" >
                <div className="row my-3">
                    <div className="col-4">
                        <p className="text-right text-secondary pt-2">Search users by name</p>
                    </div>
                    <div className="col-6">
                        <form>
                            <div className="form-group row">
                                <div className="col-12 px-0">
                                    <input type="text" className="form-control bg-primary text-white" id="inputText" onChange={this.setInputText} placeholder="Name" />
                                </div>
                            </div>
                        </form>
                    </div>
                    {this.displayUsers}
                </div>
            </div>
        );
    };
}

export {
    People
};