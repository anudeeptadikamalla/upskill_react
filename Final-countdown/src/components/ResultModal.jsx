import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Result = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const lostUser = remainingTime <= 0;
  const formttedremTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {lostUser && <h2>You Lost</h2>}
      {!lostUser && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time with{" "}
        <strong> {formttedremTime} seconds left.</strong>
      </p>
      <form onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Result;
