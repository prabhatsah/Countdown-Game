import { useState, useRef } from "react";

export default function Player() {
  const [enteredUserName, setEnteredUserName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    setEnteredUserName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredUserName ?? "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
