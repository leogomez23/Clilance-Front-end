import React, { Component } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import From from '../components/Form';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Scroll />
                <From />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;