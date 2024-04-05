let num1El =document.getElementById("num1-el")
let num1=3
num1El.innerText =num1

let num2El =document.getElementById("num2-el")
let num2 = 4
num2El.innerText =num2

//add
let resultEl =document.getElementById("result-el")
function add(){
    let sum =num1 + num2
    resultEl.innerText = "result: =" + sum
}

//substruction
function substruct(){
    let sub =num1 - num2
    resultEl.innerText = " result: =" + sub
}

//division
function divide(){
    let div =num1/num2  //exact new mimetaw
    resultEl.innerText = "result: ="+ div
}

function multiply(){
    let mul = num1 * num2
    resultEl.innerText = "result: =" + mul
}