import React from 'react';
import FlightChanges from '../FlightChanges';
import './flight.css';

import tick from '../../images/checkBox.svg';
import empty from '../../images/emptyCheckBox.svg';

function Flight({
  dateTime,
  departureAirport,
  arrivalAirport,
  airline,
  flightNumber,
  changes,
  isElectronicTicketing,
  isAutomatedCheckin,
}) {
  return (
    <section className="flight">
      <h2>
        {dateTime} - {departureAirport} to {arrivalAirport}
      </h2>
      <h3>
        {airline} {flightNumber}
      </h3>
      <div className="flight-info">
        <FlightChanges changes={changes} />
        <section>
          <span>
            <p>Electronic ticketing:</p>
            <img
              src={isElectronicTicketing ? tick : empty}
              alt={isElectronicTicketing ? 'checkmark' : 'unticked box'}
            />
          </span>
          <span>
            <p>Automated checkin:</p>
            <img
              src={isAutomatedCheckin ? tick : empty}
              alt={isAutomatedCheckin ? 'checkmark' : 'unticked box'}
            />
          </span>
        </section>
      </div>
      <button>Book</button>
    </section>
  );
}

export default Flight;
