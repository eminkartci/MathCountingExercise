function kullanici_getir(){
    let endpoint = "/profil";
    console.log(endpoint)
    fetch(endpoint).then(res => res.json()).then(data => {
        console.log("user: ", data)
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