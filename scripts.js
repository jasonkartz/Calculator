/*
Your users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser
*/
const keys = document.querySelector(".keypad");
const screen = document.getElementById("screen");
const calculator = {
  displayValue: "",
  decimalUsed: false,
  firstOperand: null,
  operator: null,
  secondOperand: null,
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
console.log(calculator.displayValue);
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
        console.log("operator", action);
        break;
      case action === "reset":
        console.log("action", action);
        break;
      case action === "delete":
        console.log("action", action);
        break;
      case action === "sum":
        console.log("action", action);
        break;
    }
  }
});
