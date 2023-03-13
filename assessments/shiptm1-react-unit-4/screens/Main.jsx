// External
import {
  Box,
  Button,
  Center,
  CheckIcon,
  ChevronDownIcon,
  Heading,
  HStack,
  Select,
  Spinner,
  Text,
} from 'native-base';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const Main = ({ navigation }) => {
  // State management
  const [selectedSpecies, setSelectedSpecies] = useState();
  const [availableSpecies, setAvailableSpecies] = useState();

  // Fetch available species from SWAPI
  useEffect(() => {
    const fetchAvailableSpecies = async () => {
      const resp = await fetch('https://swapi.dev/api/species/');
      const json = await resp.json();
      const speciesAvailable = json['results'].map(
        (result) => result['classification']
      );
      const distinctSpecies = new Set(speciesAvailable);
      const species = {};
      for (const distinct of distinctSpecies) {
        species[distinct] = json['results'].filter(
          (result) => result['classification'] === distinct
        );
      }
      setAvailableSpecies(species);
    };
    fetchAvailableSpecies();
  }, []);

  // When search is pressed, if a species is selected,
  // navigate to the Species Members screen. Otherwise,
  // alert the user there is no species selected
  const onSearchPressed = () => {
    selectedSpecies
      ? navigation.navigate('SpeciesMembers', {
          selectedSpecies: availableSpecies[selectedSpecies],
        })
      : Alert.alert(
          'No species selected',
          'Please select a species and try again'
        );
  };

  // Until availableSpecies is available, show a loading
  // spinner & show the Select component when availableSpecies is
  // available. Not a lot of reuse for components, so utility props
  // included here instead of separate component files.
  return (
    <Center flex={1} bg='trueGray.900'>
      <Heading
        adjustsFontSizeToFit={true}
        color='yellow.300'
        noOfLines={1}
        size='2xl'
      >
        Star Wars Species Search
      </Heading>
      {availableSpecies ? (
        <Center w='100%'>
          <Select
            _actionSheetBody={{
              borderRadius: 10,
            }}
            _actionSheetContent={{
              bg: 'trueGray.800',
            }}
            adjustsFontSizeToFit={true}
            bg='yellow.300'
            borderColor='trueGray.900'
            color='trueGray.900'
            dropdownIcon={<ChevronDownIcon color='trueGray.900' mr={5} />}
            fontSize={20}
            fontWeight='bold'
            m={5}
            p={5}
            placeholder='Choose species'
            placeholderTextColor='trueGray.900'
            onValueChange={(selection) => setSelectedSpecies(selection)}
            _selectedItem={{
              bg: 'yellow.300',
              endIcon: <CheckIcon color='trueGray.900' size={5} />,
              _text: {
                fontSize: 18,
                fontStyle: 'italic',
                fontWeight: 'semibold',
              },
            }}
            selectedValue={selectedSpecies}
            variant='rounded'
            w='60%'
          >
            {Object.keys(availableSpecies)
              .sort()
              .map((species) => (
                <Select.Item
                  key={species}
                  label={species}
                  value={species}
                  bg='yellow.300'
                  borderColor='trueGray.900'
                  borderWidth={2}
                  _text={{
                    fontSize: 18,
                    fontWeight: 'semibold',
                  }}
                />
              ))}
          </Select>
          <Button
            bg='primary.700'
            onPress={onSearchPressed}
            size='md'
            _text={{
              fontSize: 18,
            }}
            w='40%'
          >
            Search
          </Button>
        </Center>
      ) : (
        <Box mt={10}>
          <HStack alignItems='center' justifyContent='center'>
            <Spinner color='yellow.300' size='lg' mr={5} />
            <Text color='yellow.300' fontSize={24}>
              Loading
            </Text>
          </HStack>
        </Box>
      )}
    </Center>
  );
};

export default Main;
