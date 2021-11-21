function kullanici_getir(){
    let endpoint = "http://localhost:5006/danisan/ekle";

    fetch(endpoint).then(res => res.json()).then(data => {
        console.log("user: ", data.user)
        kullanici_yazdir(data.user)
    })
}

function kullanici_yazdir(user){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let school_no = document.getElementById("school_no");
    let password = document.getElementById("password");

    name.innerHTML = user.name
    surname.innerHTML = user.surname
    school_no.innerHTML = user.school_no
    password.innerHTML = user.password
}

kullanici_getir()