import './App.css';
import { Component } from 'react';

class App extends Component {

  // only necessary for Class
  constructor(){
    super();
    this.state = {
      monster1: {
        name: "Linda"
      },
      monster2: {
        name: "Frank"
      },
      monster3: {
        name: "Jackie"
      }

    }
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>
      </div>
    );
  }

}

export default App;
