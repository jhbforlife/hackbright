import { Box, FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import RecipeListSkeleton from './RecipeListSkeleton.jsx';

// import { API_KEY } from '@env';
import data from '../../recipes.json';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = () => {
  const [fetchedRecipes, setFetchedRecipes] = useState();

  useEffect(() => {
    const fetchRecipes = async () => {
      //   const resp = await fetch(
      //     `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${API_KEY}`
      //   );
      //   const json = await resp.json();
      //   const recipes = json;
      //   recipes.results.sort((a, b) => a.title > b.title);
      //   setFetchedRecipes(recipes.results);
      const recipes = data;
      recipes.results.sort((a, b) => a.title.localeCompare(b.title));
      setFetchedRecipes(recipes.results);
    };
    fetchRecipes();
  }, []);

  return fetchedRecipes ? (
    <FlatList
      bg='blueGray.800'
      data={fetchedRecipes}
      renderItem={({ item }) => <RecipeItem item={item} />}
      extraData={fetchedRecipes}
      alwaysBounceVertical={false}
      _contentContainerStyle={{
        pb: 20,
      }}
    />
  ) : (
    <RecipeListSkeleton />
  );
};

export default RecipeList;
