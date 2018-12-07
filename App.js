import React, { Component } from 'react';
import './App.css';
import Wrapper from "./wrapper/wrapper"

class App extends Component {
  state = {
    total : 0,
    equasion : "Enter: ",
    number : [],
    preveq : "",
    view : true,
    message : "Hide the Calculator"

  }

  clicked = (val) => {
    this.state.number.push(val);
    var joined = this.state.number.join("");
    this.setState({equasion : joined});
  };

  eval = () => {
    var value = parseInt(this.state.number.join(""));

    if (this.state.preveq === "-") {
      this.setState({equasion : parseInt(this.state.total) - parseInt(value)})
    }

    else if (this.state.preveq === "+") {
      this.setState({equasion : parseInt(this.state.total) + parseInt(value)})
    }
    
    else if (this.state.preveq === "/") {
      this.setState({equasion : parseInt(this.state.total) / parseInt(value)})
    }
    else if (this.state.preveq === "*") {
      this.setState({equasion : parseInt(this.state.total) * parseInt(value)})
    } 
  }
  
  sub = () => {
    this.setState({total : this.state.number.join("")})
    this.setState({number : []})
    this.setState({equasion : this.state.number.join("") + " -"});
    this.setState({preveq : "-"});
  };

  add = () => {
    this.setState({total : this.state.number.join("")})
    this.setState({number : []})
    this.setState({equasion : this.state.number.join("") + " +"});
    this.setState({preveq : "+"});
  };

  div = () => {
    this.setState({total : this.state.number.join("")})
    this.setState({number : []})
    this.setState({equasion : this.state.number.join("") + " /"});
    this.setState({preveq : "/"});
  };
  mult = () => {
    this.setState({total : this.state.number.join("")})
    this.setState({number : []})
    this.setState({equasion : this.state.number.join("") + " *"});
    this.setState({preveq : "*"});
  };

  clear = () => {
    this.setState({total : 0})
    this.setState({number : []})
    this.setState({equasion : "Enter:  "});
  };

  toggleView = () => {
    var rev = this.state.view;
    this.setState({view: !rev})
    if (rev === true){
    this.setState({message : "Bring the Calculator Back"})
    }
    else {
      this.setState({message : "Hide the Calculator"})
    }
    
  }

  render() {
    return (
      <div className="App">
      <h1>Simple Calculator app</h1>
      <button onClick={this.toggleView}>{this.state.message}</button>
      {this.state.view ? <Wrapper 
          equasion={this.state.equasion} 
          clear={this.clear} 
          eval={this.eval}
          mult={this.mult}
          div={this.div}
          sub={this.sub}
          add={this.add}
          clicked={this.clicked}/> : null}
          
      </div>
    );
  }
}

export default App;