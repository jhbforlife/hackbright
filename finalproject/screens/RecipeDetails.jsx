// External
import { Box, ScrollView, StatusBar } from 'native-base';
import { useEffect, useState } from 'react';

// Internal non-components
import { API_KEY } from '@env';

// Internal components
import RecipeDetailsHeading from '../components/recipeDetails/RecipeDetailsHeading';
import RecipeDetailsIngredients from '../components/recipeDetails/RecipeDetailsIngredients';
import RecipeDetailsInsight from '../components/recipeDetails/RecipeDetailsInsight';
import RecipeDetailsSection from '../components/recipeDetails/RecipeDetailsSection';
import RecipeDetailsSkeleton from '../components/recipeDetails/RecipeDetailsSkeleton';

// Recipe details screen
const RecipeDetails = ({ route }) => {
  // State management
  const [recipeInfo, setRecipeInfo] = useState();

  // Fetch recipe details on load. All recipes will have
  // a title and image already fetched. If coming from Home screen
  // all other info will already be fetched as well. If coming from search
  // all of the other info will need to be fetched
  useEffect(() => {
    const fetchRecipeInfo = async () => {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/${route.params.item.id}/information?apiKey=${API_KEY}`
      );
      const json = await resp.json();
      setRecipeInfo(json);
    };
    const item = route.params.item;
    if (
      item.servings &&
      item.readyInMinutes &&
      item.summary &&
      item.extendedIngredients &&
      item.instructions
    ) {
      setRecipeInfo(route.params.item);
    } else {
      fetchRecipeInfo();
    }
  }, []);

  // If recipeInfo is loaded, show recipe details.
  // Otherwise, show skeleton until loaded.
  return recipeInfo ? (
    <Box bg='text.200' flex={1} safeAreaBottom>
      <RecipeDetailsHeading item={recipeInfo} />
      <ScrollView alwaysBounceVertical={false}>
        <RecipeDetailsInsight
          servings={recipeInfo.servings ? recipeInfo.servings : ''}
          time={recipeInfo.readyInMinutes ? recipeInfo.readyInMinutes : ''}
        />
        <RecipeDetailsSection
          html={recipeInfo.summary ? recipeInfo.summary : ''}
          section='Summary'
        />
        <RecipeDetailsIngredients
          ingredients={
            recipeInfo.extendedIngredients ? recipeInfo.extendedIngredients : ''
          }
        />
        <RecipeDetailsSection
          html={recipeInfo.instructions ? recipeInfo.instructions : ''}
          section='Directions'
        />
      </ScrollView>
      <StatusBar hidden={true} />
    </Box>
  ) : (
    <RecipeDetailsSkeleton />
  );
};

export default RecipeDetails;
