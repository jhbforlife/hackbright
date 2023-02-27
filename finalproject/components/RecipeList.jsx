import { Box } from 'native-base';
import { useState } from 'react';

import { API_KEY } from '@env'
import HeadingText from './HeadingText.jsx';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = () => {

    const [fetchedRecipes, setFetchedRecipes] = useState();

    const fetchRecipes = async () => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${API_KEY}`);
        const json = await resp.json();
    };

    return (
        <Box>
            <HeadingText title="Recipes" />
            <RecipeItem />
        </Box>
    );
};

export default RecipeList;