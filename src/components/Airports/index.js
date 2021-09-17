import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './airports.css';

function Airports({ airports, chosenAirport, cityChosen }) {
  return (
    <div className="airport-options">
      {cityChosen
        ? ''
        : airports.map((item, index) => {
            return (
              <div key={uuidv4()}>
                {index < 15 ? (
                  <button
                    className="airport-button"
                    onClick={() =>
                      chosenAirport(item.airport_name, item.airport_code)
                    }
                  >
                    {item.airport_name} : {item.city_name}
                  </button>
                ) : (
                  ''
                )}
              </div>
            );
          })}
    </div>
  );
}

export default Airports;
