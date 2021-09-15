import React, { useState } from "react";
import "./App.css";
import Form from "../Form";

function App() {
  const [departurePort, setDeparturePort] = useState({ name: " ", code: " " });
  const [arrivalPort, setArrivalPort] = useState({ name: " ", code: " " });
  const [departureDate, setDepartureDate] = useState("");

  function chosenDepAirport(portName, portCode) {
    setDeparturePort({name: portName, code: portCode });
    // console.log(departurePort);
  }

  function chosenArrAirport(portName, portCode) {
    setArrivalPort({name: portName, code: portCode });
    // console.log(departurePort);
  }

  function dateChange(event) {
    setDepartureDate(event.target.value)
    console.log(departureDate)
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

      <h3>Departure Date</h3>
      <input type="date" onChange={dateChange} value={(new Date()).toLocaleDateString('en-CA') }></input>

    </div>

    

    
  );
}

export default App;
