import { Box } from 'native-base';
import { useEffect, useState } from 'react';
// import { API_KEY } from '@env';
import RecipeHeading from '../components/recipe/RecipeHeading';
import RecipeInsight from '../components/recipe/RecipeInsight';
import RecipeInstructions from '../components/recipe/RecipeInstructions';

const Recipe = ({ route }) => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [recipeInfo, setRecipeInfo] = useState();

  useEffect(() => {
    setTitle(route.params.item.title);
    setImage(route.params.item.image);
    console.log(route.params.item);
    // const fetchRecipeInfo = async () => {
    //   const resp = await fetch(
    //     `https://api.spoonacular.com/recipes/${route.params.item.id}/information?apiKey=${API_KEY}`
    //   );
    //   const json = await resp.json();
    //   console.log(json);
    // };
    // fetchRecipeInfo();
  }, []);

  return (
    <Box flex={1}>
      <RecipeHeading />
      <RecipeInsight />
      <RecipeInstructions />
    </Box>
  );
};

export default Recipe;
