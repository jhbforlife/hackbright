// External
import { Box, Heading, HStack, Image, VStack, ZStack } from 'native-base';
import { useWindowDimensions } from 'react-native';
import FavoritesIcon from '../favorites/FavoritesIcon';

// Internal components
import RecipeDetailsBackBtn from './RecipeDetailsBackBtn';

// Heading in RecipeDetails
const RecipeDetailsHeading = ({ item }) => {
  const { height, width } = useWindowDimensions();
  const stackHeight = height * 0.25;

  return (
    <VStack pb={2} space={2}>
      <ZStack justifyContent='center' h={stackHeight} w={width}>
        <Image
          alt={`${item.title}`}
          source={{
            uri: item.image,
          }}
          h={stackHeight}
          w={width}
        />
        <RecipeDetailsBackBtn />
      </ZStack>
      <HStack alignItems='center' space={5} w='80%'>
        <Heading
          adjustsFontSizeToFit={true}
          bg='transparent'
          color='blueGray.800'
          fontSize='4xl'
          ml={2}
          noOfLines={2}
        >
          {item.title}
        </Heading>
        <FavoritesIcon item={item} size={10} />
      </HStack>
    </VStack>
  );
};

export default RecipeDetailsHeading;
