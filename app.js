function addFunction(num1, num2, showResult, message) {
    var result = num1 + num2;
    if (showResult) {
        console.log(message + result);
    }
    else {
        console.log("show result is false");
    }
}
var number1 = 5;
var number2 = 2.4;
var showResult = true;
var message = 'Sum is :';
addFunction(number1, number2, showResult, message);
