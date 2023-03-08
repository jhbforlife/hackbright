// External
import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

// Back button in RecipeDetails screen
const RecipeDetailsBackBtn = () => {
  // Navigation management
  const navigation = useNavigation();

  // When back button is pressed, navigate
  // to the previous screen.
  const onPressBackBtn = () => {
    navigation.goBack();
  };

  return (
    <Box ml={5} safeArea>
      <Button
        borderRadius={50}
        bg='text.200'
        h={50}
        onPress={onPressBackBtn}
        w={50}
        _pressed={{
          bg: 'blueGray.400',
        }}
      >
        <Icon as={Ionicons} color='blueGray.800' name='chevron-back' size={7} />
      </Button>
    </Box>
  );
};

export default RecipeDetailsBackBtn;
