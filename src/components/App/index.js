import React, { useState } from "react";
import "./App.css";
import Form from "../Form";

function App() {
  const [departurePort, setDeparturePort] = useState({ name: " ", code: " " });
  const [arrivalPort, setArrivalPort] = useState({ name: " ", code: " " });

  function chosenDepAirport(portName, portCode) {
    setDeparturePort({name: portName, code: portCode });
    // console.log(departurePort);
  }

  function chosenArrAirport(portName, portCode) {
    setArrivalPort({name: portName, code: portCode });
    // console.log(departurePort);
  }

  return (
    <div>
      <header>Swifter</header>
      <h3>
        Departure
        <Form
          id="depart"
          state={departurePort}
          chosenAirport={chosenDepAirport}
        />
      </h3>

      <br></br>

      <h3>
        Arrival
        <Form 
          id="arrive"
          state={arrivalPort}
          chosenAirport={chosenArrAirport}/>
      </h3>
    </div>
  );
}

export default App;
