import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    // Add imported star for use
    library.add(faStar);

    // Passed through states to update App
    const [showFavorites, setShowFavorites] = props.showFavoritesState;
    const favoritesList = props.favoritesList;

    // Called when the favorite checkbox is changed
    const showFavoritesChecked = (e) => {
        if (favoritesList.length === 0) {
            // If favorites list exists and is empty,
            // alert the user there are no favorites selected and
            // uncheck the box.
            alert('No villagers favorited');
            e.target.checked = false;
            return;
        }
        // Toggle showing favorites list if it exists and is not empty.
        setShowFavorites(!showFavorites);
    };

    return (
        <div className="header">
            <h1>{props.title}</h1><form></form>
            <div className="favorites">
                <label className="switch">
                    <input type="checkbox" name="favorites" onChange={showFavoritesChecked} />
                    <span className="slider"></span>
                </label>
                <span><FontAwesomeIcon icon={faStar} className="icon" /> only</span>
            </div>
        </div>
    );
}

export default Header;