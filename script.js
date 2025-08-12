function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function calculate(a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        throw new Error("Invalid number input!");
    }

    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "^":
            result = power(a, b);
            break;
        default:
            throw new Error("Invalid operator! Use +, -, *, /, or ^");
    }

    return Number(result.toFixed(2));
}

try {
    console.log(calculate(10, 5, "+"));
    console.log(calculate(10, 5, "-"));
    console.log(calculate(10, 5, "*"));
    console.log(calculate(10, 5, "/"));
    console.log(calculate(2, 3, "^"));
    console.log(calculate(10, 0, "/"));
} catch (error) {
    console.log("Error:", error.message);
}