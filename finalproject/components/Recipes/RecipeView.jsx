import { Box, FlatList } from 'native-base';
import { useEffect, useState } from 'react';

import { API_KEY } from '@env';
import SelectedView from '../SelectedView/SelectedView.jsx';
import RecipeList from './RecipeList.jsx';
import data from '../../recipes.json';

const RecipeView = () => {
  const [fetchedRecipes, setFetchedRecipes] = useState();

  useEffect(() => {
    const fetchRecipes = async () => {
      // const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${API_KEY}`);
      // const json = await resp.json();
      setFetchedRecipes(data.results);
    };
    fetchRecipes();
  }, []);

  return (
    <Box>
      <SelectedView
        title='Recipes'
        titleSize='6xl'
        body={
          <FlatList
            data={fetchedRecipes}
            renderItem={(recipe) => {
              <Text>recipe.title</Text>;
            }}
            keyExtractor={(item) => item.id}
            extraData={this.state}
          />
        }
      />
    </Box>
  );
};

export default RecipeView;
