import "./App.css";
import { WiMoonAltWaningCrescent6 } from "react-icons/wi";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="header mt-5">
        <WiMoonAltWaningCrescent6 size={50} />
        <h1 className="logo_type mt-2 mb-4">
          <strong>SKYCAST</strong>
        </h1>
        <h2 className="text-uppercase">
          The App That Keeps You Prepared for Anything
        </h2>
      </div>
      <Weather />
    </div>
  );
}

export default App;
