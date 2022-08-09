import { useState } from "react";
import "./App.css";
import Progress from "./Components/Progress";
import Screen1 from "./Components/Screen1";
import Screen2 from "./Components/Screen2";
import Screen3 from "./Components/Screen3";
import Screen4 from "./Components/Screen4";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <h5>
        <img src="./logo.png" alt="logo" width="20px" /> Eden
      </h5>
      <Progress step={step} />

      {step === 1 && <Screen1 setStep={setStep} />}
      {step === 2 && <Screen2 setStep={setStep} />}
      {step === 3 && <Screen3 setStep={setStep} />}
      {step === 4 && <Screen4 setStep={setStep} />}
    </div>
  );
}

export default App;
