import React, {useState} from "react";
import "./App.css";
import Form from '../Form'

function App() {

  return (
    <div>
      <header>Swifter</header>
      <h3>
        Departure
        <Form id="depart"/>
      </h3>

      <br></br>

      <h3>
        Arrival
        <Form id="arrive"/>
      </h3>
      
    
    </div>
  );
}

export default App;
