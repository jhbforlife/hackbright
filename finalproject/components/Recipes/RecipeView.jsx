import { Box } from 'native-base';
import { useState } from 'react';

import { API_KEY } from '@env'
import SelectedView from '../SelectedView/SelectedView.jsx';
import RecipeList from './RecipeList.jsx';

const RecipeView = () => {
    const [fetchedRecipes, setFetchedRecipes] = useState();

    const fetchRecipes = async () => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${API_KEY}`);
        const json = await resp.json();
        setFetchedRecipes(json);
    };

    return (
        <Box>
            <SelectedView title="Recipes" titleSize="6xl" body={
                <FlatList data={fetchedRecipes} renderItem={() => {
                        // TODO
                    }}
                />
            } />
        </Box>
    );

};

export default RecipeView;