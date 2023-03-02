import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = (props) => {

    // Add imported star for use
    library.add(faStar);

    // Passed through states to update App
    const setShowFavorites = props.setShowFavorites;

    // Called when the favorite checkbox is changed
    const showFavoritesChecked = (e) => {
        setShowFavorites(e.target.checked);
    };

    return (
        <div className={styles.header}>
            <h1>{props.title}</h1><form></form>
            <div className={styles.favoriteOnlyIcon}>
                <label className={styles.switch}>
                    <input type="checkbox" name="favorites" onChange={showFavoritesChecked} />
                    <span className={styles.slider}></span>
                </label>
                <span><FontAwesomeIcon icon={faStar} className={styles.icon} /> only</span>
            </div>
        </div>
    );
}

export default Header;