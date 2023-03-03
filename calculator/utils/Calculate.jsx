const Calculate = (first, operator, second) => {
  let result = 'Error';
  const [firstNumber, secondNumber] = [Number(first), Number(second)];
  switch (operator) {
    case '÷':
      result = Round(firstNumber / secondNumber, 6);
      break;
    case 'x':
      result = Round(firstNumber * secondNumber, 6);
      break;
    case '-':
      result = Round(firstNumber - secondNumber, 6);
      break;
    case '+':
      result = Round(firstNumber + secondNumber, 6);
      break;
  }
  return isNaN(result) ? 'Error' : result;
};

const Round = (number, power) => {
  return Number(Math.round(number + 'e' + power) + 'e-' + power);
};

export default Calculate;
