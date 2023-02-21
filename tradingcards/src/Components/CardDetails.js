const CardDetails = (props) => {
    return (
        <dl className="card-details" style={props.style}>
            <dt>Birthday</dt>
            <dd>{props.birthday}</dd>
            <dt>Hobby</dt>
            <dd>{props.hobby}</dd>
            <dt>Personality</dt>
            <dd>{props.personality}</dd>
            <dt>Catchphrase</dt>
            <dd>"{props.catchphrase}"</dd>
        </dl>
    );
}

export default CardDetails;