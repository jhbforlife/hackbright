import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardHeading = (props) => {
    // Add imported star for use
    library.add(faStar);

    // States to update CardHeading
    const [favorite, setFavorite] = useState(true);
    const [opacity, setOpacity] = useState(0.5);

    // Passed through states to update App
    const [favoritesList, setFavoritesList] = props.favoritesListState;
    const setShowFavorites = props.setShowFavorites;

    // Called when the favorite icon is clicked
    const favoriteCard = (e) => {
        setFavorite(!favorite);
        favorite ? setOpacity(1) : setOpacity(0.5);

        if (favoritesList.includes(props.name)) {
            // If favoritesList exists and it already includes the card name
            // the card is being unfavorited and needs to be removed.
            favoritesList.splice(favoritesList.indexOf(props.name), 1);
            setFavoritesList([...favoritesList]);

            // After it's removed, if it was the last favorited card, all cards
            // now need to be shown again.
            if (favoritesList.length === 0) {
                const favoritesCheckbox = document.querySelector('input')
                favoritesCheckbox.checked = false;
                setShowFavorites(false);
            }
            return;
        }
        // If favoritesList exists and it does not already include the card name,
        // update the favoritesList to include it.
        setFavoritesList([...favoritesList, props.name]);
    };

    return (
        <div>
            <h1 className="card-name">{props.name}</h1>
            <FontAwesomeIcon className="card-favorite-icon" icon={faStar} onClick={favoriteCard} style={{ opacity }} />
        </div>
    );
};

export default CardHeading;