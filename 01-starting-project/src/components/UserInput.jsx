import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              ChnageHandler("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.anualInvestment}
            onChange={(event) =>
              ChnageHandler("initialInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              ChnageHandler("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => ChnageHandler("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
