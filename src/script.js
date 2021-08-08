let questionCount;
let resultCount = document.getElementById("results");
let index = 0,
    totalQuestionCount = 10;
let result = 0,
    trueCount = 0,
    falseCount = 0,
    solvedCount = 0;

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

function guestLogin() {
    user_name = null;
    user_surname = null
    user_grade = null;
    startQuiz();
}


function startQuiz() {
    document.getElementById("questionCard").innerHTML = '<div class="wrapper" id="pages"><span id="quizNumber"> - </span></div><div class="results" id="pages"><span id="results"> - </span></div> <div class="quiz-questions" id="display-area"><p id="kronometre" style="font-size: 20px;">Kronometre</p><p id="question" class="questionText">-</p><ul id="answer"></ul><p id="question" class="questionText"></p><div class="answerField"><input type="number" class="answer" id="studentAnswer" placeholder="Cevap :"></div><div id="quiz-results"><button type="button" name="button" class="submit" id="submit" onclick="getAnswer()">Atla</button></div>'

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

    resultCount.innerHTML = trueCount + '/' + solvedCount;

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
            if (studentAnswer != "")
                falseCount++;

            revealResult();
        }
        solvedCount++;
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
    let index_of_question_types = Math.floor(Math.random() * question_types.length)
    console.log(index_of_question_types)
    let question = question_types[index_of_question_types][0]
    result = question_types[index_of_question_types][1]
    document.getElementById("question").innerHTML = question;
    document.getElementById("question").style.opacity = "0"
    document.getElementById("question").style.transition = "2s";
    document.getElementById("question").style.opacity = "1"
    reload_questions();
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

    return saatText + ":" + dakikaText + ":" + saniyeText;

}

function calculateSecondNumber() {
    let seconds = 60;
    seconds += saniye;
    seconds += dakika * 60;
    seconds += saat * 3600;
    return seconds;
}

function finishQuiz() {
    document.getElementById("questionCard").innerHTML = '<div class="quiz-questions" id="display-area"><p id="kronometre" class="">Kronometre</p><p id="userNameText" class="userNameText">-</p><p id="sınıf" class="resultText">.Sınıf</p><p id="" class="resultMiniText">' + (((trueCount / totalQuestionCount) / calculateSecondNumber()) * 10000).toFixed(0) + '</p><ul id="answer"></ul><div id="quiz-results"><button type="button" name="button" class="submit" id="submit" onclick="window.location.reload(true)" style="margin-right:2px;">Tekrarla</button><button type="button" name="button" class="submit" id="download" onclick="downloadResult();" style="margin-left:2px;">SONUCU Kaydet</button></div></div>'
    document.getElementById("submit").innerHTML = "Yeniden Başla";
    document.getElementById("userNameText").innerHTML = user_name + " " + user_surname;
    document.getElementById("sınıf").innerHTML = user_grade;
    document.getElementById("submit").style.background = "#6dce70";
    document.getElementById("questionCard").style.background = "#edfff0";
    if (user_name == null) {
        document.getElementById("questionCard").innerHTML = '<div class="quiz-questions" id="display-area"><p id="kronometre" class="">Kronometre</p><p id="userNameText" class="userNameText">Misafir</p><p id="sınıf" class="resultText">Lise 1</p><p id="" class="resultMiniText">' + (((trueCount / totalQuestionCount) / calculateSecondNumber()) * 10000).toFixed(0) + '</p><ul id="answer"></ul><div id="quiz-results"><button type="button" name="button" class="submit" id="submit" onclick="window.location.reload(true)" style="margin-right:2px;">Tekrarla</button></div></div>'
    }
    clearInterval(myVar);
    document.getElementById("kronometre").innerHTML = saatText + ":" + dakikaText + ":" + saniyeText;
}


async function downloadResult() {
    if (user_name != null) {
        document.getElementById("download").disabled = true;
        //sendMail(totalQuestionCount, trueCount, falseCount, kronometre(), (((trueCount / totalQuestionCount) / calculateSecondNumber()) * 10000).toFixed(0));

    }

    function sendMail(sorusayısı, dogrusayısı, yanlıssayısı, sure, puan) {

        let tempParams = {
            to_name: "Emin Kartcı",
            from_name: user_name + " " + user_surname,
            total_question: sorusayısı,
            correct_question: dogrusayısı,
            wrong_question: yanlıssayısı,
            time: sure,
            space_question: (sorusayısı - dogrusayısı - yanlıssayısı),
            score: ((dogrusayısı * 100 / sorusayısı) * 100 / (sorusayısı * 100 / sorusayısı)).toFixed(0) + "/100",
            puan: puan,
            to: "emin.kartci@ozu.edu.tr",
            grade: user_grade
        }
        emailjs.send("service_880b6o7", "template_cbjq7pg", tempParams).then(function(res) { console.log("succes : " + res.status) })
    }
}