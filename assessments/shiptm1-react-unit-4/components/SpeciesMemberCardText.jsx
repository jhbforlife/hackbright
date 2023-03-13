// External
import { Text } from 'native-base';

const SpeciesMemberCardText = ({ text }) => {
  return (
    <Text
      adjustsFontSizeToFit={true}
      color='trueGray.900'
      fontSize='xl'
      noOfLines={1}
    >
      {text}
    </Text>
  );
};

export default SpeciesMemberCardText;
