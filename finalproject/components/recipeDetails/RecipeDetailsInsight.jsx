// External
import { HStack, Text } from 'native-base';

// Insight section in RecipeDetails screen
const RecipeDetailsInsight = ({ servings, time }) => {
  let numberOfServings = '';
  let readyInMinutes = '';

  // Show servings if it's available
  if (servings !== '') {
    numberOfServings = (
      <Text color='blueGray.800' fontSize='xl'>
        {`Servings: ${servings}`}
      </Text>
    );
  }

  // Show ready in minutes if it's available
  if (time !== '') {
    readyInMinutes = (
      <Text color='blueGray.800' fontSize='xl'>
        {`Ready in: ${time} minutes`}
      </Text>
    );
  }

  return (
    <HStack ml={2} space='3'>
      {numberOfServings}
      {readyInMinutes}
    </HStack>
  );
};

export default RecipeDetailsInsight;
