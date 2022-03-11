function add() {
    var first = prompt("enter first number");
    var second = prompt("enter second number");
    var sumAdd = Number(first) + Number(second);
    alert(sumAdd);
}

function minus() {
    var first = prompt("enter first number");
    var second = prompt("enter second number");
    var sumMinus = Number(first) - Number(second);
    alert(sumMinus);
}

function multiply() {
    var first = prompt("enter first number");
    var second = prompt("enter second number");
    var sumMultiply = Number(first) * Number(second);
    alert(sumMultiply);
}

function divide() {
    var first = prompt("enter first number");
    var second = prompt("enter second number");
    var sumDivide = Number(first) / Number(second);
    alert(sumDivide);
}

document.getElementById("math1").addEventListener("click", add);
document.getElementById("math2").addEventListener("click", minus);
document.getElementById("math3").addEventListener("click", multiply);
document.getElementById("math4").addEventListener("click", divide);