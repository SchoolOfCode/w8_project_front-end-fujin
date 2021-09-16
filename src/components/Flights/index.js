import React from 'react'

function Flights ({airports, chosenAirport}) {

    return (
        <div>
            {airports.map((item) => {
                return (
                    <h5 key={item.id} onClick={() => chosenAirport(item.airport_name, item.airport_code)}>{item.airport_name} : {item.city_name}</h5>
                );
            })}
        </div>
    )
}

export default Flights;