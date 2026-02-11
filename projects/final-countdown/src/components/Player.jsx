import { useState,useRef } from "react";

export default function Player() {
  const enteredPlayeName = useRef();

  const [Playername, setPlayername] = useState(null);
  // const [submitted, setsubmiited] = useState(false);

  // function handleChange(event) {
  //   setsubmiited(false)
  //   setPlayername(event.target.value);
  // }

  function handleSubmit() {
    setPlayername(enteredPlayeName.current.value);
    enteredPlayeName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {Playername ?? ' '} </h2>
      <p>
        <input type="text" ref={enteredPlayeName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
