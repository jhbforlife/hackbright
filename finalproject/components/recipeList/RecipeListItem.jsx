import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HStack, Icon, Image, Pressable, Text } from 'native-base';

const RecipeListItem = ({ item }) => {
  const navigation = useNavigation();

  const onPressRecipeItem = () => {
    navigation.navigate('RecipeDetails', { item });
  };

  return (
    <Pressable onPress={onPressRecipeItem}>
      <HStack
        alignItems='center'
        bg='rgba(255,255,255,0.1)'
        borderColor='blueGray.400'
        borderRadius={10}
        borderWidth={1}
        mb={3}
        p={2}
        space={3}
      >
        <Image
          source={{
            uri: item.image,
          }}
          alt={item.title}
          size='md'
          borderRadius={10}
        />
        <Text
          adjustsFontSizeToFit={true}
          color='text.200'
          noOfLines={3}
          fontSize={22}
          fontWeight='semibold'
          w='60%'
        >
          {item.title}
        </Text>
        <Icon as={Ionicons} name='chevron-forward' color='text.200' size={8} />
      </HStack>
    </Pressable>
  );
};

export default RecipeListItem;
