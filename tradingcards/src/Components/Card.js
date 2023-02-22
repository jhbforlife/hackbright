import CardHeading from './CardHeading.js';
import CardImage from './CardImage.js';
import CardDetails from './CardDetails.js';

const Card = (props) => {
    // Card data being used
    const name = props.data['name']['name-USen'];
    const imageURL = props.data['image_uri'];
    const birthday = props.data['birthday-string'];
    const hobby = props.data['hobby']
    const catchphrase = props.data['catch-phrase'];
    const personality = props.data['personality'];

    // Styling for the whole card
    const cardStyle = {
        backgroundColor: props.data['bubble-color'],
        color: props.data['text-color']
    };

    // Styling for the card details
    const cardDetailsStyle = {
        backgroundColor: '#fefefe2b',
        padding: '10px',
        borderRadius: '0.8rem'
    };

    return (
        <div className="card" id={`card-${name}`} style={cardStyle}>
            <CardHeading name={name} favoritesListState={props.favoritesListState} setShowFavorites={props.setShowFavorites} />
            <CardImage imageURL={imageURL} name={name} />
            <CardDetails birthday={birthday} hobby={hobby} catchphrase={catchphrase} personality={personality} style={cardDetailsStyle} />
        </div>
    );
}

export default Card;