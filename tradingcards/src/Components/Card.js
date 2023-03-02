import { useState } from 'react';
import CardHeading from './CardHeading.js';
import CardImage from './CardImage.js';
import CardDetails from './CardDetails.js';
import styles from './Card.module.css';

const Card = (props) => {
    // State to update CardHeading favorite icon
    const [favorite, setFavorite] = useState(false);

    // Card data used
    const name = props.data['name']['name-USen'];
    const imageURL = props.data['image_uri'];
    const birthday = props.data['birthday-string'];
    const hobby = props.data['hobby']
    const catchphrase = props.data['catch-phrase'];
    const personality = props.data['personality'];

    // Dynamic styling for card
    const cardStyle = {
        backgroundColor: props.data['bubble-color'],
        color: props.data['text-color']
    };

    // Handler for clicking the favorite icon in CardHeading
    // Toggle the favorite state and calls updateFavorites
    // in Cards.js
    const favoriteHandler = () => {
        setFavorite(!favorite);
        props.updateFavorites(name);
    }

    return (
        <div className={styles.card} id={`card-${name}`} style={cardStyle}>
            <CardHeading name={name} h1Class={styles.cardName} iconClass={`${styles.cardFavoriteIcon} ${!favorite ? styles.cardNotFavorite : ''}`} favoriteHandler={favoriteHandler} />
            <CardImage className={styles.cardImage} imageURL={imageURL} name={name} />
            <CardDetails className={styles.cardDetails} birthday={birthday} hobby={hobby} catchphrase={catchphrase} personality={personality} />
        </div>
    );
}

export default Card;