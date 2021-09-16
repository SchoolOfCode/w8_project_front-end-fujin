import { useState } from "react";
import Flights from '../Flights';

function Form({ journey, state, chosenAirport }) {
  const [city, setCity] = useState("");
  const [airports, setAirports] = useState([]);
  

  function handleChange(event) {
    setCity(event.target.value);
    getAiportByCity(city)
  }

  async function getAiportByCity(city) {
    const response = await fetch(`http://localhost:5000/airports?city=${city}`);
    const { payload } = await response.json();
    if (payload.length === 0) {setAirports([{airport_name: "No valid aiports", city_name: "Check spelling"}])} else {setAirports(payload)};
  }


  return (
    <section journey={journey}>
      <input
        type="text"
        name="city"
        placeholder="Enter City"
        onChange={handleChange}
        value={city}
        required
      ></input>
            
      <Flights airports={airports} chosenAirport={chosenAirport} />


      {state ? <h4>You have chosen {state.name}</h4> : ""}

      
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
