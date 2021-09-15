import "./App.css";
import Flight from "../Flight";

function App() {
  return (
    <div>
      <Flight dateTime='20:00 15-09-2021' departureAirport='London Heathrow' arrivalAirport='Dulles' airline='British Airways' flightNumber='5' changes={{numberOfStops: 1, intermediateAirports: {iata: [{station: 'Germany'}]}}} isElectronicTicketing={true} isAutomatedCheckin={false} />
    </div>
  );
}

export default App;
