import { v4 as uuidv4 } from 'uuid';
import './flightChanges.css';

function FlightChanges({ changes }) {
  return (
    <section className='flight-changes'>
      <h4>
        {changes.numberOfStops} Flight{' '}
        {changes.numberOfStops === 1 ? 'Change' : 'Changes'}
      </h4>
      <ul>
        {changes.intermediateAirports.iata.map((change) => (
          <li key={uuidv4()}>{change.station}</li>
        ))}
      </ul>
    </section>
  );
}

export default FlightChanges;
