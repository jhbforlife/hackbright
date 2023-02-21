const CardImage = (props) => {
    return <img className="card-image" src={props.imageURL} alt={props.name}></img >;
}

export default CardImage;