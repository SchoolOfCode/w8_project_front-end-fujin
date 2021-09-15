import React from 'react'
import FlightChanges from '../FlightChanges';

const tick;
const empty;

function Flight({dateTime, departureAirport, arrivalAirport, airline, flightNumber, changes, isElectronicTicketing, isAutomatedCheckin}){
        return (
        <section className='flight'>
            <h2>{dateTime} - {departureAirport} to {arrivalAirport}</h2>
            <h3>{airline} {flightNumber}</h3>
            <FlightChanges changes={changes}/>
            <section>
                <span>
                    <p>Electronic ticketing:</p>
                    <img src={isElectronicTicketing ? tick : empty} alt={isElectronicTicketing ? 'checkmark' : 'unticked box'}/>
                </span>
                <span>
                    <p>Automated checkin:</p>
                    <img src={isAutomatedCheckin ? tick : empty} alt={isElectronicTicketing ? 'checkmark' : 'unticked box'}/>
                </span>
            </section>
            <button>Book</button>
        </section>)
}

export default Flight;
