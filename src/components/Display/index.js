import React from "react";
import Flight from '../Flight'
import {v4 as uuidv4} from 'uuid';
import './display.css';

function Display({ flights }) {
  return (
    <section className='display'>
      <h1>Available flights</h1>
      {flights.map(
        ({
          dateTime,
          departureAirport,
          arrivalAirport,
          airline,
          flightNumber,
          changes,
          isElectronicTicketing,
          isAutomatedCheckin,
        }) => (
          <Flight
            key={uuidv4()}
            dateTime={dateTime}
            departureAirport={departureAirport}
            arrivalAirport={arrivalAirport}
            airline={airline}
            flightNumber={flightNumber}
            changes={changes}
            isElectronicTicketing={isElectronicTicketing}
            isAutomatedCheckin={isAutomatedCheckin}
          />
        )
      )}
    </section>
  );
}

export default Display;
