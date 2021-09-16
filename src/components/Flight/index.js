import React from 'react';
import FlightChanges from '../FlightChanges';
import './flight.css';

import tick from '../../images/checkBox.svg';
import empty from '../../images/emptyCheckBox.svg';

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
  return (
    <section className="flight">
      <div className="key-facts">
        <h3>
          {depDateTime} - {arrDateTime} | {departureAirport} to {arrivalAirport}
                    
        </h3>
        <h4>
          Airline: {airline}, Flight Number: {flightNumber}
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
