class Student{
    constructor(name,surname,school_no,password){
        this.name = name;
        this.surname = surname;
        this.school_no = school_no;
        this.password = password;
        this.grade = this.find_grade_by_schoolNo(this.school_no);
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

    find_grade_by_schoolNo(school_no){
        if(school_no!=""){
            return school_no.split("")[0]
        }else{
            console.log("Öğrenci Sınıf Düzeyi Tespit Edilemedi !!")
            return 0
        }
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

let student_database_json = {
    
    "5082":{
        "name":"Emin",
        "surname":"Kartcı",
        "password":"emin1415",
    },"5081"
    :{
        "name":"Durmuş",
        "surname":"Kartcı",
        "password":"durmus67512",
    },
    "5083":{
        "name":"Muhammed Fatih",
        "surname":"Kartcı",
        "password":"mami1234",
    }
}
function login(student_database){
    let school_no_input = document.getElementById("school_no").value
    let password_input = document.getElementById("password").value
    if(school_no_input !="" && password_input != ""){
        if(find_student_by_schoolNo(school_no_input,student_database)!=null){
            student_infos = find_student_by_schoolNo(school_no_input,student_database)
            if(password_input==student_infos.password){
                return new Student(student_infos.name,student_infos.surname,school_no_input,student_infos.password)
            }else{
                console.log("Şifre Yanlış")
                return null
            }
        }else{
            console.log("Böyle bir okul numarasına sahip öğrenci bulunamadı")
            return null
        }
    }
}

// Input name and email value
function getVals(formControl, controlType) {
    switch (controlType) {

        case 'name_field':
            // Get the value for input
            var value = $(formControl).val();
            $("#name_field").text(value);
            break;

        case 'email_field':
            // Get the value for input
            var value = $(formControl).val();
            $("#email_field").text(value);
            break;
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





///// MAIN //////

let student = null;

document.getElementById("next_button").onclick = function() {
    student = login(student_database_json)
    if(student != null)
        student.show();

}

