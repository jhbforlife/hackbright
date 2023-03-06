import { useState } from "react";
import { randomInt } from "../utils/random";

function Dice({ nSides }) {
  const [value, setValue] = useState(randomInt(1, nSides));

  const handleClick = () => {
    setValue(randomInt(1, nSides));
  };

  return (
    <div className="Dice" onClick={handleClick}>
      <div className="Dice-info">sides = {nSides}</div>
      <div className="Dice-value">{value}</div>
    </div>
  );
}

export default Dice;
