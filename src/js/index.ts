let operationButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("operation")
operationButton.addEventListener("click", function(){operate()})

let outputElement: HTMLElement = <HTMLElement>document.getElementById("output")
let input1: HTMLInputElement = <HTMLInputElement>document.getElementById("words")
let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("caseManipulation")

function operate(){
    if(operationElement.selectedIndex == 0)
    outputElement.innerHTML = input1.value.toUpperCase();
    else if(operationElement.selectedIndex == 1)
    outputElement.innerHTML = input1.value.toLowerCase();
}