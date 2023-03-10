// External
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { HamburgerIcon, Icon, Menu, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';

// Navigation button on Home & Search
const HeadingNavButton = ({ screen }) => {
  // Navigation management
  const navigation = useNavigation();

  // Disable a menu item if it's the
  // current screen being shown
  const isMain = screen === 'Main';
  const isFavorites = screen === 'Favorites';
  const isSearch = screen === 'Search';

  // Navigate to the pressed menu item's
  // corresponding screen
  const navigateToScreen = (toScreen) => {
    navigation.navigate(toScreen, { toScreen });
  };

  return (
    <Menu
      bg='text.200'
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <HamburgerIcon color='text.200' size={8} />
          </Pressable>
        );
      }}
    >
      <Menu.Item
        isDisabled={isMain}
        onPress={navigateToScreen.bind(this, 'Main')}
        _text={{ adjustsFontSizeToFit: true, fontSize: 24 }}
      >
        <Icon as={AntDesign} name='home' size={6} />
        Home
      </Menu.Item>
      <Menu.Item
        isDisabled={isFavorites}
        onPress={navigateToScreen.bind(this, 'Favorites')}
        _text={{ adjustsFontSizeToFit: true, fontSize: 24 }}
      >
        <Icon as={Ionicons} name='star-outline' size={6} />
        Favorites
      </Menu.Item>
      <Menu.Item
        isDisabled={isSearch}
        onPress={navigateToScreen.bind(this, 'Search')}
        _text={{ adjustsFontSizeToFit: true, fontSize: 24 }}
      >
        <Icon as={AntDesign} name='search1' size={6} />
        Search
      </Menu.Item>
    </Menu>
  );
};

export default HeadingNavButton;
