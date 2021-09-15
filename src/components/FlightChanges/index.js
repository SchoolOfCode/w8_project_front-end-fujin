import { v4 as uuidv4 } from 'uuid';
import './flightChanges.css';

function FlightChanges({ changes }) {
  return (
    <section>
      <h4>{changes.numberOfStops} Flight Changes</h4>
      <ul>
        {changes.intermediateAirports.iata.map((change) => (
          <li key={uuidv4()}>{change.station}</li>
        ))}
      </ul>
    </section>
  );
}

export default FlightChanges;
