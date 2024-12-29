import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  timeRemaining,
  targetTime,
  onReset,
}) {
  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
