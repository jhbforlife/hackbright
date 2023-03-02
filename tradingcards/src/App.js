import { useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Cards from './Components/Cards.js';

function App() {

  // State for showing favorited cards
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div className="App">
      <Header title="Animal Crossing New Horizon Villagers" setShowFavorites={setShowFavorites} />
      <Cards showFavorites={showFavorites} />
    </div>
  );

}

export default App;
