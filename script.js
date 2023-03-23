const para = document.querySelector('p')


let display = document.querySelector('.display');
let calculation = '';
let fullcalcul ='';


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

    calculation = result.toString();
        

    display.value = calculation;


    
   

  } catch(error) {
    alert('');
  }
}

function removeLastDigit() {
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}

