




// Version 2.4

let firstNumber = ""
let secondNumber = ""
let stage;
let operator;

// function

function process() {
    // directions for adding
    if (operator === "plus") {
      let num1 = new Big(firstNumber);
      let num2 = new Big(secondNumber);
      firstNumber = num1.plus(num2).toString();
      secondNumber = ""
      document.getElementById("display").innerHTML = firstNumber;
    }
    // directions for subtracting
    else if (operator === "minus") {
      let num1 = new Big(firstNumber);
      let num2 = new Big(secondNumber);
      firstNumber = num1.minus(num2).toString();
      secondNumber = ""
      document.getElementById("display").innerHTML = firstNumber;
    }
    // directions for multiplying
    else if (operator === "multiply") {
      let num1 = new Big(firstNumber);
      let num2 = new Big(secondNumber);
      firstNumber = num1.times(num2).toString();
      secondNumber = ""
      document.getElementById("display").innerHTML = firstNumber;
    }
    // directions for dividing
    else if (operator === "divide") {
      let num1 = new Big(firstNumber);
      let num2 = new Big(secondNumber);
      firstNumber = num1.div(num2).toString();
      secondNumber = ""
      document.getElementById("display").innerHTML = firstNumber;
    }
}

// Number Selectors


// One
one.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "1";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "1";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Two
two.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "2";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "2";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Three
three.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "3";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "3";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Four
four.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "4";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "4";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Five
five.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "5";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "5";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Six
six.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "6";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "6";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Seven
seven.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "7";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "7";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Eight
eight.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "8";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "8";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Nine
nine.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "9";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "9";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// Zero
zero.addEventListener("click", () => {
  if (stage != true) {
    firstNumber += "0";
    document.getElementById("display").innerHTML = firstNumber;
  } else if (stage === true) {
    secondNumber += "0";
    document.getElementById("display").innerHTML = secondNumber;
  }
});

// decimal
decimal.addEventListener("click", ()=>{
    if (firstNumber === "" && firstNumber.includes('.') != true && stage != true) {
      firstNumber = "0.";
      document.getElementById("display").innerHTML = firstNumber;
      } else if (stage != true && firstNumber.includes('.') != true ) {
      firstNumber += ".";
      document.getElementById("display").innerHTML = firstNumber;
    } if (stage === true && secondNumber === "" && secondNumber.includes('.') != true) {
      secondNumber = "0.";
      document.getElementById("display").innerHTML = secondNumber;
    } else if (stage === true && secondNumber.includes('.') != true) {
      secondNumber += ".";
      document.getElementById("display").innerHTML = secondNumber;
    }
});

// Arithmetic Operator

// Addition(+)
plus.addEventListener("click", () => {
  if (secondNumber != "") {
    process()
    operator = "plus";
    methd.innerHTML = "+"
  }
  else{
  stage = true;
  operator = "plus";
  methd.innerHTML = "+"
  }
});

// Subtraction(-)
minus.addEventListener("click", () => {
  if (secondNumber != "") {
    process()
    operator = "minus";
    methd.innerHTML = "-"
  }
  else{
  stage = true;
  operator = "minus";
  methd.innerHTML = "-"
  }
});

// Multiplication(×)
multiply.addEventListener("click", () => {
  if (secondNumber != "") {
    process()
    operator = "multiply";
    methd.innerHTML = "×"
  }
  else{
  stage = true;
  operator = "multiply";
  methd.innerHTML = "×"
  }
});

// Division(÷)
divide.addEventListener("click", () => {
  if (secondNumber != "") {
    process()
    operator = "divide";
    methd.innerHTML = "÷"
  }
  else{
  stage = true;
  operator = "divide";
  methd.innerHTML = "÷"
  }
});

// Display of Answer

equal.addEventListener("click", ()=>{
  if (firstNumber === "" && secondNumber === ""){
    firstNumber = "0";
    secondNumber = "0";
    process();
    methd.innerHTML = "=";
  }
  else if(firstNumber === ""){
    firstNumber = "0"
    process();
    methd.innerHTML = "=";
  }
  else if (secondNumber === ""){
    secondNumber = firstNumber;
    process();
    methd.innerHTML = "=";
  }
  else{
    process();
    methd.innerHTML = "=";
  }
});

// Clear and delete Button 

correct.addEventListener("click", () => {
  if (stage != true){
    firstNumber = firstNumber.slice(0, -1)
    document.getElementById("display").innerHTML = firstNumber;
  }
  else if (stage === true){
    secondNumber = secondNumber.slice(0, -1)
    document.getElementById("display").innerHTML = secondNumber;
    
  }
})

clear.addEventListener("click", () => {
  firstNumber ="";
  secondNumber= "";
  operator = undefined;
  document.getElementById("display").innerHTML = firstNumber;
  stage = false;
  methd.innerHTML = "";

})


//THE END **/


