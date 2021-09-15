import {useState} from "react";
import "./App.css";
import Form from '../Form'

function App() {
  
  const [departCity, setDepartCity] = useState("")

  async function getAiportByCity(city) {
    const response = await fetch (`http://localhost:5000/airports?city=${city}`)
    const {payload} = await response.json()
    console.log(payload)
    return payload
}

  return (
    <div>
      <header>Swifter</header>

      <DepartForm />
      {list component}

      <ArriveForm/>
      {list component}

      {date thing}
    </div>
  );
}

export default App;
