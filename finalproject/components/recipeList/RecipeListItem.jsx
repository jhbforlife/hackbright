// External
import { Ionicons } from '@expo/vector-icons';
import { HStack, Icon, Image, Pressable, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

// Recipe list item where recipe lists are shown
const RecipeListItem = ({ item }) => {
  // Navigation management
  const navigation = useNavigation();

  // When a recipe item is pressed, navigate
  // to its corresponding RecipeDetails screen
  const onPressRecipeItem = () => {
    navigation.navigate('RecipeDetails', { item });
  };

  return (
    <Pressable onPress={onPressRecipeItem}>
      <HStack
        alignItems='center'
        bg='rgba(255,255,255,0.1)'
        borderRadius={20}
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
          fontSize={18}
          fontWeight='semibold'
          w='60%'
        >
          {item.title}
        </Text>
        <Icon
          as={Ionicons}
          name='chevron-forward'
          color='text.200'
          ml={2}
          size={6}
        />
      </HStack>
    </Pressable>
  );
};

export default RecipeListItem;
