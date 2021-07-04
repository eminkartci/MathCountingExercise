let questionCount = document.getElementById('quizNumber');
let resultCount = document.getElementById("results");
let index = 0,
    totalQuestionCount = 10;
let result = 0,
    trueCount = 0,
    falseCount = 0;

function updateCount() {

    if (index == 10) {
        return;
    }

    index ++;
    questionCount.innerHTML = index + " / " + totalQuestionCount;

}

function updateResult() {

    resultCount.innerHTML = trueCount + ' / ' + (falseCount + trueCount);

}

function buttonHandler() {

    let submitBtn = document.getElementById("submit");

    if (submitBtn.innerHTML == "Cevapla") {
        getAnswer();
    } else if (submitBtn.innerHTML == "Atla") {
        revealResult();
    } else if (submitBtn.innerHTML == "Geç") {
        generateQuestion();
    }

}

function getAnswer() {

    let studentAnswer = document.getElementById("studentAnswer").value;

    if (studentAnswer == result) {
        document.getElementById("questionCard").style.background = '#edfff0';
        trueCount++;
        updateCount();
        updateResult();
        generateQuestion();
        resetFields();
    } else {
        document.getElementById("questionCard").style.background = '#fde7e8';
        falseCount++;

        revealResult();
    }

    //console.log("Öğrenci Cevabı: ",studentAnswer);


}

function resetFields() {
    document.getElementById("submit").innerHTML = "Atla";
    document.getElementById("studentAnswer").value = "";
    document.getElementById("studentAnswer").style.backgroundColor = 'rgba(100,200,100,0.1)';
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
        result = number1 / number2;
    } else if (randomOperator == 3) {
        operation = '.';
        result = number1 * number2;
    }


    let question = number1 + " " + operation + " " + number2 + " = x denklemine göre x'in değeri kaçtır ?";
    let answer = 0;



    document.getElementById("question").innerHTML = question;

    resetFields();

}




let inputField = document.getElementById("studentAnswer");
let submitButton = document.getElementById("submit");
inputField.onchange = () => {

    if (inputField.value == "") {
        submitButton.innerHTML = "Atla";
    } else {
        submitButton.innerHTML = "Cevapla";
    }
}

updateCount();
updateResult();
generateQuestion();