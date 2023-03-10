// Internal components
import FavoritesBody from '../components/favorites/FavoritesBody.jsx';
import ScreenBox from '../components/screen/ScreenBox.jsx';

const Favorites = () => {
  return (
    <ScreenBox
      body={<FavoritesBody />}
      headingText='Favorites'
      screen='Favorites'
    />
  );
};

export default Favorites;
