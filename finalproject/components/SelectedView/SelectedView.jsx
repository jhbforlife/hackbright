import HeadingText from "./HeadingText";
import NavButton from "./NavButton";

const SelectedView = (props) => {
  return (
    <Box>
      <Box>
        <HeadingText title={props.title} size={props.titleSize} />
        <NavButton selectedView={props.title} />
      </Box>
      <Box>
        {props.body}
      </Box>
    </Box>
  );
};

export default SelectedView;
