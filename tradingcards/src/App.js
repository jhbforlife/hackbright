import { useState } from 'react';
import './App.css';
import CardData from './cardData.json';
import Heading from './Components/Heading.js';
import Card from './Components/Card.js';

function App() {
  // Imported card json
  const cardData = CardData;

  // States for favoriting cards
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState();

  // Data to use for card components
  let useData;

  if (showFavorites && favoritesList && favoritesList.length > 0) {
    // If favorites is selected & favorites is not empty, then filter the
    // card data to only the favorited cards.
    const filteredData = cardData.filter(card => favoritesList.includes(card.name['name-USen']));
    useData = filteredData;
  } else {
    // Otherwise use all of the card data.
    useData = cardData;
  }

  return (
    <div className="App">
      <Heading title="Animal Crossing New Horizon Villagers" showFavoritesState={[showFavorites, setShowFavorites]} favoritesList={favoritesList} />
      {useData.map((card) => <Card key={card["name"]["name-USen"]} data={card} favoritesListState={[favoritesList, setFavoritesList]} setShowFavorites={setShowFavorites} />)}
    </div>
  );
}

export default App;
