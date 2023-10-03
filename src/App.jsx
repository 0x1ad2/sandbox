import { useState } from "react";
import DatePicker from "react-datepicker";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <h1>🏜️ Sandbox</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
}

export default App;
