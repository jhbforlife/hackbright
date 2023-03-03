import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.jsx';

const CalcButton = ({ onCalcBtnPress, text }) => {
  const onButtonPress = (button) => {
    onCalcBtnPress(button);
  };

  const buttonStyle = [styles.button];
  switch (text) {
    case 0:
      buttonStyle.push(styles.double);
      break;
    case 'clear':
      buttonStyle.push(styles.triple);
      break;
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
    width: '25%',
    borderColor: Colors.border,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: Colors.borderLowOpacity,
    overflow: 'hidden',
  },
  press: {
    flex: 1,
    justifyContent: 'center',
  },
  double: {
    width: '50%',
  },
  triple: {
    width: '75%',
  },
  buttonText: {
    color: Colors.text,
    fontSize: 36,
    textAlign: 'center',
  },
});
