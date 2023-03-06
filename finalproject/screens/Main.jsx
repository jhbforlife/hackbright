import { Box, FlatList, Text } from 'native-base';
import RecipeList from '../components/list/RecipeList';
import ScreenBox from '../components/screen/ScreenBox';

const Main = () => {
  return (
    <ScreenBox body={<RecipeList />} headingText='Recipes' screen='Main' />
  );
};

export default Main;
