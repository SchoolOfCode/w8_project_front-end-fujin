import React, { useState } from 'react';
import './App.css';
import Form from '../Form';
import Display from '../Display';

function App() {
  const [departurePort, setDeparturePort] = useState({ name: ' ', code: ' ' });
  const [arrivalPort, setArrivalPort] = useState({ name: ' ', code: ' ' });

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

  async function getFlights(departurePort, arrivalPort, departureDate) {
    const response = await fetch(
      `http://localhost:5000/flights/?DepartureAirport=${departurePort.code}&ArrivalAirport=${arrivalPort.code}&DepartureDate=${departureDate}`
    );
    const { payload } = await response.json();
    setFlights(payload);
    setRequestMade(true);
    console.log(payload);
  }

  return (
    <div className="App">
      <header>
        <h1>Swifter Flights</h1>
        <h2 className="subtitle">Getting you there fast!</h2>
      </header>

      <Form
        departurePort={departurePort}
        arrivalPort={arrivalPort}
        getFlights={getFlights}
        state={[departurePort, arrivalPort]}
        chosenDepAirport={chosenDepAirport}
        chosenArrAirport={chosenArrAirport}
      />

      <br></br>

      {!loading && requestMade ? (
        <Display requestMade={requestMade} flights={flights} />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
