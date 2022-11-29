import "./App.css";
import { Component } from "react";

class App extends Component {
  // only necessary for Class
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Jackie",
        },
        {
          name: "Makie",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
