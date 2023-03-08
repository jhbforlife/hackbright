import { Box, HStack, Pressable, VStack } from 'native-base';
import { Keyboard } from 'react-native';
import HeadingNavButton from './HeadingNavButton';
import HeadingText from './HeadingText';

const ScreenBox = ({ body, headingText, screen }) => {
  return (
    <Pressable bg='blueGray.800' flex={1} onPress={Keyboard.dismiss}>
      <VStack ml={2.5} mr={2.5} mt={10} space={5} safeAreaTop>
        <HStack alignItems='center' space={5}>
          <HeadingText text={headingText} />
          <HeadingNavButton screen={screen} />
        </HStack>
        {body}
      </VStack>
    </Pressable>
  );
};

export default ScreenBox;
