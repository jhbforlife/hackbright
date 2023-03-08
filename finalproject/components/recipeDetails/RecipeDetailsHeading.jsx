import { Box, Heading, Image, VStack, ZStack } from 'native-base';
import { Dimensions } from 'react-native';
import RecipeDetailsBackBtn from './RecipeDetailsBackBtn';

const RecipeDetailsHeading = ({ image, title }) => {
  const height = Dimensions.get('screen').height * 0.25;
  const width = Dimensions.get('screen').width;

  return (
    <VStack pb={2} space={2}>
      <ZStack justifyContent='center' h={height} w={width}>
        <Box>
          <Image
            alt={`${title}`}
            source={{
              uri: image,
            }}
            h={height}
            w={width}
          />
        </Box>
        <RecipeDetailsBackBtn />
      </ZStack>
      <Heading
        adjustsFontSizeToFit={true}
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
