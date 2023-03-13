// External
import { Box, Divider, Text } from 'native-base';

// Internal components
import SpeciesMemberCardText from './SpeciesMemberCardText.jsx';

const SpeciesMemberCard = ({ member }) => {
  return (
    <Box bg='yellow.300' borderRadius={10} justifyContent='center' m={5} p={5}>
      <Text
        adjustsFontSizeToFit={true}
        fontSize='3xl'
        fontWeight='bold'
        noOfLines={1}
      >
        Name: {member['name']}
      </Text>
      <Divider alignSelf='center' bg='trueGray.900' m={2} p={0.5} />
      <SpeciesMemberCardText text={`Designation: ${member['designation']}`} />
      <SpeciesMemberCardText text={`Language: ${member['language']}`} />
      <SpeciesMemberCardText
        text={`Average lifespan: ${member['average_lifespan']}`}
      />
    </Box>
  );
};

export default SpeciesMemberCard;
