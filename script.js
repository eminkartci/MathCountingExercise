let questionCount;
let resultCount = document.getElementById("results");
let index = 0,
    totalQuestionCount = 10;
let result = 0,
    trueCount = 0,
    falseCount = 0;

let resultRevealed = false;
let user_name = "";
let user_surname = "";
let user_grade = "";


let saniye = 0,
    dakika = 0,
    saat = 0;
let saatText = "00"
let dakikaText = "00"
let saniyeText = "00"

let myVar;

/////////////////////////////

function login() {
    user_name = document.getElementById("student_name").value
    user_surname = document.getElementById("student_surname").value
    user_grade = (document.getElementById("student_grade").value).toString()
    console.log(user_grade)
    if (user_name == "") {
        document.getElementById("bug").innerHTML = "Adınız boş olamaz"
        return;
    } else if (user_surname == "") {
        document.getElementById("bug").innerHTML = "Soyadınız boş olamaz"
        return
    } else if (user_grade == "") {
        document.getElementById("bug").innerHTML = "Sınıfınız boş olamaz"
        return
    }
    startQuiz();
}

function startQuiz() {
    document.getElementById("questionCard").innerHTML = ""

    document.getElementById("questionCard").innerHTML = '<div class="wrapper" id="pages"><span id="quizNumber"> - </span></div><div class="results" id="pages"><span id="results"> - </span></div> <div class="quiz-questions" id="display-area"><p id="kronometre" style="font-size: 20px;">Kronometre</p><p id="question" class="questionText"></p><ul id="answer"></ul><p id="question" class="questionText"></p><div class="answerField"><p width="20%" class="answerLabel">Cevap: </p><input type="number" class="answer" id="studentAnswer"></div><div id="quiz-results"><button type="button" name="button" class="submit" id="submit" onclick="getAnswer()">Atla</button></div>'

    questionCount = document.getElementById('quizNumber');
    resultCount = document.getElementById("results");

    updateCount();
    updateResult();


    myVar = setInterval(kronometre, 1000);

    generateQuestion();


    document.getElementById("studentAnswer").onkeypress = function(e) {
        if (!e) e = window.event;
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter') {
            getAnswer();
        }
    }


    document.getElementById("studentAnswer").oninput = function() {
        if (this.value != "") {
            document.getElementById("submit").innerHTML = "Cevapla";
        } else {
            document.getElementById("submit").innerHTML = "Atla";
        }
    }

}

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




function getAnswer() {
    if (resultRevealed == false) {
        let studentAnswer = document.getElementById("studentAnswer").value;

        if (studentAnswer == result) {
            document.getElementById("questionCard").style.background = '#edfff0';
            trueCount++;
            document.getElementById("studentAnswer").value = "";
            generateQuestion();
            resetFields();
        } else {
            document.getElementById("questionCard").style.background = '#fde7e8';
            falseCount++;

            revealResult();
        }
        updateCount();
        updateResult();

    } else {
        document.getElementById("questionCard").style.background = '#edfff0';
        resultRevealed = false;
        generateQuestion();
        resetFields();
    }
}

function generateQuestion() {
    document.getElementById("studentAnswer").disabled = false;

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

    resetFields();

}

function resetFields() {
    document.getElementById("submit").innerHTML = "Atla";
    document.getElementById("submit").style.background = "#6dce70";
    document.getElementById("questionCard").style.background = "#edfff0";
    document.getElementById("studentAnswer").value = "";
}

function revealResult() {

    let field = document.getElementById("studentAnswer");

    field.disabled = true;
    field.value = result;

    document.getElementById("submit").style.backgroundColor = 'red';
    document.getElementById("submit").innerHTML = "Geç";
    resultRevealed = true;
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


function kronometre() {
    document.getElementById("kronometre").innerHTML = saatText + ":" + dakikaText + ":" + saniyeText;

    if (saniye < 59) {
        saniye += 1
    } else {
        saniye = 0;
        if (dakika < 59) {
            dakika += 1;
        } else {
            saat += 1;
        }
    }
    if (saniye.toString().length == 2)
        saniyeText = saniye.toString()
    else
        saniyeText = "0" + saniye.toString();

    if (dakika.toString().length == 2)
        dakikaText = dakika.toString()
    else
        dakikaText = "0" + dakika.toString();

    if (saat.toString().length == 2)
        saatText = saat.toString()
    else
        saatText = "0" + saat.toString();

}

function calculateMinuteNumber() {
    let minutes = 0;
    minutes += saat * 60
    minutes += saniye / 60;
    return minutes;
}

function finishQuiz() {
    document.getElementById("questionCard").innerHTML = '<div class="quiz-questions" id="display-area"><p id="kronometre" class="">Kronometre</p><p id="" class="resultText">Puanınız</p><p id="" class="resultMiniText">' + (((trueCount / totalQuestionCount) / calculateMinuteNumber()) * 10000).toFixed(0) + '</p><ul id="answer"></ul><div id="quiz-results"><button type="button" name="button" class="submit" id="submit" onclick="window.location.reload(true)" style="margin-right:2px;">Tekrarla</button><button type="button" name="button" class="submit" id="submit" onclick="downloadResult();" style="margin-left:2px;">SONUCU İNDİR</button></div></div>'
    document.getElementById("submit").innerHTML = "Yeniden Başla";
    document.getElementById("submit").style.background = "#6dce70";
    document.getElementById("questionCard").style.background = "#edfff0";
    clearInterval(myVar);
    document.getElementById("kronometre").innerHTML = saatText + ":" + dakikaText + ":" + saniyeText;
}


async function downloadResult() {

    html2canvas(document.getElementById("questionCard")).then(async function(canvas) {

        const image = await fetch(canvas.toDataURL("image/png", 0.9))
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = "Result";
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    });
}