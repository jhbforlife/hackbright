import RecipeDetailsSection from './RecipeDetailsSection';

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
