let operators = ["+", "-", ".", "/"]
let question_types = [question_1()]

function question_1() {

    let number_1 = 0,
        number_2 = 0;

    number_1 = Math.floor(Math.random() * 100);
    number_2 = Math.floor(Math.random() * 100);

    let operator = operators[Math.floor(Math.random() * 4)];
    let result = 0;
    if (operator == "+")
        result = number_1 + number_2;
    else if (operator == "-")
        result = number_1 - number_2;
    else if (operator == ".")
        result = number_1 * number_2;
    else if (operator == "/") {
        number_2 = generateRandomDisivorOfNumber(number_1)
        result = number_1 / number_2;
    }
    let question = number_1 + " " + operator + " " + number_2 + " = x denklemine göre x'in değeri kaçtır ?"
    console.log(question)
    console.log(number_1 + " " + operator + " " + number_2);
    console.log(result);
    return [
        question,
        result
    ]
}

function question_2() {

    let k_1 = 1,
        k_2 = 1,
        number_1 = 0;

    k_1 = Math.floor(Math.random() * 5)
    k_2 = k_1 * Math.floor(Math.random() * 5) + 1
    number_1 = k_1 * Math.floor(Math.random() * 5) + 1
    let question = "";

    let operator = operators[Math.floor(Math.random() * 4)];
    if (k_1 = 0 && operator != "/" && operator != "x")
        question = number_1 + " = " + k_2 + "x denklemine göre x'in değeri kaçtır ?"
    else
        question = k_1 + "x" + number_1 + " = " + k_2 + "x denklemine göre x'in değeri kaçtır ?"
    let result = 0;
    if (operator == "+")
        result = number_1 / (k_2 - k_1);
    else if (operator == "-")
        result = -number_1 / (k_2 - k_1);
    else if (operator == ".")
        result = (k_1 * number_1) / k_2
    else if (operator == "/") {
        result = k_1 / (number_1 * k_2)
    }
    console.log({
        question: question,
        result: result
    })
    return [
        question,
        result
    ]
}

function reload_questions() {
    question_types = [question_1()]
}