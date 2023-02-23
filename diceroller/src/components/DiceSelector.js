import { useState } from 'react';
import styles from './DiceSelector.module.css';

const DiceSelector = (props) => {

    // The selected dice to roll
    const [selectedDice, setSelectedDice] = useState([]);


    // Add / remove a die from selectedDice when clicked
    const diceClickHandler = (e) => {
        const die = e.target.id;
        e.target.classList.toggle(styles.diceSelected);
        selectedDice.includes(die)
            ? selectedDice.splice(selectedDice.indexOf(die), 1)
            : setSelectedDice(prev => [...prev, die]);
    };

    // Set the dice to roll for results when roll is clicked
    const rollClickHandler = () => {
        props.setDiceToRoll([...selectedDice].sort((a, b) => Number(a) - Number(b)));
    }

    return (
        <div>
            <div className={styles.diceSelector}>
                <table>
                    <thead>
                        <tr>{props.diceOptions.map(d => <th key={d}><img id={d} className={`dice ${styles.dice}`} src={`/images/${d}.svg`} alt={`d${d}`} onClick={diceClickHandler}></img></th>)}</tr>
                    </thead>
                    <tbody>
                        <tr>{props.diceOptions.map(d => <td key={d}>{`d${d}`}</td>)}</tr>
                    </tbody>
                </table>
            </div>
            <button className={styles.roll} onClick={rollClickHandler}>Roll</button>
        </div>
    )
}

export default DiceSelector;

