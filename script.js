let operation = null;

function calculationFunction() {
    let result = null;

    let first_number = Number(document.getElementById("first_number").value);
    let second_number = Number(document.getElementById("second_number").value);

    switch (operation) {
        case '+':
            result = first_number + second_number;
            break;
        case '-':
            result = first_number - second_number;
            break;
        case '*':
            result = first_number * second_number;
            break;
        case '/':
            result = first_number / second_number;
            break;
    }

    document.getElementById("result").innerHTML = result;
}
