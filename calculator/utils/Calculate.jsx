// Called when a calculation needs to be made
const Calculate = (first, operator, second) => {
  let result = 'Error';
  // Cast for addition (1 + 1 = 11 otherwise)
  const [firstNumber, secondNumber] = [Number(first), Number(second)];
  switch (operator) {
    case '÷':
      result = round(firstNumber / secondNumber, 6);
      break;
    case 'x':
      result = round(firstNumber * secondNumber, 6);
      break;
    case '-':
      result = round(firstNumber - secondNumber, 6);
      break;
    case '+':
      result = round(firstNumber + secondNumber, 6);
      break;
  }
  return isNaN(result) ? 'Error' : result;
};

// Called to round a number to a certain decimal point
const round = (number, power) => {
  return Number(Math.round(number + 'e' + power) + 'e-' + power);
};

export default Calculate;
