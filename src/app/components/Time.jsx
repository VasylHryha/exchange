import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    }; 
  }
  componentDidMount(){
    setInterval(this.fetchTime, 500);
  }

  fetchTime=()=> {
    fetch("/utils/getTime")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          time: json.time
        });
      });
  }

  componentWillMount() {
    this.fetchTime();
  }

  render() {
      let date = new Date(this.state.time)
    return (
      <div className="user">
        Time : {date.toTimeString()}
      </div>
    );
  }
}

export default Time;
