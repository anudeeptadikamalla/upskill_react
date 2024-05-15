import Header from "../src/components/header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    anualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  function ChnageHandler(inputIndetifier, newValue) {
    setUserInput((prevUseInput) => {
      return {
        ...prevUseInput,
        [inputIndetifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={ChnageHandler} />;
      <Results input={userInput} />
    </>
  );
}

export default App;
