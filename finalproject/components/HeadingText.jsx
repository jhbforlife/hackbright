import { Heading } from 'native-base';

const HeadingText = (props) => {
    return (
        <Heading fontSize="6xl" marginLeft="5%" width="100%">{props.title}</Heading>
    );
};

export default HeadingText;

