import CardHeading from './CardHeading.js';
import CardImage from './CardImage.js';
import CardDetails from './CardDetails.js';

const Card = (props) => {
    // All of the card data to use
    const name = props.data['name']['name-USen'];
    const imageURL = props.data['imageUri'];
    const birthday = props.data['birthdayString'];
    const hobby = props.data['hobby']
    const catchphrase = props.data['catchphrase'];
    const personality = props.data['personality'];

    // Styling for the cards
    const cardStyle = {
        backgroundColor: props.data['bubbleColor'],
        color: props.data['textColor']
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