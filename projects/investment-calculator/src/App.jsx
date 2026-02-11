import Header from "../src/components/header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function ChnageHandler(inputIndetifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={ChnageHandler} />
      {!validInput && (
        <p className="center">
          Please enter a valid duration greater than zero
        </p>
      )}
      {validInput && <Results input={userInput} />}
    </>
  );
}

export default App;
