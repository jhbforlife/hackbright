// External
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Internal non-components
import Colors from '../constants/Colors.jsx';

const CalcButton = ({ onCalcBtnPress, text }) => {
  // Called when a calculator button is pressed
  const onButtonPress = (button) => {
    onCalcBtnPress(button);
  };

  // Bigger styles for 0 & clear
  const buttonStyle = [styles.button];
  switch (text) {
    case '0':
      buttonStyle.push(styles.double);
      break;
    case 'clear':
      buttonStyle.push(styles.triple);
      break;
    default:
      buttonStyle.push(styles.single);
  }

  return (
    <View style={buttonStyle} id={text}>
      <Pressable
        style={({ pressed }) => [
          styles.press,
          pressed ? { backgroundColor: Colors.borderHighOpacity } : {},
        ]}
        android_ripple={{ color: Colors.border }}
        onPress={onButtonPress.bind(this, text)}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  button: {
    width: '23%',
    borderColor: Colors.border,
    borderWidth: 2,
    borderRadius: '50%',
    backgroundColor: Colors.borderLowOpacity,
    overflow: 'hidden',
  },
  press: {
    flex: 1,
    justifyContent: 'center',
  },
  single: {
    aspectRatio: 1,
  },
  double: {
    width: '48%',
  },
  triple: {
    width: '73%',
  },
  buttonText: {
    color: Colors.text,
    fontSize: 36,
    textAlign: 'center',
  },
});
