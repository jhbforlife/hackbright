// External
import { Box, ScrollView, StatusBar } from 'native-base';
import { useEffect, useState } from 'react';

// Internal non-components
import { API_KEY } from '@env';
import data from '../recipe.json';

// Internal components
import RecipeDetailsHeading from '../components/recipeDetails/RecipeDetailsHeading';
import RecipeDetailsInsight from '../components/recipeDetails/RecipeDetailsInsight';
import RecipeDetailsSkeleton from '../components/recipeDetails/RecipeDetailsSkeleton';
import RecipeDetailsSection from '../components/recipeDetails/RecipeDetailsSection';
import RecipeDetailsIngredients from '../components/recipeDetails/RecipeDetailsIngredients';

const Recipe = ({ route }) => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [recipeInfo, setRecipeInfo] = useState();

  useEffect(() => {
    setTitle(route.params.item.title);
    setImage(route.params.item.image);
    const fetchRecipeInfo = async () => {
      // const resp = await fetch(
      //   `https://api.spoonacular.com/recipes/${route.params.item.id}/information?apiKey=${API_KEY}`
      // );
      // const json = await resp.json();
      // setRecipeInfo(json);
      setRecipeInfo(data);
    };
    fetchRecipeInfo();
  }, []);

  return recipeInfo ? (
    <Box bg='text.200' flex={1} pb={10}>
      <RecipeDetailsHeading image={image} title={title} />
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

export default Recipe;
