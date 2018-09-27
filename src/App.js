import React, { Component } from 'react';
import "./styles/main.css";

import ABaseComp from "./components/ABaseComp/ABaseComp";
import ABaseCompFunctional from "./components/ABaseCompFunctional/ABaseCompFunctional";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ display:"flex" , justifyContent:"center"}} >
        <ABaseComp />
        <ABaseCompFunctional />
      </div>
    );
  }
}

export default App;
