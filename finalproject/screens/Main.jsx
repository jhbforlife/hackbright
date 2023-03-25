// External
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

// Internal non-components
import { API_KEY } from '@env';

// Internal components
import RecipeList from '../components/recipeList/RecipeList';
import ScreenBox from '../components/screen/ScreenBox';

// Main screen
const Main = () => {
  // State management
  const [fetchedRecipes, setFetchedRecipes] = useState();

  // Fetch random recipes on load
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const resp = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
        );
        const json = await resp.json();
        const recipes = json;
        recipes.recipes.sort((a, b) => a.title.localeCompare(b.title));
        setFetchedRecipes(recipes.recipes);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    fetchRecipes();
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
