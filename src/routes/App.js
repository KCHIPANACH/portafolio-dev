import React from 'react';

import {BrowserRouter,Switch, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import Layout from '../components/Layout';
import Home from '../containers/Home';
import About from '../containers/About';
import Skill from '../containers/Skill';
import Projects from '../containers/Projects';

import '../style/main.scss';
import '../style/simple.css';


const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/skill', name: 'Contact', Component: Skill },
    { path: '/projects', name: 'Contact', Component: Projects },
  ]
  

const App = ()=>(
    <BrowserRouter>
        <Layout>        
            <Switch>
{/*                 <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skill" component={Skill} />
                <Route exact path="/projects" component={Projects} /> */}
                <div className="contenedor">
                     {routes.map(({ path, Component }) => (   
                             <Route key={path} exact path={path}>
                                {({ match }) => (
                                    <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                    >
                                          <Component />
                                     </CSSTransition>
                              )}  
                            </Route>
                        ))}
                </div>

            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;