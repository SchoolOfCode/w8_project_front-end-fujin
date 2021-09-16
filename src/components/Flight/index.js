import React, { useState } from 'react';
import FlightChanges from '../FlightChanges';
import './flight.css';

import tick from '../../images/checkBox.svg';
import empty from '../../images/emptyCheckBox.svg';

const url = 'https://fujin-flights.herokuapp.com/';

function Flight({
  depDateTime,
  arrDateTime,
  departureAirport,
  arrivalAirport,
  airline,
  flightNumber,
  changes,
  isElectronicTicketing,
  isAutomatedCheckin,
}) {
  const [depAirportName, setDepAirportName] = useState('');
  const [arrAirportName, setArrAirportName] = useState('');
  const [airlineName, setAirlineName] = useState('');

  async function getAirportName(airport, setAirport) {
    const response = await fetch(`${url}airports/${airport}`);
    const { payload } = await response.json();
    setAirport(payload.airport_name);
  }
  async function getAirlineName(airline) {
    const response = await fetch(`${url}airlines/${airline}`);
    const { payload } = await response.json();
    setAirlineName(payload.airline);
  }
  getAirportName(departureAirport, setDepAirportName);
  getAirportName(arrivalAirport, setArrAirportName);
  getAirlineName(airline);

  return (
    <section className="flight">
      <div className="key-facts">
        <h3>
          {depDateTime} - {arrDateTime} | {depAirportName} - {arrAirportName}
        </h3>
        <h4>
          {airlineName} | Flight Number {flightNumber}
        </h4>

        <button>Book</button>
      </div>
      <div className="flight-info">
        <FlightChanges changes={changes} />
        <section className="booking-options">
          <span>
            <p>Electronic ticketing available:</p>
            <img
              src={isElectronicTicketing ? tick : empty}
              alt={isElectronicTicketing ? 'checkmark' : 'unticked box'}
            />
          </span>
          <span>
            <p>Automated checkin available:</p>
            <img
              src={isAutomatedCheckin ? tick : empty}
              alt={isAutomatedCheckin ? 'checkmark' : 'unticked box'}
            />
          </span>
        </section>
      </div>
    </section>
  );
}

export default Flight;
