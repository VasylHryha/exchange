import React from "react";
import { render } from "react-dom";

import "./../scss/main.scss";

import User from "./components/User.jsx";
import Time from "./components/Time.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <User />
        <Time />
        <p>Welcome to the ReactJS and ExpressJS generator</p>
        <p>
          Check out the
          <a
            href="https://github.com/kevin-wynn/reactjs-express-generator/wiki"
            target="_blank"
          >
            documentation
          </a>
          to get started.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
