import React, { Component } from 'react';
import { Header, Footer, NotFound } from './components';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
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
                                    <Route component={NotFound} />
                                </Switch>
                        <Footer />
                    </BrowserRouter>
                </div>
        );
    }
}
