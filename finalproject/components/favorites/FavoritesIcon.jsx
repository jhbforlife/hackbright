// External
import { AntDesign } from '@expo/vector-icons';
import { Icon, Pressable } from 'native-base';
import { useEffect, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';

// Internal non-components
import { useFavorites } from './FavoritesProvider';

// Favorites icon used in RecipeListItem & RecipeDetailsHeading
const FavoritesIcon = ({ item, size }) => {
  // State management
  const favorites = useFavorites();
  const [isFavorite, setIsFavorite] = useState(
    favorites.current.isFavorite(item.id)
  );
  const navigation = useNavigationState((state) => state.index);

  // Set isFavorite anytime screens change
  useEffect(() => {
    const read = async () => await favorites.current.readFavorites();
    read();
    setIsFavorite(favorites.current.isFavorite(item.id));
  }, [navigation]);

  // When the FavoriteIcon is pressed, write to favorites file
  // and set isFavorite accordingly
  const onPressFavoriteIcon = async () => {
    await favorites.current.writeFavorites(item);
    setIsFavorite(favorites.current.isFavorite(item.id));
  };

  return (
    <Pressable onPress={onPressFavoriteIcon}>
      <Icon
        as={AntDesign}
        color='yellow.400'
        name={isFavorite ? 'star' : 'staro'}
        size={size}
      />
    </Pressable>
  );
};

export default FavoritesIcon;
