import { forwardRef, useImperativeHandle, useRef } from "react";

const Result = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog className="result-modal" ref={dialog}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time with <strong> X seconds left.</strong>
      </p>
      <form>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
