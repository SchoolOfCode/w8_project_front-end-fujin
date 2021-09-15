import {useState} from "react";
// import button component here

function Form () {

    const [city, setCity] = useState("")
    const [airports, setAirports] = useState([])
    const [chosen, setChosen] = useState("")
    const [code, setCode] = useState("")

    function handleChange(event) {
        setCity(event.target.value)
    }

    function addAirports(payload) {
        setAirports(payload)
        console.log(airports)
    }

    async function getAiportByCity(city) {
        const response = await fetch (`http://localhost:5000/airports?city=${city}`)
        const {payload} = await response.json()
        console.log(payload)
        addAirports(payload)
    }
       
    function chosenAirport(name, code) {
        setChosen(name)
        setCode(code)
    }

    return (
        <section>            
            <input type="text" name="city" placeholder="Enter Departure City" onChange={handleChange} value={city} required ></input>
            <button onClick={()=>getAiportByCity(city)}>Show Airports</button>
            {airports.map(item => {
                return <li onClick={()=>chosenAirport(item.airport_name, item.airport_code)}>{item.airport_name}, {item.city_name}</li>
            })}
            <h5>You have chosen {chosen}</h5>
            <h5>code {code}</h5>
       
        </section>
    )
}

export default Form

// create a state for the city
// create a handle change function to set the state on change. this uses target.value
// in the input tag, we have an onchange property that ruyns the handle change function
// set the valuye of the input tag to be the state

// we want to display airport names from the payload and country and city
// get payload from the backend fetch 
// go through each object in the array and take out the info we need
// render each airport as a radio buttons