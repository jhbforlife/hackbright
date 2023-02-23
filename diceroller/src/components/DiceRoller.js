import { useState } from "react";

import DiceResults from "./DiceResults";
import DiceSelector from "./DiceSelector";

const DiceRoller = () => {

    // Available dice to roll
    const diceOptions = [4, 6, 8, 10, 12, 20];

    // The selected dice to roll when roll is clicked
    const [diceToRoll, setDiceToRoll] = useState([]);

    return (
        <div>
            <DiceSelector diceOptions={diceOptions} setDiceToRoll={setDiceToRoll} />
            <DiceResults diceOptions={diceOptions} diceToRoll={diceToRoll} />
        </div>
    );

}

export default DiceRoller;