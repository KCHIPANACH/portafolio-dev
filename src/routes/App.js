import React from 'react';

import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import About from '../containers/About';
import Skill from '../containers/Skill';
import Projects from '../containers/Projects';

import '../style/main.scss';
import '../style/simple.css';


const App = ()=>(
    <BrowserRouter>
        <Layout>        
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/skill" component={Skill} />
                <Route path="/projects" component={Projects} />
                <Route exact path="/" component={Home} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;