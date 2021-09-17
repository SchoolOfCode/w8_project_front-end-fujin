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
    // Arrival time comes in as a string formatted xx:xx
    // Split string into array and convert each one to a number
    // compare the first index (the hour) of each item
    // if they are different, sort them in ascending order
    // If they are the same, compare the second index (the minute of each component) and sort them by ascending order
    payload.sort((firstTrip, secondTrip) => {
      const firstTripTime = firstTrip.arrival.passengerLocalTime
        .split(':')
        .map((element) => Number(element));

      const secondTripTime = secondTrip.arrival.passengerLocalTime
        .split(':')
        .map((element) => Number(element));

      if (firstTripTime[0] === secondTripTime[0]) {
        return firstTripTime[1] - secondTripTime[1];
      }
      return firstTripTime[0] - secondTripTime[0];
    });
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
      <footer></footer>
    </main>
  );
}

export default App;
