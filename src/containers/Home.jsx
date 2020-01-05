import React, { Component } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
            </React.Fragment>
        )
    }
}

export default Home;