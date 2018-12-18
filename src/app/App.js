import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/jquery/dist/jquery';
// import '../../node_modules/popper/index';
// import '../../node_modules/bootstrap/dist/js/bootstrap';

import { Header } from '../view/components/Header';
import { Footer } from '../view/components/Footer';

import { Feed } from '../view/components/Feed';
import { People } from '../view/components/People';
import { Profile } from '../view/components/Profile';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path='/feed' component={Feed} />
                    <Route path='/people' component={People} />
                    <Route path='/profile' component={Profile} />
                    <Redirect from='/' to='/feed' />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
