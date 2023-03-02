const CardImage = (props) => {
    return <img className={props.className} src={props.imageURL} alt={props.name}></img >;
}

export default CardImage;