
///// DATABASE ////

let student_database_json = {
    
    "5082":{
        "name":"Emin",
        "surname":"Kartcı",
        "password":"emin1415",
        "grade":"10"
    },"5081"
    :{
        "name":"Durmuş",
        "surname":"Kartcı",
        "password":"durmus67512",
        "grade":"10"
    },
    "5083":{
        "name":"Muhammed Fatih",
        "surname":"Kartcı",
        "password":"mami1234",
        "grade":"10"
    }
}

let question_types_json={

    "matematik":{
        10:{
            "sayma-siralama":{
                0:{
                    "question":"Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name":["Ayşe","Selin","Nedim","İrem","Zeynep","Emine"],
                    "answer":"<number1>+<number2>*<number3>"
                },
                1:{
                    "question":"Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name":["Ayşe","Selin","Nedim","İrem","Zeynep","Emine"],
                    "answer":"<number1>+<number2>*<number3>"
                },
                2:{
                    "question":"Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name":["Ayşe","Selin","Nedim","İrem","Zeynep","Emine"],
                    "answer":"<number1>+<number2>*<number3>"
                },
                3:{
                    "question":"Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name":["Ayşe","Selin","Nedim","İrem","Zeynep","Emine"],
                    "answer":"<number1>+<number2>*<number3>"
                },
                4:{
                    "question":"Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name":["Ayşe","Selin","Nedim","İrem","Zeynep","Emine"],
                    "answer":"<number1>+<number2>*<number3>"
                }
            }
        }
    }

}


class Student{
    constructor(name,surname,school_no,password,grade){
        this.name = name;
        this.surname = surname;
        this.school_no = school_no;
        this.password = password;
        this.grade = grade;
    }

    show(){
       let content = `
-------- ${this.name} ${this.surname} -------- 

School No    : ${this.school_no}
Sınıf Düzeyi : ${this.grade}

---------------------------------------------
            `
        console.log(content)
    }

    /////// GETTER ///////
    getName(){
        return this.name
    }
    
    getSurname(){
        return this.surname
    }

    getSchoolNo(){
        return this.school_no
    }

    getPassword(){
        return this.password
    }

    getGrade(){
        return this.grade
    }

    /////// SETTER ///////
    setName(name){
        if(name != ""){
            this.name = name
        }else{
            console.log("Öğrenci Adı Değiştirilemedi")
        } 
    }
    
    setSurname(surname){
        if(surname != ""){
            this.surname = surname
        }else{
            console.log("Öğrenci Soyadı Değiştirilemedi")
        }     
    }

    setSchoolNo(school_no){
        if(school_no != ""){
            this.school_no = school_no
        }else{
            console.log("Öğrenci Okul Numarası Değiştirilemedi")
        }     
    }

    setPassword(password){
        if(password != ""){
            this.password = password
        }else{
            console.log("Öğrenci Şifresi Değiştirilemedi")
        }     
    }

    setGrade(grade){
        if(grade >=0){
            this.grade = grade
        }else{
            console.log("Öğrenci Sınıf Düzeyi Değiştirilemedi")
        }     
    }
}

function login(student_database){

    let school_no_input = document.getElementById("school_no").value
    let password_input = document.getElementById("password").value

    if(school_no_input !="" && password_input != ""){

        if(find_student_by_schoolNo(school_no_input,student_database)!=null){

            student_infos = find_student_by_schoolNo(school_no_input,student_database)

            if(password_input==student_infos.password){

                return new Student(student_infos.name,student_infos.surname,school_no_input,student_infos.password,student_infos.grade)

            }else{

                // console.log("Şifre Yanlış")
                return null

            }

        }else{
            // console.log("Böyle bir okul numarasına sahip öğrenci bulunamadı")
            return null
        }
    }
}

function find_student_by_schoolNo(school_no,json){
    for(let i = 0;i < Object.keys(json).length;i++){
        if(Object.keys(json)[i] == school_no){
            return json[Object.keys(json)[i]]
        }
    }
    return null
}

function generate_question(question_types,lesson,grade){
    console.log(question_types)
    for(let i = 0;i< Object.keys(question_types).length;i++){
        if(Object.keys(question_types)[i]== lesson){
            let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
            let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
            let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
            // let question_variables = []
            // for(let x =1 ; x < Object.keys(question_type).length;x++){
            //     question_variables.push(question_type[Object.keys(question_type)[x]])
            // }
            let question = question_type.question
            let answer = question_type.answer
            console.log(subject)
            console.log(question)
            console.log(answer)
            return [subject,question,answer]
        }else {
            console.log("Ders bulunamadı")
            return null
        }
    }
}

function generate_quiz(question_types,number_of_question,lessons,grade){

    let questions = []
    for(let i = 0 ;i<number_of_question;i++){

        console.log(lessons[Math.floor(lessons.length*Math.random())])
        console.log(grade)
        questions.push(generate_question(question_types,lessons[Math.floor(lessons.length*Math.random())],grade))


    }

    return questions

}




///// MAIN //////

let student = null;
let quiz_div = document.getElementById("middle-wizard")


document.getElementById("next_button").onclick = function() {
    student = login(student_database_json)
    if(student != null)
        student.show();

}

generate_quiz(question_types_json,10,["matematik"],10)