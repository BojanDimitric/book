import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap'

import { Header } from '../view/partials/Header';
import { Footer } from '../view/partials/Footer';

import { LoginRegister } from '../view/components/LoginRegister';
import { Feed } from '../view/components/Feed';
import { FeedID } from '../view/components/FeedID';
import { People } from '../view/components/People';
import { Profile } from '../view/components/Profile';
import { ProfileID } from '../view/components/ProfileID';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path='/login' component={LoginRegister} />
                    <Route path='/feed' component={Feed} />
                    <Route path='/feed/:id' component={FeedID} />
                    <Route path='/people' component={People} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/users/:id' component={ProfileID} />
                    <Redirect from='/' to='/feed' />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
