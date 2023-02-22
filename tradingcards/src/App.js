import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Card from './Components/Card.js';

function App() {

  // State for fetching data from ACNH API
  const [data, setData] = useState(null);

  // Fetches data from ACNH API
  useEffect(() => {
    const getCardData = async () => {
      const resp = await fetch('https://acnhapi.com/v1/villagers');
      const cardJSON = await resp.json();
      const cardData = Object.values(cardJSON);
      setData(cardData);
    };

    getCardData();
  });

  // States for showing favorited cards
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  // If the data has been loaded
  if (data) {
    // Loaded data from ACNH API
    const cardData = data;

    // The data to use for card components
    let useData;

    if (showFavorites && favoritesList && favoritesList.length > 0) {
      // If showFavorites is on & favoritesList is not empty, then filter the
      // card data to show only the favorited cards.
      const filteredData = cardData.filter(card => favoritesList.includes(card.name['name-USen']));
      useData = filteredData;
    } else {
      // Otherwise use all of the card data.
      useData = cardData;
    }

    return (
      <div className="App">
        <Header title="Animal Crossing New Horizon Villagers" showFavoritesState={[showFavorites, setShowFavorites]} favoritesList={favoritesList} />
        {useData.map((card) => <Card key={card["name"]["name-USen"]} data={card} favoritesListState={[favoritesList, setFavoritesList]} setShowFavorites={setShowFavorites} />)}
      </div>
    );
  }

}

export default App;
