import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardHeading = (props) => {

    // Add imported star for use
    library.add(faStar);

    return (
        <div>
            <h1 className={props.h1Class}>{props.name}</h1>
            <FontAwesomeIcon
                className={props.iconClass}
                icon={faStar}
                onClick={props.favoriteHandler}
            />
        </div>
    );
};

export default CardHeading;