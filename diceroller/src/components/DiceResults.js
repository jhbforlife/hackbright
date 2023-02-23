import styles from './DiceResults.module.css';
import { randomInt } from '../utils/random';

const DiceResults = (props) => {

    // If there are no dice to roll, there are no results to show
    if (props.diceToRoll.length === 0) {
        return;
    }

    return (
        <div>
            <h2>Results</h2>
            <div className={styles.results}>
                <table>
                    <thead><tr>{props.diceToRoll.map(d => <th key={d}><img className="dice" src={`/images/${d}.svg`}></img></th>)}</tr></thead>
                    <tbody><tr>{props.diceToRoll.map(d => <td key={d}>{`${randomInt(1, d)}`}</td>)}</tr></tbody>
                </table>
            </div>
        </div>
    )

}

export default DiceResults;