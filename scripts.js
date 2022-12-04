/*
Your users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser
*/

const keys = document.querySelector(".keypad");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const { action } = key.dataset;
    if (!action) {
      console.log(key.value);
    } else if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "multiply"
    ) {
      console.log("operator", action);
    } else if (action === "reset") {
      console.log("action", action);
    } else if (action === "delete") {
      console.log("action", action);
    } else if (action === "sum") {
      console.log("action", action);
    }
  }
});
