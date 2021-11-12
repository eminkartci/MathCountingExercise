
///// DATABASE ////

let student_database_json = {

    "5082": {
        "name": "Emin",
        "surname": "Kartcı",
        "password": "emin1415",
        "grade": "10"
    }, "5081"
        : {
        "name": "Durmuş",
        "surname": "Kartcı",
        "password": "durmus67512",
        "grade": "10"
    },
    "5083": {
        "name": "Muhammed Fatih",
        "surname": "Kartcı",
        "password": "mami1234",
        "grade": "10"
    }
}

let question_types_json = {

    "matematik": {
        10: {
            "sayma-siralama": {
                0: {
                    "question": "Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name": ["Ayşe", "Selin", "Nedim", "İrem", "Zeynep", "Emine"],
                    "answer": "<number1>+<number2>*<number3>",
                    "options_range": 30
                },
                1: {
                    "question": "Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name": ["Ayşe", "Selin", "Nedim", "İrem", "Zeynep", "Emine"],
                    "answer": "<number1>+<number2>*<number3>",
                    "options_range": 30

                },
                2: {
                    "question": "Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name": ["Ayşe", "Selin", "Nedim", "İrem", "Zeynep", "Emine"],
                    "answer": "<number1>+<number2>*<number3>",
                    "options_range": 30

                },
                3: {
                    "question": "Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name": ["Ayşe", "Selin", "Nedim", "İrem", "Zeynep", "Emine"],
                    "answer": "<number1>+<number2>*<number3>",
                    "options_range": 30

                },
                4: {
                    "question": "Arkadaşlarıyla dışarıya çıkmak isteyen <name> , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.<name>'in <number1> elbise , <number2> gömlek ve <number3> pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",
                    "name": ["Ayşe", "Selin", "Nedim", "İrem", "Zeynep", "Emine"],
                    "answer": "<number1>+<number2>*<number3>",
                    "options_range": 30

                }
            }
        }
    }

}


class Student {
    constructor(name, surname, school_no, password, grade) {
        this.name = name;
        this.surname = surname;
        this.school_no = school_no;
        this.password = password;
        this.grade = grade;
    }

    show() {
        let content = `
-------- ${this.name} ${this.surname} -------- 

School No    : ${this.school_no}
Sınıf Düzeyi : ${this.grade}

---------------------------------------------
            `
        console.log(content)
    }

    /////// GETTER ///////
    getName() {
        return this.name
    }

    getSurname() {
        return this.surname
    }

    getSchoolNo() {
        return this.school_no
    }

    getPassword() {
        return this.password
    }

    getGrade() {
        return this.grade
    }

    /////// SETTER ///////
    setName(name) {
        if (name != "") {
            this.name = name
        } else {
            console.log("Öğrenci Adı Değiştirilemedi")
        }
    }

    setSurname(surname) {
        if (surname != "") {
            this.surname = surname
        } else {
            console.log("Öğrenci Soyadı Değiştirilemedi")
        }
    }

    setSchoolNo(school_no) {
        if (school_no != "") {
            this.school_no = school_no
        } else {
            console.log("Öğrenci Okul Numarası Değiştirilemedi")
        }
    }

    setPassword(password) {
        if (password != "") {
            this.password = password
        } else {
            console.log("Öğrenci Şifresi Değiştirilemedi")
        }
    }

    setGrade(grade) {
        if (grade >= 0) {
            this.grade = grade
        } else {
            console.log("Öğrenci Sınıf Düzeyi Değiştirilemedi")
        }
    }
}

function login(student_database) {

    let school_no_input = document.getElementById("school_no").value
    let password_input = document.getElementById("password").value

    if (school_no_input != "" && password_input != "") {

        if (find_student_by_schoolNo(school_no_input, student_database) != null) {

            student_infos = find_student_by_schoolNo(school_no_input, student_database)

            if (password_input == student_infos.password) {

                return new Student(student_infos.name, student_infos.surname, school_no_input, student_infos.password, student_infos.grade)

            } else {

                // console.log("Şifre Yanlış")
                return null

            }

        } else {
            // console.log("Böyle bir okul numarasına sahip öğrenci bulunamadı")
            return null
        }
    }
}

function find_student_by_schoolNo(school_no, json) {
    for (let i = 0; i < Object.keys(json).length; i++) {
        if (Object.keys(json)[i] == school_no) {
            return json[Object.keys(json)[i]]
        }
    }
    return null
}

function generate_question(question_types, lesson, grade) {
    if (lesson == "matematik") {
        for (let i = 0; i < Object.keys(question_types).length; i++) {
            if (Object.keys(question_types)[i] == lesson) {
                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options_range = question_type.options_range
                return [subject, question, answer, options_range]
            } else {
                console.log("Ders bulunamadı")
                return null
            }
        }
    } else {
        console.log("Ders bulunamadı")
        return null
    }
}

function generate_quiz(question_types, number_of_question, lessons, grade) {

    let quiz_array = []
    for (x = 0; x < lessons.length; x++) {
        quiz_array[x] = []
        for (let i = 0; i < Math.floor(number_of_question / lessons.length); i++) {
            quiz_array[x].push(generate_question(question_types, lessons[Math.floor(lessons.length * Math.random())], grade))
        }
    }

    quiz_array[lessons.length] = lessons

    console.log(quiz_array)
    return quiz_array

}

function convert_array_to_html(quiz_array) {
    let content = ""
    for (let a = 0; a < quiz_array.length-1; a++) {
        if (quiz_array[quiz_array.length - 1][a] == "matematik") {
            for (let i = 0; i < quiz_array[a].length; i++) {
                options = [Math.floor(quiz_array[a][i][3] * Math.random()), Math.floor(quiz_array[a][i][3] * Math.random()), Math.floor(quiz_array[a][i][3] * Math.random()), Math.floor(quiz_array[a][i][3] * Math.random())]
                options[Math.floor(Math.random()*options.length)] = quiz_array[a][i][2]
                content += `
                <div class="step">
                    <h3 class="main_question"><i class="arrow_right"></i>${quiz_array[a][i][1]}</h3>
                    <div class="form-group">
                        <label class="container_radio version_2">${options[0]}
                            <input type="radio" name="question_2" value="${options[0]}" class="required">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container_radio version_2">${options[1]}
                            <input type="radio" name="question_2" value="${options[1]}" class="required">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container_radio version_2">${options[2]}
                            <input type="radio" name="question_2" value="${options[2]}" class="required">
                            <span class="checkmark"></span>
                        </label>
                        <label class="container_radio version_2">${options[3]}
                            <input type="radio" name="question_2" value="${options[3]}" class="required">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
        `
            }
            
        }
    }

    console.log(content)
    return content;

}



///// MAIN //////

let student = null;
let quiz_div = document.getElementById("middle-wizard")
let state = 0


document.getElementById("next_button").onclick = function () {
    if (state == 0) {
        student = login(student_database_json)
        if(student!=null)
            state+=2
    } else if (state == 2) {
        document.getElementById("middle-wizard").innerHTML=convert_array_to_html(generate_quiz(question_types_json, 10, ["matematik"], 10))
        
    }
    format_html();

}

