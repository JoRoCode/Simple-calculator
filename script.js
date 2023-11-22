const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";

//this will display the valvu of the numbers pressed on the display//

function press(val) {
    num1 += val;
    display.innerHTML = num1;
}

//this employs the operator when trigger happens//

function setOP(key) {
  op = key;
  num2 = num1;
  num1 = "";
}

// this clears out the display on trigger//

function clr() {
  num1 = "";
  num2 = "";
  op = "";
  display.innerHTML = "0";

}
//this will calculate the result of num1 + the operator + num2 and show the result in the display//
function calculate() {
  let a = parseFloat(num2);
  let b = parseFloat(num1);
  let res = 0;
  switch(op) {
    //for addition//
    case "+":
      res = a + b;
      break;
      //for subtract//
    case "-":
      res = a - b;
      break;
      //for multiply//
    case "*":
      res = a * b;
      break;
      //for devide//
    case "/":
      res = a / b;
      break;
  }
  //for display//
  num1 = res;
  op = "";
  display.innerHTML = res;
}