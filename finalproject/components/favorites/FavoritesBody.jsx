// External
import { FlatList, Heading } from 'native-base';
import { useEffect, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';

// Internal non-components
import { useFavorites } from './FavoritesProvider';

// Internal components
import RecipeListItem from '../recipeList/RecipeListItem';

// Body used in the Favorites ScreenBox
const FavoritesBody = () => {
  // State management
  const navigation = useNavigationState((state) => state.index);
  const favorites = useFavorites();
  const [currentFavorites, setCurrentFavorites] = useState(
    favorites.current.list
  );

  // Set currentFavorites anytime it's navigated to
  useEffect(() => {
    const read = async () => await favorites.current.readFavorites();
    read();
    const list = favorites.current.list;
    const values = Object.values(list);
    values.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentFavorites(values);
  }, [navigation]);

  return currentFavorites && currentFavorites.length !== 0 ? (
    <FlatList
      bg='blueGray.800'
      data={currentFavorites}
      renderItem={({ item }) => {
        if (item.image && item.title) {
          return <RecipeListItem item={item} />;
        }
      }}
      extraData={currentFavorites}
      alwaysBounceVertical={false}
      _contentContainerStyle={{
        pb: '1/3',
      }}
    />
  ) : (
    <Heading alignSelf='center' color='text.200' mt={10} size='lg'>
      No favorites saved
    </Heading>
  );
};

export default FavoritesBody;
