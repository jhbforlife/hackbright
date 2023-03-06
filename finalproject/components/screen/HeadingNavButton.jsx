import { HamburgerIcon, Icon, Menu, Pressable } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HeadingNavButton = ({ screen }) => {
  const navigation = useNavigation();

  const isMain = screen === 'Main';
  const isSearch = screen === 'Search';

  const navigateToScreen = (toScreen) => {
    navigation.navigate(toScreen);
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
