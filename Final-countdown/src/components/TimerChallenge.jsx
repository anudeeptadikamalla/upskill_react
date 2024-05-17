import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetT }) {
  const timer = useRef();
  const dailog = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetT * 1000);

  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  const timerIsActive = timerRemaining > 0 && timerRemaining < targetT * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    dailog.current.open();
  }

  function handleReset() {
    setTimerRemaining(targetT * 1000);
  }

  function handleStartTime() {
    timer.current = setInterval(() => {
      setTimerRemaining((prevTimeerRemaining) => prevTimeerRemaining - 10);
    }, targetT * 10);
  }

  function handleStopTime() {
    clearInterval(timer.current);
    dailog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dailog}
        targetTime={targetT}
        remainingTime={timerRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h1>{title}</h1>
        <p className="challenge-time">
          {targetT} second{targetT > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTime : handleStartTime}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Timer Running.." : "Inactive"}
        </p>
      </section>
    </>
  );
}
