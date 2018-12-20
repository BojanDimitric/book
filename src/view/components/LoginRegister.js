import React, { Component } from 'react';

import './loginregister.css';

class LoginRegister extends Component {

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
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 mt-2" for="exampleInputPassword1">pass</label>
                                        <div className="col-10">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-check pl-0">
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                <form>
                                    <div className="form-group row my-3">
                                        <label className="col-2 mt-2" for="exampleInputEmail1">mail</label>
                                        <div className="col-10">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label className="col-2 mt-2" for="exampleInputPassword1">pass</label>
                                        <div className="col-10">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-check pl-0">
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
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