import { useEffect, useState } from 'react';
import Card from './Card.js';

const Cards = (props) => {
    // State for fetching data from ACNH API
    const [cards, setCards] = useState([]);

    // Fetch data from ACNH API
    useEffect(() => {
        const getCards = async () => {
            try {
                const resp = await fetch('https://acnhapi.com/v1/villagers');
                const cardJSON = await resp.json();
                const cardData = Object.values(cardJSON);
                setCards((cardData.map((card) => <Card key={card["name"]["name-USen"]} data={card} updateFavorites={updateFavorites} />)));
            } catch (err) {
                console.log(err);
            }
        };
        getCards();
    }, []);

    // State for showing favorited cards
    const [favorites, setFavorites] = useState([]);

    // Update favorites when a card is favorited
    const updateFavorites = (name) => {
        setFavorites((prev) => {
            const newFavorites = [...prev];
            if (newFavorites.includes(name)) {
                newFavorites.splice(newFavorites.indexOf(name), 1);
                return newFavorites;
            } else {
                return [...newFavorites, name];
            }
        })
    }

    // If favorites only is turned on
    if (props.showFavorites) {
        // Filter cards by name
        const filteredCards = cards.filter((card) => favorites.includes(card.props.data['name']['name-USen']));
        // If there are no cards favorited, return that to user. Otherwise return favorited cards
        return filteredCards.length === 0 ? <div><h3>No favorites selected</h3></div> : <div>{filteredCards}</div>
    }

    // If favorites only is not turned on & cards have yet to load,
    // return Loading... to the user, otherwise return all cards
    return cards.length === 0 ? <div><h3>Loading...</h3></div> : <div>{cards}</div>;
}

export default Cards;