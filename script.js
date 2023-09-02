// Version 0.3.6

let firstNumber;
let secondNumber;
let answerNumber;
let plusminnus;
let operator;

// Number Selectors

// One
one.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "1";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "1";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "1";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "1";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Two
two.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "2";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "2";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "2";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "2";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Three
three.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "3";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "3";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "3";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "3";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Four
four.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "4";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "4";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "4";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "4";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Five
five.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "5";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "5";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "5";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "5";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Six
six.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "6";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "6";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "6";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "6";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Seven
seven.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "7";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "7";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "7";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "7";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Eight
eight.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "8";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "8";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "8";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "8";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Nine
nine.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "9";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "9";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "9";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "9";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Zero
zero.addEventListener("click", () => {
  if (firstNumber === undefined) {
    firstNumber = "0";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += "0";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "0";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += "0";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// decimal
decimal.addEventListener("click", ()=>{
  if (firstNumber === undefined) {
    firstNumber = "0.";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (typeof firstNumber === "string" && plusminnus != "p") {
    firstNumber += ".";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (plusminnus === "p" && secondNumber === undefined) {
    secondNumber = "0.";
    document.getElementById("display").innerHTML = secondNumber;
  } else if (typeof secondNumber === "string") {
    secondNumber += ".";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Arithmetic Operator

// Addition(+)
plus.addEventListener("click", () => {
  plusminnus = "p";
  operator = "plus";
});

// Subtraction(-)
minus.addEventListener("click", () => {
  plusminnus = "p";
  operator = "minus";
});

// Multiplication(×)
multiply.addEventListener("click", () => {
  plusminnus = "p";
  operator = "multiply";
});

// Division(÷)
divide.addEventListener("click", () => {
  plusminnus = "p";
  operator = "divide";
});

// Display of Answer

equal.addEventListener("click", () => {
  // directions for adding
  if (operator === "plus") {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    answerNumber = num1 + num2;
    document.getElementById("display").innerHTML = answerNumber;
  }
  // directions for subtracting
  else if (operator === "minus") {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    answerNumber = num1 - num2;
    document.getElementById("display").innerHTML = answerNumber;
  }
  // directions for multiplying
  else if (operator === "multiply") {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    answerNumber = num1 * num2;
    document.getElementById("display").innerHTML = answerNumber;
  }
  // directions for dividing
  else if (operator === "divide") {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    answerNumber = num1 / num2;
    document.getElementById("display").innerHTML = answerNumber;
  }
});

//THE END
