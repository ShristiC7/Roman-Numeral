const number = document.getElementById("number").value;
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

function Converter(num) {
  // Array to store symbols corresponding to values
  const romansym = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romansym.length; i++) {
    while (num >= romansym[i].value) {
      result += romansym[i].symbol;
      num -= romansym[i].value;
    }
  }
  return result;
}

convert.addEventListener("click", () => {
    output.classList.add('output');
  // Check if the input is empty or not a number
  const numberValue = document.getElementById("number").value;
  if (numberValue === "" || isNaN(numberValue)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  // Convert input to integer
  const num = parseInt(numberValue, 10);

  // Check if the number is within the valid range
  if (num < 1 || num > 3999) {
    output.textContent = "Please enter a number greater than or equal to 1 and less than 4000";
    return;
  }

  // Call the converter function to convert the number
  output.textContent = Converter(num);
});

const reverseBtn = document.getElementById("reverse-btn");
const romanInput = document.getElementById("roman");

function RomanToNumber(roman) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prev = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const curr = romanMap[roman[i].toUpperCase()];
    if (!curr) return NaN;

    if (curr < prev) {
      total -= curr;
    } else {
      total += curr;
    }
    prev = curr;
  }

  return total;
}
document.getElementById("number").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      convert.click();
    }
  });
  
reverseBtn.addEventListener("click", () => {
  output.className = '';
  output.classList.add("output");

  const romanVal = romanInput.value.trim().toUpperCase();
  if (!romanVal) {
    output.textContent = "Please enter a Roman numeral";
    return;
  }

  const result = RomanToNumber(romanVal);
  if (isNaN(result) || result < 1 || result > 3999) {
    output.textContent = "Invalid Roman numeral";
    return;
  }

  output.textContent = result;
});
romanInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      reverseBtn.click();
    }
  });
  