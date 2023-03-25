// External
import { StyleSheet, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';

// Internal non-components
import Colors from '../constants/Colors.jsx';

const ResultsView = ({ resultsState, onCalcResultsSwipe }) => {
  return (
    <GestureDetector gesture={onCalcResultsSwipe}>
      <View style={styles.resultsView}>
        <Text
          style={styles.resultsText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}
        >
          {resultsState}
        </Text>
      </View>
    </GestureDetector>
  );
};

export default ResultsView;

const styles = StyleSheet.create({
  resultsView: {
    flex: 0.3,
    width: '95%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: Colors.background,
    padding: 10,
  },
  resultsText: {
    fontSize: 60,
    color: Colors.text,
  },
});
