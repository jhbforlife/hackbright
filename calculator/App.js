import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Colors from './constants/Colors.jsx';
import Calculate from './utils/Calculate.jsx';

import ResultsView from './components/ResultsView.jsx';
import CalcButton from './components/CalcButton.jsx';

const buttonRows = [['clear', '÷'], [7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']]

export default function App() {
  const [resultsState, setResultsState] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [calcDone, setCalcDone] = useState(false);

  const onCalcBtnPress = (btn) => {
    switch (btn) {
      case '÷':
      case 'x':
      case '+':
      case '-':
        if (firstNumber === '') { break; }

        if (operator === '') {
          setCalcDone(false);
          setOperator(btn);
          setResultsState(prev => `${prev} ${btn} `)
          break;
        }

        if (secondNumber === '') {
          setOperator(btn);
          setResultsState(prev => `${prev.slice(0, prev.length - 3)} ${btn} `)
          break;
        }

      case '=':
        operator === ''
          ? setResultsState(prev => prev)
          : function () {
            const result = Calculate(firstNumber, operator, secondNumber)
            setFirstNumber(result);
            setSecondNumber('');
            if (btn != '=') {
              setOperator(btn);
              setResultsState(`${result} ${btn} `);
              return;
            }
            setOperator('');
            setResultsState(result);
            setCalcDone(true);
            return;
          }()
        break;

      case 'clear':
        setResultsState('');
        setFirstNumber('');
        setOperator('');
        setSecondNumber('');
        break;

      default:
        if (operator === '') {
          if (calcDone) {
            setCalcDone(false);
            setFirstNumber(btn);
            setResultsState(`${btn}`);
            break;
          }
          if (firstNumber.length === 1 && btn === 0) { break; }
          if (resultsState === '0') {
            btn === '.'
              ? setResultsState(`0${btn}`)
              : setResultsState(`${btn}`);
            setFirstNumber(btn);
            break;
          }
          if (firstNumber.length > 9) { break; }
          if (String(firstNumber).split('').includes('.') && btn === '.') {
            setFirstNumber(prev => prev)
            break;
          }
          setFirstNumber(prev => `${prev}${btn}`);
          setResultsState(prev => `${prev}${btn}`);
          break;
        }
        if (secondNumber.length === 1 && btn === 0) { break; }
        if (secondNumber === '0') {
          console.log('t')
          btn === '.'
            ? setResultsState(prev => `${prev}0${btn}`)
            : setResultsState(prev => `${prev.slice(0, prev.length - 1)}${btn}`);
          setSecondNumber(btn);
          break;
        }
        if (secondNumber.length > 9) { break; }
        String(secondNumber).split('').includes('.') && btn === '.'
          ? setSecondNumber(prev => prev)
          : setSecondNumber(prev => `${prev}${btn}`);
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
  },
});
