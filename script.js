const CalculatorContainer = document.getElementById("Calculator_container");
const DisplayArea = document.getElementById("display_area");

CalculatorContainer.onclick = (e) => {
    if (e.target.nodeName !== "BUTTON") return;

    const value = e.target.textContent;

    switch (value) {
        case "C":
            clearDisplay();
            break;
        case "Del":
            deleteOneValue();
            break;
        case "=":
            evaluateExpression();
            break;
        default:
            AddToDisplayArea(value);
            break;
    }
};

function clearDisplay() {
    DisplayArea.textContent = "";
}

function AddToDisplayArea(value) {
    if (DisplayArea.textContent === "Error") DisplayArea.textContent = "";
    DisplayArea.textContent += value;
}

function deleteOneValue() {
    let currentContent = DisplayArea.textContent;
    DisplayArea.textContent = currentContent.substring(0, currentContent.length - 1);
}

function evaluateExpression() {
    try {
        let expression = DisplayArea.textContent;
        if (expression === "") return;

       
        let calculation = math.evaluate(expression);
        DisplayArea.textContent = calculation;

    } catch (error) {
        DisplayArea.textContent = "Error";
    }
}