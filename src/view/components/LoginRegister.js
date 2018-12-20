import React, { Component } from 'react';

import './loginregister.css';

import { registerUser, loginUser } from '../../services/RegisterLoginService';

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerusername: '',
            registeremail: '',
            loginusername: '',
            loginemail: ''
        }
    }

    registerUsernameChange = (event) => this.setState({ registerusername: event.target.value });

    registerPassChange = (event) => this.setState({ registeremail: event.target.value });

    loginUsernameChange = (event) => this.setState({ loginusername: event.target.value });

    loginPassChange = (event) => this.setState({ loginemail: event.target.value });

    registerUser = () => {
        return registerUser(this.state.registerusername, this.state.registeremail)
            .then(response => console.log(response));
    };

    loginUser = () => {
        return loginUser(this.state.registerusername, this.state.registeremail)
            .then(response => console.log(response));
    };

    render() {
        return (
            <div className="container mtb-80auto70 ">
                <div className="row my-5">
                    <div className="col-6">
                        <h3>BitBookLogin</h3>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolores atque
                            quis veritatis similique modi nostrum ullam provident delectus obcaecati, totam nam quidem dignissimos
                            sit veniam minima ipsum pariatur qui, sint voluptate repellat unde aut harum. Aut minima nesciunt alias
                            quo facilis similique optio amet tempore aperiam, itaque, expedita fugiat!</p>
                    </div>
                    <div className="offset-1 col-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="home" aria-selected="true">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="profile" aria-selected="false">Register</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <form>
                                    <div className="form-group row my-3">
                                        <label className="col-2 mt-2" for="exampleInputEmail1">mail</label>
                                        <div className="col-10">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.loginUsernameChange} placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 mt-2" for="exampleInputPassword1">pass</label>
                                        <div className="col-10">
                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.loginPassChange} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-check pl-0">
                                        <button type="submit" className="btn btn-primary btn-block" onSubmit={this.loginUser}>Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                <form>
                                    <div className="form-group row my-3">
                                        <label className="col-2 mt-2" for="exampleInputEmail1">mail</label>
                                        <div className="col-10">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.registerUsernameChange} placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label className="col-2 mt-2" for="exampleInputPassword1">pass</label>
                                        <div className="col-10">
                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.loginPassChange} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-check pl-0">
                                        <button type="submit" className="btn btn-primary btn-block" onSubmit={this.registerUser}>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export {
    LoginRegister
};