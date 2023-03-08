import { HStack, Text } from 'native-base';
const RecipeDetailsInsight = ({ servings, time }) => {
  return (
    <HStack ml={2} space='3'>
      {time !== '' ? (
        <Text color='blueGray.800' fontSize='xl'>
          {`Ready in: ${time} minutes`}
        </Text>
      ) : (
        ''
      )}
      {servings !== '' ? (
        <Text color='blueGray.800' fontSize='xl'>
          {`Servings: ${servings}`}
        </Text>
      ) : (
        ''
      )}
    </HStack>
  );
};

export default RecipeDetailsInsight;
