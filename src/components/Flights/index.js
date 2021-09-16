import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './flights.css';

function Flights({ airports, chosenAirport }) {
  return (
    <div className="airport-options">
      {airports.map((item, index) => {
        return (
          <>
            {index < 15 ? (
              <button
                className="airport-button"
                key={uuidv4()}
                onClick={() =>
                  chosenAirport(item.airport_name, item.airport_code)
                }
              >
                {item.airport_name} : {item.city_name}
              </button>
            ) : (
              ''
            )}
          </>
        );
      })}
    </div>
  );
}

export default Flights;
