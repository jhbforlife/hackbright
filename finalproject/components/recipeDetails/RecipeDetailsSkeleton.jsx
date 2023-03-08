// External
import { Skeleton, VStack, ZStack } from 'native-base';
import { useWindowDimensions } from 'react-native';
import { Dimensions } from 'react-native';

// Internal components
import RecipeDetailsBackBtn from './RecipeDetailsBackBtn';

// Skeleton of RecipeDetails screen
const RecipeDetailsSkeleton = () => {
  const { height, width } = useWindowDimensions();
  const stackHeight = height * 0.25;

  // Array of skeleton items to show
  const skeletonItems = [];

  for (let i = 0; i < 7; i++) {
    skeletonItems.push(<Skeleton.Text key={i} />);
  }

  return (
    <VStack space={5}>
      <ZStack justifyContent='center' h={stackHeight} w={width}>
        <Skeleton h={stackHeight} w={width} />
        <RecipeDetailsBackBtn />
      </ZStack>
      {skeletonItems}
    </VStack>
  );
};

export default RecipeDetailsSkeleton;
