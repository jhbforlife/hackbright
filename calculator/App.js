// External
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

// Internal non-components
import Colors from './constants/Colors.jsx';
import Calculate from './utils/Calculate.jsx';

// Internal components
import ResultsView from './components/ResultsView.jsx';
import CalcButton from './components/CalcButton.jsx';

// 2D array of calculator buttons organized into rows
const buttonRows = [['clear', '÷'], [7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']]

export default function App() {
  // State management
  const [resultsState, setResultsState] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [calcDone, setCalcDone] = useState(false);

  // When a calculator button is pressed
  const onCalcBtnPress = (btn) => {
    switch (btn) {
      // If btn is an operator
      case '÷':
      case 'x':
      case '+':
      case '-':
        // Do nothing if there is no firstNumber
        if (firstNumber === '') { break; }

        // Set the operator
        if (operator === '') {
          setCalcDone(false);
          setOperator(btn);
          setResultsState(prev => `${prev} ${btn} `)
          break;
        }

        // Change the operator if no secondNumber 
        if (secondNumber === '') {
          setOperator(btn);
          setResultsState(prev => `${prev.slice(0, prev.length - 3)} ${btn} `)
          break;
        }

      // If btn is the equal sign or fall through from above
      case '=':
        operator === ''
          // If operator is empty, do nothing
          ? setResultsState(prev => prev)
          // If operator is not empty, do the calculation
          : function () {
            const result = Calculate(firstNumber, operator, secondNumber)
            // Set up a new calculation with firsNumber equal to the result
            // of the calculation above
            setFirstNumber(result);
            setSecondNumber('');
            // If btn is an operator instead of the equal sign, set up
            // operator for new calculation
            if (btn != '=') {
              setOperator(btn);
              setResultsState(`${result} ${btn} `);
              return;
            }
            // If btn is indeed the equal sign, reset
            setOperator('');
            setResultsState(result);
            setCalcDone(true);
            return;
          }()
        break;

      // If btn is clear, reset the calculator
      case 'clear':
        setResultsState('');
        setFirstNumber('');
        setOperator('');
        setSecondNumber('');
        break;

      // If btn is anything else
      default:
        // If there is no operator set, set btn to firstNumber
        if (operator === '') {
          // If previous calculation & it calculator was not cleared
          if (calcDone) {
            setCalcDone(false);
            setFirstNumber(btn);
            setResultsState(`${btn}`);
            break;
          }
          // If firstNumber is 0, & btn is 0, 
          // don't allow additional 0's
          if (firstNumber.length === 1 && btn === 0 & firstNumber !== '.') { break; }
          // If resultsState currently shows 0
          if (resultsState === '0') {
            // If btn is a dot, show 0btn, otherwise just show btn
            btn === '.'
              ? setResultsState(`0${btn}`)
              : setResultsState(`${btn}`);
            // Set firstNumber to btn without 0s (due to length limit)
            setFirstNumber(btn);
            break;
          }
          // If length of firstNumber is greater than nine, don't allow
          // additional numbers
          if (firstNumber.length > 9) { break; }
          // If firstNumber already includes a dot, don't allow
          // additional dots
          if (String(firstNumber).split('').includes('.') && btn === '.') {
            break;
          }
          // After all checks, set firstNumber and resultsState to prevBtn
          // ex: prev = 123, btn = 4, prevBtn = 1234
          setFirstNumber(prev => `${prev}${btn}`);
          setResultsState(prev => `${prev}${btn}`);
          break;
        }
        // If operator is set, set btn to secondNumber
        // If secondNumber is 0, & btn is 0,
        // don't allow additional 0's.
        if (secondNumber.length === 1 && btn === 0 && secondNumber !== '.') { break; }
        // If resultsState currently shows 0 for secondNumber
        if (secondNumber === '0') {
          // If btn is a dot, show prevbtn, otherwise just show btn,
          // removing any 0's from secondNumber in resultsState.
          // ex: prev = 12 x 0, btn = 9, prevBtn = 12 x 9
          btn === '.'
            ? setResultsState(prev => `${prev}${btn}`)
            : setResultsState(prev => `${prev.slice(0, prev.length - 1)}${btn}`);
          setSecondNumber(btn);
          break;
        }
        // If length of secondNumber is greater than nine, don't allow
        // additional numbers
        if (secondNumber.length > 9) { break; }
        // If secondNumber already includes a dot, don't allow
        // additional dots
        if (String(secondNumber).split('').includes('.') && btn === '.') { break; }
        setSecondNumber(prev => `${prev}${btn}`);
        setResultsState(prev => `${prev}${btn}`);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ResultsView resultsState={resultsState} />
      <View style={styles.buttons}>
        {buttonRows.map((row, i) => {
          return <View key={i} style={styles.row}>{row.map(button => <CalcButton key={button} text={button} onCalcBtnPress={onCalcBtnPress} />)}</View>;
        })}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: '5%',
  },
  buttons: {
    flex: 0.7,
  },
  row: {
    flexDirection: 'row',
    flex: 0.2,
    padding: 10,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
