let result = '0';
const displayResultEle = document.querySelector('#displayResult');
const historyIconEle = document.querySelector('#historyIcon')

function calcNumbers(value) {
    console.log("calcNumbers", value);
    if (result === "0" && !isNaN(value)) {
        result = value;
    } else {
        result += value;
    }
    updateDisplay();
}


function clearfun(event) {
    const clearType = event.target.name;
    console.log("clearFun", clearType)
    if (clearType === 'ce') {
        result = '0';
    } else if (clearType === "bce") {
        const operators = ["+", "-", "*", "/"];
        let lastOperatorIndex = -1;

        operators.forEach(op => {
            const index = result.lastIndexOf(op);
            if (index > lastOperatorIndex) {
                lastOperatorIndex = index;
            }
        });

        if (lastOperatorIndex > -1) {
            result = result.slice(0, lastOperatorIndex + 1); 
        } else {
            result = "0"; 
        }
    }
    updateDisplay();
}

function handleBackSpace() {
    if (result.length == 1) {
        result = '0'
    } else {
        result = displayResultEle.value.substr(0, displayResultEle.value.length - 1)
    }
    updateDisplay();
}

function calculateResult ()  {
    let displayResult = displayResultEle.value;
    result = eval(displayResult);
    displayResultEle.value = result;
    addToHistory(displayResult);
}


function updateDisplay () {
    displayResultEle.value = result;
}