import React from 'react';
import Flight from '../Flight';
import { v4 as uuidv4 } from 'uuid';
import './display.css';

function Display({ flights }) {
  return (
    <>
      {flights ? 
      <section className="display">
        { flights.length > 0 ? (
          <h2>Available flights</h2>
        ) : (
          <h2>No available flights</h2>
        )}
        {flights.map(
          ({
            departure,
            arrival,
            airline,
            flightNumber,
            segmentInfo,
            electronicTicketing,
            automatedCheckIn,
          }) => (
            <Flight
              key={uuidv4()}
              dateTime={departure.passengerLocalTime}
              departureAirport={departure.airport.iata}
              arrivalAirport={arrival.airport.iata}
              airline={airline.iata}
              flightNumber={flightNumber}
              changes={segmentInfo}
              isElectronicTicketing={electronicTicketing}
              isAutomatedCheckin={automatedCheckIn}
            />
          )
        )}
      </section>
      : ""}
    </>
  );
}

export default Display;

/*
[
            {
              dateTime: "20:00 15-09-2021",
              departureAirport: "London Heathrow",
              arrivalAirport: "Dulles",
              airline: "British Airways",
              flightNumber: "5",
              changes: {
                numberOfStops: 1,
                intermediateAirports: {
                  iata: [{ station: "Germany" }, { station: "Spain" }],
                },
              },
              isElectronicTicketing: true,
              isAutomatedCheckin: false,
            },
            {
              dateTime: "20:00 15-09-2021",
              departureAirport: "London Heathrow",
              arrivalAirport: "Dulles",
              airline: "British Airways",
              flightNumber: "5",
              changes: {
                numberOfStops: 1,
                intermediateAirports: {
                  iata: [{ station: "Germany" }, { station: "Spain" }],
                },
              },
              isElectronicTicketing: true,
              isAutomatedCheckin: false,
            },
          ]
          */