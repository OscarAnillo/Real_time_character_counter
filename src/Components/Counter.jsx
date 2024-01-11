export const Counters = ({ totalCharacters, remaining }) => {
  return (
    <div className="container-counter">
      <p>
        Total Characters:{" "}
        <span className="total-counter">{totalCharacters}</span>
      </p>
      <p>
        Total Remaining: <span className="total-remaining">{remaining}</span>
      </p>
    </div>
  );
};
