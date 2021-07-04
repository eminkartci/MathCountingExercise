let questionCount = document.getElementById('quizNumber');
let resultCount = document.getElementById("results");
let index = 0,
    totalQuestionCount = 10;
let result = 0,
    trueCount = 0,
    falseCount = 0;

function updateCount() {

    if (index == totalQuestionCount) {

        return finishQuiz();
    }

    index ++;
    questionCount.innerHTML = index + " / " + totalQuestionCount;

}

function updateResult() {

    resultCount.innerHTML = trueCount + ' / ' + (falseCount + trueCount);

}


updateCount();
updateResult();


function getAnswer() {

    let studentAnswer = document.getElementById("studentAnswer").value;

    if (studentAnswer == result) {
        document.getElementById("questionCard").style.background = '#edfff0';
        trueCount++;
        document.getElementById("studentAnswer").value = "";
        updateCount();
        updateResult();
        generateQuestion();
    } else {
        document.getElementById("questionCard").style.background = '#fde7e8';
        falseCount++;

        revealResult();
    }


}

function generateQuestion() {

    let number1 = 0,
        number2 = 0;
    let operation = '+';

    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);

    let randomOperator = Math.floor(Math.random() * 4);

    if (randomOperator == 0) {
        operation = '+';
        result = number1 + number2;
    } else if (randomOperator == 1) {
        operation = '-';
        result = number1 - number2;
    } else if (randomOperator == 2) {
        operation = '/';
        number2 = generateRandomDisivorOfNumber(number1)
        result = number1 / number2;
    } else if (randomOperator == 3) {
        operation = '.';
        result = number1 * number2;
    }


    let question = number1 + " " + operation + " " + number2 + " = x denklemine göre x'in değeri kaçtır ?";



    document.getElementById("question").innerHTML = question;

}

function revealResult() {

    let field = document.getElementById("studentAnswer");

    field.style.backgroundColor = 'rgba(200,100,100,0.1)';
    field.style.color = 'rgba(30,200,100,0.8)';
    field.disabled = true;
    field.value = result;

    document.getElementById("submit").style.backgroundColor = 'red';
    document.getElementById("submit").innerHTML = "Geç";
}

function generateRandomDisivorOfNumber(sayi) {
    let array = [];
    for (let i = 1; i <= sayi; i++) {
        if (sayi % i == 0) {
            array.push(i);
        }

    }
    array.push(sayi * 2)
    array.push(sayi * 4)

    let random = Math.floor(Math.random() * array.length)
    return array[random];
}

function finishQuiz() {
    document.getElementById("questionCard").innerHTML = '<div class="quiz-questions" id="display-area"><p id="" class="resultMiniText">Puanınız</p><p id="" class="resultText">' + (100 / totalQuestionCount) * trueCount + '/100</p><ul id="answer"></ul><div id="quiz-results"><button type="button" name="button" class="submit" id="submit" onclick="window.location.reload(true)">Tekrarla</button></div></div>'
}

document.getElementById("studentAnswer").onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        getAnswer();
    }
}

generateQuestion();