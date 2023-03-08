// External
import { HStack, Skeleton, VStack } from 'native-base';
import { useWindowDimensions } from 'react-native';

// Skeleton for RecipeList where recipes lists are shown
const RecipeListSkeleton = () => {
  const { height } = useWindowDimensions();
  const skeletonItemHeight = height * 0.12;

  // Array of skeleton items to show
  const skeletonItems = [];
  for (let i = 0; i < 7; i++) {
    skeletonItems.push(
      <HStack
        key={i}
        alignItems='center'
        space={5}
        h={skeletonItemHeight}
        w='60%'
      >
        <Skeleton size='20' borderRadius={10} />
        <Skeleton.Text size={20} />
      </HStack>
    );
  }

  return <VStack space={5}>{skeletonItems}</VStack>;
};

export default RecipeListSkeleton;
