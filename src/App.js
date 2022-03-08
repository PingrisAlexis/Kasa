import React, { Component } from 'react';
import { Header, Footer, NotFound } from './components';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { HomePage, AboutPage, LodgingPage } from './views';

export default class App extends Component {
    render() {

        return (

                <div className="App">
                    <BrowserRouter>
                        <Header />
                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/about" component={AboutPage} />
                                    <Route path="/lodging/:id" component={LodgingPage} />
                                    <Route path="/not-found" component={NotFound} />

                                    <Route path="*">
                                        <Redirect to="/not-found" />
                                    </Route>
                                </Switch>
                        <Footer />
                    </BrowserRouter>
                </div>
        );
    }
}
