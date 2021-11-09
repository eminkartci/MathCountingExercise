

let operators = ["+", "-", ".", "/"]
let question_types = [easyQuestion()]

function easyQuestion() {

    let number_1 = 0,
        number_2 = 0;

    number_1 = randBetween(100);
    number_2 = randBetween(100);

    let operator = operators[randBetween(4)];
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
    // console.log(question)
    // console.log(number_1 + " " + operator + " " + number_2);
    // console.log(result);
    return [
        question,
        result
    ]
}

function midQuestion() {

    let k_1 = 1,
        k_2 = 1,
        number_1 = 0;

    k_1 = randBetween(5)
    k_2 = k_1 * randBetween(5) + 1
    number_1 = k_1 * randBetween(5) + 1
    let question = "";

    let operator = operators[randBetween(4)];
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


function constructionProblemQuestion() {

    // 1 - Change the multiplication / division
    // 2 - Change the workerNum - workerTime 
    // 3 - Multiplier 
    //      + common divider if division
    //      + dosn't matter if multiplication
    // 4 - Change the answer: newworkernum / newworktime

    var workerNum = randBetween(20),workTime= randBetween(60),multiplier = randBetween(10),newWorkerNum = workerNum * multiplier; newWorkTime = workTime / multiplier;

    var questionStr = `Bir işi ${workerNum} işçi ${workTime} günde bitirebiliyorsa, aynı işi ${newWorkerNum} işçi kaç günde bitirir?`;

    console.log("Question: ", questionStr)
    console.log("Answer:", newWorkTime)

}

function reload_questions() {
    question_types = [easyQuestion()]
}

function randBetween(stop,start=0){
    // console.log("Start",start)
    // console.log("stop",stop)
    return start + Math.floor(Math.random() * (stop-start))
}




constructionProblemQuestion();