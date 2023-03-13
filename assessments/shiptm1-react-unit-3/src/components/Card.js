import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <h3>{props.heading}</h3>
            {props.body}
        </div>
    );
}

export default Card;