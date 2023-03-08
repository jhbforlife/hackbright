import { Ionicons } from '@expo/vector-icons';
import { Box, Icon, Input, VStack } from 'native-base';
import { useEffect, useState } from 'react';

import { API_KEY } from '@env';
import data from '../../searchResults.json';
import { useWindowDimensions } from 'react-native';

import RecipeList from '../recipeList/RecipeList.jsx';

const SearchBody = () => {
  const [searchResults, setSearchResults] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState();

  const { height } = useWindowDimensions();

  useEffect(() => {
    const fetchSearch = async (term) => {
      // const resp = await fetch(
      //   `https://api.spoonacular.com/recipes/complexSearch?titleMatch=${term}&sort=popularity&number=10&apiKey=${API_KEY}`
      // );
      // const json = await resp.json();
      // setSearchResults(json.results);
      setSearchSubmitted(false);
      setSearchResults(data.results);
    };
    if (searchSubmitted) {
      searchTerm && searchTerm.trim().length !== 0
        ? fetchSearch(searchTerm)
        : setSearchSubmitted(false);
    }
  }, [searchSubmitted, searchTerm]);

  return (
    <VStack pb={'3/5'} space={5}>
      <Box alignSelf='center' h={height * 0.05} w='100%'>
        <Input
          borderColor='text.200'
          borderRadius='10'
          color='text.200'
          h='100%'
          placeholder='Search'
          py='1'
          px='2'
          size='2xl'
          variant='rounded'
          width='100%'
          InputLeftElement={
            <Icon
              ml='2'
              size='4'
              color='blueGray.400'
              as={<Ionicons name='ios-search' />}
            />
          }
          _focus={{
            bg: 'text.200',
            color: 'blueGray.800',
            borderColor: 'blueGray.800',
          }}
          onChangeText={(term) => setSearchTerm(term)}
          onSubmitEditing={setSearchSubmitted.bind(this, true)}
        />
      </Box>
      {searchSubmitted && <RecipeList />}
      {searchResults && <RecipeList recipes={searchResults} />}
    </VStack>
  );
};

export default SearchBody;
