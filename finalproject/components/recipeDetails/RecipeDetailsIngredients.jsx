// Internal components
import RecipeDetailsSection from './RecipeDetailsSection';

// Ingredients section in RecipeDetails screen
const RecipeDetailsIngredients = ({ ingredients }) => {
  const ingredientList = [];

  for (const i in ingredients) {
    i == 0
      ? ingredientList.push(ingredients[i].original)
      : ingredientList.push(` ${ingredients[i].original}`);
  }

  return <RecipeDetailsSection html={ingredientList} section='Ingredients' />;
};

export default RecipeDetailsIngredients;
