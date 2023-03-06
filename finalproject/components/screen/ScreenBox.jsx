import { Box, HStack, VStack } from 'native-base';
import HeadingNavButton from './HeadingNavButton';
import HeadingText from './HeadingText';

const ScreenBox = ({ body, headingText, screen }) => {
  return (
    <Box bg='blueGray.800' flex={1}>
      <VStack ml={2.5} mr={2.5} mt={10} space={5} safeArea>
        <HStack alignItems='center' space={5}>
          <HeadingText text={headingText} />
          <HeadingNavButton screen={screen} />
        </HStack>
        {body}
      </VStack>
    </Box>
  );
};

export default ScreenBox;
