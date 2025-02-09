const display = document.getElementById("display");

function appendToDisplay(input) {
  if (input === '.' && display.value.slice(-1) === '.') {
    return; // Prevent consecutive decimals
  }
  if (input === '.' && display.value.includes('.') && !/[\+\-\*\/]/.test(display.value.slice(-1))) {
    return; // Prevent multiple decimals in the same number
  }
  display.value += input;
} 


function clearAll() {
  display.value = '';
}

function deleteIt() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = "Error"
  }
}