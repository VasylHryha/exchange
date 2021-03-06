import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage.jsx";

function Routes() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/aaa">HeHeHe</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/aaa" component={()=>"fuck you"} /> 
        </div>
      </Router>
    );
  } 
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
  
  export default Routes;