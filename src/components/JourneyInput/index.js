import Airports from '../Airports';
import { useState } from 'react';
import './journeyInput.css';

function JourneyInput({
  cityChosen,
  setCityChosen,
  text,
  chosenAirport,
  state,
}) {
  const [city, setCity] = useState('');
  const [airports, setAirports] = useState([]);

  function handleChange(event) {
    setCity(event.target.value);
    setCityChosen(false);
    getAiportByCity(city);
  }

  async function getAiportByCity(city) {
    const response = await fetch(
      `https://fujin-flights.herokuapp.com/airports?city=${city}`
    );
    const { payload } = await response.json();
    if (payload.length === 0) {
      setAirports([
        { airport_name: 'No valid aiports', city_name: 'Check spelling' },
      ]);
    } else {
      setAirports(payload);
    }
  }
  return (
    <>
      <h3 className="journey-input-header">{text}</h3>
      <input
        className="journey-input"
        type="text"
        name="city"
        placeholder="Enter City"
        onChange={handleChange}
        value={city}
        required
      ></input>

      <Airports
        airports={airports}
        chosenAirport={chosenAirport}
        cityChosen={cityChosen}
      />
      {state.name.length > 1 ? (
        <h4 className="airport-choice">You have chosen {state.name}</h4>
      ) : (
        ''
      )}
    </>
  );
}

export default JourneyInput;
