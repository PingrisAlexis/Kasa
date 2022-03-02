import React, { Component } from 'react';
import { Header, Footer, NotFound } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage } from './views';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;