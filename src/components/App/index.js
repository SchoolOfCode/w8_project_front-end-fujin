import React, { useState } from "react";
import "./App.css";
import Form from "../Form";
import Display from "../Display";

function App() {
  const [departurePort, setDeparturePort] = useState({ name: " ", code: " " });
  const [arrivalPort, setArrivalPort] = useState({ name: " ", code: " " });
  const [departureDate, setDepartureDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [flights, setFlights] = useState([]);

  const [loading, setLoading] = useState(false);
  const [requestMade, setRequestMade] = useState(false);

  function chosenDepAirport(portName, portCode) {
    setDeparturePort({ name: portName, code: portCode });
    // console.log(departurePort);
  }

  function chosenArrAirport(portName, portCode) {
    setArrivalPort({ name: portName, code: portCode });
    // console.log(departurePort);
  }

  function dateChange(event) {
    setDepartureDate(event.target.value);
    console.log(departureDate);
  }

  async function getFlights(departurePort, arrivalPort, departureDate) {
    const response = await fetch(
      `http://localhost:5000/flights/?DepartureAirport=${departurePort.code}&ArrivalAirport=${arrivalPort.code}&DepartureDate=${departureDate}`
    );
    const { payload } = await response.json();
    setFlights(payload);
    setRequestMade(true)
    console.log(payload);
  }

  return (
    <div className="App">
      <header>
        <h1>Swifter Flights</h1>
        <h2 className="subtitle">Getting you there fast!</h2>
      </header>
      
      <h3>Departure Date</h3>
      <input type="date" onChange={dateChange} value={departureDate}></input>

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
        Destination
        <Form
          journey="arrive"
          state={arrivalPort}
          chosenAirport={chosenArrAirport}
        />
      </h3>

      

      <br></br>

      <button
        onClick={() => getFlights(departurePort, arrivalPort, departureDate)}
      >
        Find flights
      </button>

      {!loading && requestMade ? (
        <Display
          requestMade={requestMade}
          flights={flights}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
