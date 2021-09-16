import React, { useState } from 'react';
import './App.css';
import Form from '../Form';
import Display from '../Display';

function App() {
  const [departurePort, setDeparturePort] = useState({ name: ' ', code: ' ' });
  const [arrivalPort, setArrivalPort] = useState({ name: ' ', code: ' ' });
  const [depCityChosen, setDepCityChosen] = useState(false);
  const [arrCityChosen, setArrCityChosen] = useState(false);
  const [flights, setFlights] = useState([]);
  const [requestMade, setRequestMade] = useState(false);

  function chosenDepAirport(portName, portCode) {
    setDeparturePort({ name: portName, code: portCode });
    setDepCityChosen(true);
  }

  function chosenArrAirport(portName, portCode) {
    setArrivalPort({ name: portName, code: portCode });
    setArrCityChosen(true);
  }

  async function getFlights(departurePort, arrivalPort, departureDate) {
    const response = await fetch(
      `https://fujin-flights.herokuapp.com/flights/?DepartureAirport=${departurePort.code}&ArrivalAirport=${arrivalPort.code}&DepartureDate=${departureDate}`
    );
    const { payload } = await response.json();
    // array.sort((a,b)=>a-b)
    setFlights(payload);
    setRequestMade(true);
    console.log(payload);
  }

  return (
    <main className="App">
      <header>
        <h1>Swifter Flights</h1>
        <h2 className="subtitle">Getting you there fast!</h2>
      </header>

      <Form
        depCityChosen={depCityChosen}
        setDepCityChosen={setDepCityChosen}
        arrCityChosen={arrCityChosen}
        setArrCityChosen={setArrCityChosen}
        departurePort={departurePort}
        arrivalPort={arrivalPort}
        getFlights={getFlights}
        state={[departurePort, arrivalPort]}
        chosenDepAirport={chosenDepAirport}
        chosenArrAirport={chosenArrAirport}
      />

      <br></br>

      {requestMade ? (
        <Display requestMade={requestMade} flights={flights} />
      ) : (
        ''
      )}
    </main>
  );
}

export default App;
