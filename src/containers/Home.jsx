import React, { Component } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Form from '../components/Form';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Scroll />
                <Form />
                <Footer />
            </React.Fragment>
        )
    }
}

const screen = window.screen.width;

const property = document.querySelector('body')

property.style.setProperty('--screenUser', `${screen}px`)

export default Home;