// Internal components
import SearchBody from '../components/search/SearchBody.jsx';
import ScreenBox from '../components/screen/ScreenBox.jsx';

// Search screen
const Search = () => {
  return (
    <ScreenBox body={<SearchBody />} headingText='Search' screen='Search' />
  );
};

export default Search;
