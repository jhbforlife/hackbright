// External
import { Box, Heading } from 'native-base';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

// Generic section in RecipeDetails screen
const RecipeDetailsSection = ({ html, section }) => {
  // Dimensions management
  const { width } = useWindowDimensions();

  // Show content if it's available
  return html === '' ? (
    ''
  ) : (
    <Box m={2} mt={5}>
      <Heading color='blueGray.800'>{section}</Heading>
      <RenderHtml
        contentWidth={width}
        enableExperimentalMarginCollapsing={true}
        defaultTextProps={{
          style: {
            backgroundColor: 'transparent',
            color: '#1e293b',
            fontSize: 18,
          },
        }}
        source={{ html: `<p>${html}</p>` }}
      />
    </Box>
  );
};

export default RecipeDetailsSection;
