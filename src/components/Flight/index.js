import React, { useState } from "react";
import FlightChanges from "../FlightChanges";
import "./flight.css";

import tick from "../../images/checkBox.svg";
import empty from "../../images/emptyCheckBox.svg";

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
  const [depAirportName, setDepAirportName] = useState("");
  const [arrAirportName, setArrAirportName] = useState("");

  async function getAirportName(airport, setAirport) {
    const response = await fetch(`http://localhost:5000/airports/${airport}`);
    const { payload } = await response.json();
    setAirport(payload.airport_name);
  }
  getAirportName(departureAirport, setDepAirportName);
  getAirportName(arrivalAirport, setArrAirportName);

  return (
    <section className="flight">
      <div className="key-facts">
        <h3>
          {dateTime} — {depAirportName} to {arrAirportName}
        </h3>
        <h4>
          {airline} {flightNumber}
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
              alt={isElectronicTicketing ? "checkmark" : "unticked box"}
            />
          </span>
          <span>
            <p>Automated checkin available:</p>
            <img
              src={isAutomatedCheckin ? tick : empty}
              alt={isAutomatedCheckin ? "checkmark" : "unticked box"}
            />
          </span>
        </section>
      </div>
    </section>
  );
}

export default Flight;
