let display = document.querySelector('.display');
let calculation = '';

function addToDisplay(value) {
  calculation += value;
  display.value = calculation;
}

function clearDisplay() {
  calculation = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(calculation);
    display.value = result;
    calculation = result.toString();
  } catch(error) {
    alert('Invalid calculation');
  }
}

function removeLastDigit() {
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}

