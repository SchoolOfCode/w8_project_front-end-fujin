import React, { useState } from "react";
import "./App.css";
import Form from "../Form";

function App() {
  const [departurePort, setDeparturePort] = useState({ name: " ", code: " " });
  const [arrivalPort, setArrivalPort] = useState({ name: " ", code: " " });
  const [departureDate, setDepartureDate] = useState((new Date()).toLocaleDateString('en-CA'));
  const [flights, setFlights] = useState([])

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

  async function getFlights(departurePort, arrivalPort, departureDate) {
    const response = await fetch(`http://localhost:5000/flights/?DepartureAirport=${departurePort.code}&ArrivalAirport=${arrivalPort.code}&DepartureDate=${departureDate}`);
    const { payload } = await response.json();
    console.log(payload);
    setFlights(payload) 
  }

  return (
    <div>
      <header>Swifter</header>
      <h3>
        Departure
        <Form
          journey="depart"
          state={departurePort}
          chosenAirport={chosenDepAirport}
        />
      </h3>

      <br></br>

      <h3>
        Arrival
        <Form 
          journey="arrive"
          state={arrivalPort}
          chosenAirport={chosenArrAirport}/>
      </h3>

      <h3>Departure Date</h3>
      <input type="date" onChange={dateChange} value={departureDate }></input>

      <br></br>

      <button onClick={()=>getFlights(departurePort, arrivalPort, departureDate)}>Find flights</button>
      
    </div>

    

    
  );
}

export default App;
