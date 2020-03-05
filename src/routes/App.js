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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skill" component={Skill} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;