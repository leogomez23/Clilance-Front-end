import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from '../containers/Home';
import Container from '../components/Container'

const App = () => (
    <BrowserRouter>
        <Container>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Container>
    </BrowserRouter>
)

export default App;