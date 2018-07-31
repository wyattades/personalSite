import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { hot } from 'react-hot-loader';

import Home from './Home';
import NoMatch from './NoMatch';
import Projects from './Projects';
import ProjectItem from './ProjectItem';
import About from './About';
import Contact from './Contact';
import projects from '../projects';

const App = () => (
  <Router>
    <div className="wrapper">
      <Route
        render={({ location }) => (
          <TransitionGroup component="main" className="main">
            <CSSTransition key={location.key} classNames="pagefade" timeout={500} mountOnEnter unmountOnExit>
              <div className="main-inner">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/map_maker" render={() => { // Support legacy url for map_maker
                    window.location.href = 'https://wyattades.github.io/json_map_generator/';
                  }}/>
                  <Route
                    exact
                    path="/projects"
                    render={props => (
                      <Projects {...props} projects={projects} />
                    )}
                  />
                  <Route
                    path="/projects/:id"
                    render={props => {
                      const project = projects.filter(p => p.id === props.match.params.id);
                      return project.length === 1 ? (
                        <ProjectItem {...props} project={project[0]} />
                      ) : (
                        <NoMatch/>
                      );
                    }}
                  />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      
      <div className="topbar">
        <div className="container">
          <nav className="nav">
            <ul>
              <li><NavLink exact to="/"><h3>Home</h3></NavLink></li>
              <li><NavLink to="/projects"><h3>Projects</h3></NavLink></li>
              <li><NavLink to="/about"><h3>About</h3></NavLink></li>
              <li><NavLink to="/contact"><h3>Contact</h3></NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
