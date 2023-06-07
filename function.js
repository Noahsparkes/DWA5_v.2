// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (!dividend || !divider) {
      throw new Error("Both values are required in inputs. Try again.");
    }
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Invalid input. Only numbers are allowed.");  //if statement for invalid inputs sucha as letters and symbols.
    }

    result.innerText = Math.trunc(dividend / divider);  //math.trunc function used to calc numbers without decimals.
  } catch (error) {
    result.innerText = `Division not performed. ${error.message}`;
    console.error(error);
  }
});
 






// invalid division still not operational. 5/6 user stories complete.