import React from "react";

import "../../scss/main.sass";

import User from "./User.jsx";
import Time from "./Time.jsx";
import Header from "./Header.jsx"

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <Header/>
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

export default HomePage;
