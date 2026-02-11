import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello React !!!</h2>
      {!changedText && <Output>Its good to see you</Output>}
      {changedText && <Output>How Are you</Output>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};

export default Greeting;
