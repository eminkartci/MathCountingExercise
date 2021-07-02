

let questionCount = document.getElementById('quizNumber');
let resultCount = document.getElementById("results");
let index = 0,totalQuestionCount = 10;
let result = 0,trueCount = 0,falseCount = 0;

function updateCount() {

    if(index == 10){
        return;
    }

    index ++;
    questionCount.innerHTML = index + " / " + totalQuestionCount;

}

function updateResult(){

    resultCount.innerHTML = trueCount+ ' / ' + (falseCount + trueCount);

}


updateCount();
updateResult();


function getAnswer(){

    
    

    let studentAnswer = document.getElementById("studentAnswer").value;

    if(studentAnswer == result){
        document.getElementById("questionCard").style.background = '#edfff0';
        trueCount++;
    }else{
        document.getElementById("questionCard").style.background = '#fde7e8';
        falseCount++;
    }

    //console.log("Öğrenci Cevabı: ",studentAnswer);
    updateCount();
    updateResult();
    generateQuestion();
    
}

function generateQuestion(){

    let number1 = 0, number2 = 0;
    let operation = '+';

    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);

    let randomOperator =Math.floor(Math.random() * 4);

    if(randomOperator == 0){
        operation = '+';
        result = number1 + number2;
    }else if(randomOperator == 1){
        operation = '-';
        result = number1 - number2;
    }else if(randomOperator == 2){
        operation = '/';
        result = number1 / number2;
    }else if(randomOperator == 3){
        operation = '.';
        result = number1 * number2;
    }


    let question = number1 + " " +operation + " "  + number2 + " = x denklemine göre x'in değeri kaçtır ?";
    let answer = 0;
    


    document.getElementById("question").innerHTML = question;

}
generateQuestion();