import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetT }) {
  const timer = useRef();
  const dailog = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  //   let timer;

  function handleStartTime() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dailog.current.open();
    }, targetT * 1000);

    setTimerStarted(true);
  }

  function handleStopTime() {
    clearTimeout(timer.current);
  }

  return (
    <>
    <ResultModal ref={dailog} targetTime={targetT} result="lost" />
      <section className="challenge">
        <h1>{title}</h1>
        {timerExpired && <p>You Lost</p>}
        <p className="challenge-time">
          {targetT} second{targetT > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStopTime : handleStartTime}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : "undefined"}>
          {timerStarted ? "Timer Running.." : "Inactive"}
        </p>
      </section>
    </>
  );
}
