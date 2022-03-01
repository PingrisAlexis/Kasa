import React, { Component } from 'react';
import { Header, LodgingList, Banner } from './components';
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from 'react-router-dom';

class App extends Component {

    render() {
        return (

        <Router>
            <div className="App">
                <Header />
                <Banner />
                <Routes>
                    <Route path="/" element={<LodgingList />} />
                    {/*<Route path="/Lodging/id" element={<Lodging />} />*/}
                </Routes>
            </div>
        </Router>
        );
    }
}

export default App;