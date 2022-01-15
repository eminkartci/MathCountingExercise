
function user_POST(isim,soyisim,email,sifre){

    var form = new FormData();
    form.append("isim", isim);
    form.append("soyisim", soyisim);
    form.append("email", email);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/danisan/ekle?isim=${isim}&soyisim=${soyisim}&email=${email}&sifre=${sifre}`,
    "method": "POST",
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "70368b63-2fa2-41a8-e490-f2e5eb3a8480"
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    });

}

function hata_yazdir(hata){
    document.getElementById("hata_text").innerHTML = hata
}

document.getElementById("register_button").onclick = () =>{
    isim = document.getElementById("name_input").value
    soyisim = document.getElementById("surname_input").value
    email = document.getElementById("email_input").value
    sifre = document.getElementById("password_input").value
    if(isim !=""&&soyisim !=""&&email !=""&&sifre !=""&& email.includes("@")){
        user_POST(isim,soyisim,email,sifre)
        window.location.replace('./login')
    }else if(!email.includes("@")){
        hata_yazdir("Mail formatı yanlış")
    }
    else{
        console.log("\n%cİnput alanlarının hepsi dolu olması lazım !!!\n","color:red;")
        hata_yazdir("Kullanıcı bilgileri boş olamaz !")
    }
}