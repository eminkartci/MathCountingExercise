
///// DATABASE ////

let student_database_json = {

    "S014877": {
        "name": "Emin",
        "surname": "Kartcı",
        "password": "4297f44b13955235245b2497399d7a93",
        "grade": "10"
    }, "5081"
        : {
        "name": "Durmuş",
        "surname": "Kartcı",
        "password": "6481064b197d9a31c9ab7b604ea1c319",
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
                    "options": 30
                }
            }
        }
    },"fizik": {
        10: {
            "hiz-surat": {
                0: {
                    "question": "A şehrinden B şehrine olan uzaklık <number1> kilometredir. <name>, A şehrinden B şehrine <number2> saatte gittiğine göre Ahmet'in ortalama hızı kaçtır ?",
                    "name": ["Mehmet", "Arda", "Emir", "Buğra", "Deniz", "Can"],
                    "answer": "<number1>/<number2>",
                    //options_range --> [ {minimum},{maximum},{katsayi}, ]
                    "options": [8,20,10]
                }
            }  
        }

    },"kimya": {
        10: {
            "mol": {
                0: {
                    "question":"<number1> mol atom içeren <name> molekülü kaç moldür ? ",
                    "name": ["H2O"],
                    "answer": "<number>/3",
                    //options_range --> [ {minimum},{maximum},{katsayi}, ]
                    "options": [0,20,1]
                }
            }  
        }

    },"biyoloji": {
        10: {
            "hucre-bolunmesi": {
                0: {
                    "question":"2n = <number> kromozomlu bir hücrenin, anafaz evresinde kaç kromozu vardır ?",
                    "name": [""],
                    "answer": "<number>*2",
                    //options_range --> [ {minimum},{maximum},{katsayi}, ]
                    "options": [0,20,1]
                }
            }  
        }

    },"turkce": {
        10: {
            "yazim-kurallari": {
                0: {
                    "question":"Aşağıdaki cümlelerin hangisinde yazım hatası vardır?",
                    "name": ["Ayşe","Ahmet","Can","Hatice","Mehmet"],
                    "answer": ["<name> okula geldiğin de , kardeşininde dondurma yediğini gördü"],
                    //options_range --> [ {minimum},{maximum},{katsayi}, ]
                    "options": ["<name> , Fatma teyzesinin verdiği harçlığı almadı.","Komşumuz Korkusuz Ahmet'i, dün semt pazarında gördüm.","Yarın sabaha kadar ki bütün feribot seferlerinin iptal edileceği bildirildi","Kendisine mülakata yalnız katılması gerektiği söylendi.","Son Güneş tutulmasını bu şehirde izlemiştik.","<name>, bu yıl 2'nci sınıfa başlamıştı."]
                }
            }  
        }

    },"tarih": {
        10: {
            "yazim-kurallari": {
                0: {
                    "question":"Aşadıdaki beyliklerden hangisi 1. beyliklerden değildir?",
                    "name": ["Ayşe","Ahmet","Can","Hatice","Mehmet"],
                    "answer": ["Karamanoğulları","Osmanoğulları","Karesioğulları"],
                    //options_range --> [ {minimum},{maximum},{katsayi}, ]
                    "options": ["Saltuklular","Artuklular","Çaka Beyliği","Danişmentliler","Mengücekliler"]
                }
            }  
        }

    },

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

class Soru{
    constructor(soru_tipleri,soru,cevap,secenekler){
        this.soru_tipleri=soru_tipleri
        this.soru = soru
        this.cevap = cevap
        this.secenekler = secenekler
    }

    goster(){
        let content = `
            Soru : ${this.soru}
            Cevap   : ${this.cevap}
            Seçenekler  :
                1.  ${this.secenekler[0]}
                2.  ${this.secenekler[1]}
                3.  ${this.secenekler[2]}
                4.  ${this.secenekler[3]}
            `
        
        console.log(content)
    }   

}

class Matematik {
    constructor(soru_tipleri,konu,sinif){
        this.soru_tipleri = soru_tipleri
        this.konu = konu
        this.sinif = sinif
        this.soru_tipi = this.jsondan_soru_tipi_sec()

        this.soru = this.soru_getir()
        this.cevap = this.cevap_getir()
        this.secenekler = this.secenekler_getir()
    }

    jsondan_soru_tipi_sec(){
        for(let a = 0;a < Object.keys(this.soru_tipleri).length;a++){
            if(Object.keys(this.soru_tipleri)[a] == "matematik"){
                for(let b = 0;b < Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]][this.sinif]).length;b++){
                    console.log(Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]][Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]])]))//[Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]])

                    if(Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]][Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]])]) == this.konu){
                        console.log(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]][Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]])])[this.konu]
                        return this.soru_tipleri[Object.keys(this.soru_tipleri)[a]][Object.keys(this.soru_tipleri[Object.keys(this.soru_tipleri)[a]])]
                    }
                }
            }
        }
    }

    soru_getir(){
        return this.jsondan_soru_tipi_sec().question
    }

    cevap_getir(){
        return this.jsondan_soru_tipi_sec().answer
    }

    secenekler_getir(){
        return this.jsondan_soru_tipi_sec().options
    }

    goster(){
        let content = `
            Soru : ${this.soru}
            Cevap   : ${this.cevap}
            Seçenekler  :
                1.  ${this.secenekler[0]}
                2.  ${this.secenekler[1]}
                3.  ${this.secenekler[2]}
                4.  ${this.secenekler[3]}
            `
        
        console.log(content)
    }  
}
// class Question{
//     constructor(question_types){
//         this.question_types_array = 
//     }
// }

function login(student_database) {

    let okul_numarasi = document.getElementById("school_no").value
    let password_input = document.getElementById("password").value
    var password = CryptoJS.MD5(password_input).toString();
    console.log("Okul Numarası: " + okul_numarasi);
    console.log("Şifre : " + password);

    // okul no veya şifre boş mu kontrol
    if (okul_numarasi != "" || password != "") {

        student_infos = find_student_by_schoolNo(okul_numarasi, student_database)
        // kullanıcı bizde kayıtlı mı kontrol
        if (student_infos != null) {

            if (password == student_infos.password) {

                return new Student(student_infos.name, student_infos.surname, okul_numarasi, student_infos.password, student_infos.grade)

            } else {

                // console.log("Şifre Yanlış")
                return null

            }

        } else { // okul numarası yoksa
            
            // Bilgilendir
            document.getElementById("giris_baslik").innerHTML = "Deneme1"
            console.log("Böyle bir okul numarasına sahip öğrenci bulunamadı")

            // Bos Dondur
            return null
        }
    } else { // Kullanıcı veya şifre alanı boşsa

        document.getElementById("giris_baslik").innerHTML = "Deneme"
        console.log("Böyle bir okul numarasına sahip öğrenci bulunamadı")
        return null
    }
}

function find_student_by_schoolNo(school_no, student_db) {
    if(Object.keys(student_db).includes(school_no)){
        console.log(student_db[school_no]);
        return student_db[school_no]
    }else{
        console.log("FALSE");
    }
}

function generate_question(question_types, lesson, grade) {
    for (let i = 0; i < Object.keys(question_types).length; i++) {
        if (Object.keys(question_types)[i] == lesson) {
            if (lesson == "matematik") {

                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options = question_type.options
                return [subject, question, answer, options]
            }else if(lesson == "fizik"){
                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options = question_type.options
                return [subject, question, answer, options]
            }else if(lesson == "kimya"){
                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options = question_type.options
                return [subject, question, answer, options]
            }else if(lesson == "biyoloji"){
                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options = question_type.options
                return [subject, question, answer, options]
            }else if(lesson == "turkce"){
                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options = question_type.options
                return [subject, question, answer, options]
            }
            else if(lesson == "tarih"){
                let subject = Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]
                let question_types_array = question_types[lesson][grade][Object.keys(question_types[lesson][grade])[Math.floor(Math.random() * Object.keys(question_types[lesson][grade]).length)]]
                let question_type = question_types_array[Math.floor(Object.keys(question_types_array).length * Math.random())]
                // let question_variables = []
                // for(let x =1 ; x < Object.keys(question_type).length;x++){
                //     question_variables.push(question_type[Object.keys(question_type)[x]])
                // }
                let question = question_type.question
                let answer = question_type.answer
                let options = question_type.options
                return [subject, question, answer, options]
            }else {
                console.log("Ders bulunamadı")
                return null
            }
        }   
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

    return quiz_array

}

//Math.floor(quiz_array[a][i][3][1] * Math.random()+quiz_array[a][i][3][0])*quiz_array[a][i][3][2]
function convert_array_to_html(quiz_array) {
    let content = ""
    for (let a = 0; a < quiz_array.length-1; a++) {
        if (quiz_array[quiz_array.length - 1][a] == "matematik") {
            for (let i = 0; i < quiz_array[a].length; i++) {
                options = [Math.floor(quiz_array[a][i][3] * Math.random()), Math.floor(quiz_array[a][i][3] * Math.random()), Math.floor(quiz_array[a][i][3] * Math.random()), Math.floor(quiz_array[a][i][3] * Math.random())]
                options[Math.floor(Math.random()*options.length)] = quiz_array[a][i][2]
                content = `
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
            
        }else if (quiz_array[quiz_array.length - 1][a] == "turkce" || quiz_array[quiz_array.length - 1][a] == "tarih") {
            for (let i = 0; i < quiz_array[a].length; i++) {
                let options = []
                while(options.length < 5){
                    let current_option = quiz_array[a][i][3][Math.floor(Math.random()*quiz_array[a][i][3].length)]
                    let options_already_exist = false;
                    for(let j=0;j<options.length;j++){
                        if(current_option == options[j]){
                            options_already_exist = true
                        }
                        console.log(options.length)
                    }
                    if(options.length == 0 || options_already_exist == false){
                        options.push(current_option)
                    }

                }
                options[Math.floor(Math.random()*options.length)] = quiz_array[a][i][2][Math.floor(Math.random()*quiz_array[a][i][2].length)]
                console.log(options)
                content = `
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
        else if(quiz_array[quiz_array.length - 1][a] == "fizik" || quiz_array[quiz_array.length - 1][a] == "kimya" ||quiz_array[quiz_array.length - 1][a] == "biyoloji"){
            for (let i = 0; i < quiz_array[a].length; i++) {
                options = [Math.floor(quiz_array[a][i][3][1] * Math.random()+quiz_array[a][i][3][0])*quiz_array[a][i][3][2], Math.floor(quiz_array[a][i][3][1] * Math.random()+quiz_array[a][i][3][0])*quiz_array[a][i][3][2], Math.floor(quiz_array[a][i][3][1] * Math.random()+quiz_array[a][i][3][0])*quiz_array[a][i][3][2], Math.floor(quiz_array[a][i][3][1] * Math.random()+quiz_array[a][i][3][0])*quiz_array[a][i][3][2]]
                options[Math.floor(Math.random()*options.length)] = quiz_array[a][i][2]
                content = `
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
            state+=1
    } else if (state == 1) {

        let lessons = []

        if(document.getElementById("matematik_checkbox").checked){
            lessons.push("matematik")
        }

        if(document.getElementById("biyoloji_checkbox").checked){
            lessons.push("biyoloji")
        }

        if(document.getElementById("kimya_checkbox").checked){
            lessons.push("kimya")
        }

        if(document.getElementById("fizik_checkbox").checked){
            lessons.push("fizik")
        }

        if(document.getElementById("turkce_checkbox").checked){
            lessons.push("turkce")
        }

        if(document.getElementById("tarih_checkbox").checked){
            lessons.push("tarih")
        }

        console.log(lessons)

        if(lessons.length !=0){
            document.getElementById("middle-wizard").innerHTML=convert_array_to_html(generate_quiz(question_types_json, 1, lessons, 10))
        }
    }
}