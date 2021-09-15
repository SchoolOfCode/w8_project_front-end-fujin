import {useState} from "react";
// import button component here

function Form () {
    
    const [city, setCity] = useState("")

    async function getAiportByCity(city) {
        const response = await fetch (`http://localhost:5000/airports?city=${city}`)
        const {payload} = await response.json()
        console.log(payload)
        // return payload
    }

    function handleChange(event) {
        setCity(event.target.value)
    }
    
    return (
        <section>
            <label >Departure City</label>
            <input type="text" name="city" placeholder="Enter Departure City" onChange={handleChange} value={city} required ></input>
            <button onClick={()=>getAiportByCity(city)}>Show Airports</button>
            <br></br>
            <label>Departure Date</label>
            <input type="date"></input>          
        </section>
    )
}

export default Form

// create a state for the city
// create a handle change function to set the state on change. this uses target.value
// in the input tag, we have an onchange property that ruyns the handle change function
// set the valuye of the input tag to be the state