import { Heading } from 'native-base';

const HeadingText = ({ text }) => {
  return (
    <Heading adjustsFontSizeToFit={true} color='text.200' fontSize='6xl'>
      {text}
    </Heading>
  );
};

export default HeadingText;
