import { Skeleton, VStack, ZStack } from 'native-base';
import { Dimensions } from 'react-native';
import RecipeDetailsBackBtn from './RecipeDetailsBackBtn';

const RecipeDetailsSkeleton = () => {
  const height = Dimensions.get('screen').height * 0.25;
  const width = Dimensions.get('screen').width;

  const skeletonItems = [];

  for (let i = 0; i < 7; i++) {
    skeletonItems.push(<Skeleton.Text key={i} />);
  }

  return (
    <VStack space={5}>
      <ZStack justifyContent='center' h={height} w={width}>
        <Skeleton h={height} w={width} />
        <RecipeDetailsBackBtn />
      </ZStack>
      {skeletonItems}
    </VStack>
  );
};

export default RecipeDetailsSkeleton;
