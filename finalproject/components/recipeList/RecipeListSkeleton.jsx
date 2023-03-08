import { HStack, Skeleton, VStack } from 'native-base';

const RecipeListSkeleton = () => {
  const skeletonItems = [];
  for (let i = 0; i < 7; i++) {
    skeletonItems.push(
      <HStack key={i} alignItems='center' space={5} h='12%' w='60%'>
        <Skeleton size='20' borderRadius={10} />
        <Skeleton.Text size={20} />
      </HStack>
    );
  }

  return <VStack space={5}>{skeletonItems}</VStack>;
};

export default RecipeListSkeleton;
