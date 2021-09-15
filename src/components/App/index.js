import React, { useState } from "react";
import "./App.css";
import Form from "../Form";

function App() {
  const [departurePort, setDeparturePort] = useState({ name: " ", code: " " });

  function chosenDepAirport(portName, portCode) {
    setDeparturePort({ ...departurePort, name: portName, code: portCode });
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
        <Form id="arrive" />
      </h3>
    </div>
  );
}

export default App;
