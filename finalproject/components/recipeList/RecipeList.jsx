import { FlatList } from 'native-base';
import RecipeListSkeleton from './RecipeListSkeleton.jsx';

import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = ({ recipes }) => {
  return recipes ? (
    <FlatList
      bg='blueGray.800'
      data={recipes}
      renderItem={({ item }) => <RecipeListItem item={item} />}
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
