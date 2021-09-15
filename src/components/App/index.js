import './App.css';
import Display from '../Display';

function App() {
  return (
    <main className="App">
      <header>
        <h1>Fujin Flights</h1>
        <h2 className="subtitle">Getting you there fast!</h2>
      </header>
      <Display
        flights={[
          {
            dateTime: '20:00 15-09-2021',
            departureAirport: 'London Heathrow',
            arrivalAirport: 'Dulles',
            airline: 'British Airways',
            flightNumber: '5',
            changes: {
              numberOfStops: 1,
              intermediateAirports: {
                iata: [{ station: 'Germany' }, { station: 'Spain' }],
              },
            },
            isElectronicTicketing: true,
            isAutomatedCheckin: false,
          },
          {
            dateTime: '20:00 15-09-2021',
            departureAirport: 'London Heathrow',
            arrivalAirport: 'Dulles',
            airline: 'British Airways',
            flightNumber: '5',
            changes: {
              numberOfStops: 1,
              intermediateAirports: {
                iata: [{ station: 'Germany' }, { station: 'Spain' }],
              },
            },
            isElectronicTicketing: true,
            isAutomatedCheckin: false,
          },
        ]}
      />
    </main>
  );
}

export default App;
