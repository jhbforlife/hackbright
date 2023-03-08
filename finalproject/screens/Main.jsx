import { useEffect, useState } from 'react';

import { API_KEY } from '@env';
import data from '../recipes.json';

import RecipeList from '../components/recipeList/RecipeList';
import ScreenBox from '../components/screen/ScreenBox';

const Main = () => {
  const [fetchedRecipes, setFetchedRecipes] = useState();

  useEffect(() => {
    const fetchRecipes = async () => {
      // const resp = await fetch(
      //   `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${API_KEY}`
      // );
      // const json = await resp.json();
      // const recipes = json;
      // recipes.results.sort((a, b) => a.title > b.title);
      // setFetchedRecipes(recipes.results);
      const recipes = data;
      recipes.results.sort((a, b) => a.title.localeCompare(b.title));
      setFetchedRecipes(recipes.results);
    };
    setTimeout(fetchRecipes, 2000);
  }, []);

  return (
    <ScreenBox
      body={<RecipeList recipes={fetchedRecipes} />}
      headingText='Recipes'
      screen='Main'
    />
  );
};

export default Main;
