import { useState } from 'react';
import JourneyInput from '../JourneyInput';
import './Form.css';

function Form({
  loading,
  depCityChosen,
  arrCityChosen,
  setDepCityChosen,
  setArrCityChosen,
  departurePort,
  arrivalPort,
  getFlights,
  state,
  chosenArrAirport,
  chosenDepAirport,
}) {
  const [departureDate, setDepartureDate] = useState(
    new Date().toLocaleDateString('en-CA')
  );
  function dateChange(event) {
    setDepartureDate(event.target.value);
    console.log(departureDate);
  }
  return (
    <section className="form">
      <h3>Departure Date</h3>
      <input type="date" onChange={dateChange} value={departureDate}></input>
      <JourneyInput
        text="Departure City"
        state={state[0]}
        chosenAirport={chosenDepAirport}
        setCityChosen={setDepCityChosen}
        cityChosen={depCityChosen}
      />
      <JourneyInput
        text="Destination City"
        state={state[1]}
        chosenAirport={chosenArrAirport}
        setCityChosen={setArrCityChosen}
        cityChosen={arrCityChosen}
      />
      <button
        className="get-flights"
        onClick={() => getFlights(departurePort, arrivalPort, departureDate)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Find flights'}
      </button>
    </section>
  );
}

export default Form;

// create a state for the city
// create a handle change function to set the state on change. this uses target.value
// in the input tag, we have an onchange property that ruyns the handle change function
// set the valuye of the input tag to be the state

// we want to display airport names from the payload and country and city
// get payload from the backend fetch
// go through each object in the array and take out the info we need
// render each airport as a radio buttons
