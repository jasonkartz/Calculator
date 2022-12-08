const keys = document.querySelector(".keypad");
const screen = document.getElementById("screen");

const theme1 = document.getElementById("select-theme-1");
const theme2 = document.getElementById("select-theme-2");
const theme3 = document.getElementById("select-theme-3");

const calculator = {
  displayValue: "",
  decimalUsed: false,
  firstOperand: null,
  operator: null,
  waitingSecondOperand: false,
};

function setScreen(value) {
  switch (true) {
    case value === "." && calculator.decimalUsed:
    case value === "0" && calculator.displayValue === "":
      break;
    case value === "." && calculator.displayValue === "":
      calculator.displayValue = "0.";
      calculator.decimalUsed = true;
      screen.value = calculator.displayValue;
      break;
    case value === ".":
      calculator.displayValue += value;
      screen.value = calculator.displayValue;
      calculator.decimalUsed = true;
      break;
    default:
      calculator.displayValue += value;
      screen.value = calculator.displayValue;
  }
}

function reset() {
  calculator.displayValue = "";
  calculator.decimalUsed = false;
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingSecondOperand = false;
  screen.value = 0;
}
function deleteDigit() {
  calculator.displayValue = calculator.displayValue.slice(0, -1);
  if (calculator.displayValue === "") {
    reset();
  } else {
    screen.value = calculator.displayValue;
  }

  if (!calculator.displayValue.includes(".")) {
    calculator.decimalUsed = false;
  }
}
function sum() {
  if (
    calculator.waitingSecondOperand &&
    calculator.displayValue &&
    calculator.firstOperand &&
    calculator.operator
  ) {
    const displayValue = parseFloat(calculator.displayValue);
    let sum;
    switch (calculator.operator) {
      case "add":
        sum = calculator.firstOperand + displayValue;
        break;
      case "subtract":
        sum = calculator.firstOperand - displayValue;
        break;
      case "multiply":
        sum = calculator.firstOperand * displayValue;
        break;
      case "divide":
        sum = calculator.firstOperand / displayValue;
        break;
    }
    screen.value = sum;
    calculator.firstOperand = sum;
    calculator.displayValue = "";
    calculator.decimalUsed = false;
    calculator.operator = null;
  } else {
    return null;
  }
}

function operator(type) {
  if (calculator.waitingSecondOperand) {
    sum();
    calculator.operator = type;
  } else {
    calculator.firstOperand = parseFloat(calculator.displayValue);
    calculator.displayValue = "";
    calculator.waitingSecondOperand = true;
    calculator.operator = type;
  }
  console.log("operator", calculator.operator);
}

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const { action } = key.dataset;

    switch (true) {
      case !action:
        setScreen(key.value);
        break;
      case action === "add":
      case action === "subtract":
      case action === "divide":
      case action === "multiply":
        operator(action);
        break;
      case action === "reset":
        reset();
        break;
      case action === "delete":
        deleteDigit();
        break;
      case action === "sum":
        sum();
        break;
    }
  }
});

theme1.addEventListener("click", () => {
  const bodyClass = document.body.classList;
  bodyClass.remove("theme-2");
  bodyClass.remove("theme-3");
  bodyClass.add("theme-1");
});
theme2.addEventListener("click", () => {
  const bodyClass = document.body.classList;
  bodyClass.remove("theme-1");
  bodyClass.remove("theme-3");
  bodyClass.add("theme-2");
});
theme3.addEventListener("click", () => {
  const bodyClass = document.body.classList;
  bodyClass.remove("theme-1");
  bodyClass.remove("theme-2");
  bodyClass.add("theme-3");
});
