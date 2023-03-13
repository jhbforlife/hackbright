// External
import { Box, FlatList } from 'native-base';
import { useLayoutEffect, useState } from 'react';

// Internal Components
import SpeciesMemberCard from '../components/SpeciesMemberCard.jsx';

const Species = ({ navigation, route }) => {
  // State management
  const [speciesMembers, setSpeciesMembers] = useState();

  // Set screen options & load information passed from
  // previous screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.selectedSpecies[0]['classification'],
      headerStyle: {
        backgroundColor: '#fde047',
      },
      headerTintColor: '#171717',
      headerTitleStyle: {
        color: '#171717',
      },
    });
    setSpeciesMembers(route.params.selectedSpecies);
  }, [route.params, speciesMembers]);

  return (
    <Box bg='trueGray.900' h='100%' alignItems='center' justifyContent='center'>
      <FlatList
        data={speciesMembers}
        renderItem={(species) => <SpeciesMemberCard member={species.item} />}
        keyExtractor={(species) => species.name}
      />
    </Box>
  );
};

export default Species;
