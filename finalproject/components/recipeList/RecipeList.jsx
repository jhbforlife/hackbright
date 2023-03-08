// External
import { FlatList } from 'native-base';

// Internal components
import RecipeListItem from './RecipeListItem.jsx';
import RecipeListSkeleton from './RecipeListSkeleton.jsx';

const RecipeList = ({ recipes }) => {
  // If recipes is available, return recipes with
  // a title and an image. Otherwise, return a skeleton until loaded.
  return recipes ? (
    <FlatList
      bg='blueGray.800'
      data={recipes}
      renderItem={({ item }) => {
        if (item.image && item.title) {
          return <RecipeListItem item={item} />;
        }
      }}
      extraData={recipes}
      alwaysBounceVertical={false}
      _contentContainerStyle={{
        pb: '1/3',
      }}
    />
  ) : (
    <RecipeListSkeleton />
  );
};

export default RecipeList;
