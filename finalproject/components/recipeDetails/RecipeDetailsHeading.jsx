// External
import { Box, Heading, Image, VStack, ZStack } from 'native-base';
import { useWindowDimensions } from 'react-native';

// Internal components
import RecipeDetailsBackBtn from './RecipeDetailsBackBtn';

// Heading in RecipeDetails
const RecipeDetailsHeading = ({ image, title }) => {
  const { height, width } = useWindowDimensions();
  const stackHeight = height * 0.25;

  return (
    <VStack pb={2} space={2}>
      <ZStack justifyContent='center' h={stackHeight} w={width}>
        <Box>
          <Image
            alt={`${title}`}
            source={{
              uri: image,
            }}
            h={stackHeight}
            w={width}
          />
        </Box>
        <RecipeDetailsBackBtn />
      </ZStack>
      <Heading
        adjustsFontSizeToFit={true}
        bg='transparent'
        color='blueGray.800'
        fontSize='4xl'
        ml={2}
        noOfLines={2}
      >
        {title}
      </Heading>
    </VStack>
  );
};

export default RecipeDetailsHeading;
