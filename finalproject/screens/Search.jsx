import ScreenBox from '../components/screen/ScreenBox.jsx';
import SearchBody from '../components/search/SearchBody.jsx';

const Search = () => {
  return (
    <ScreenBox body={<SearchBody />} headingText='Search' screen='Search' />
  );
};

export default Search;
