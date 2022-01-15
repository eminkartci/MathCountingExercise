
function user_POST(isim,soyisim,okul_no,sifre){

    var form = new FormData();
    form.append("isim", isim);
    form.append("soyisim", soyisim);
    form.append("okul_no", okul_no);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/danisan/ekle?isim=${isim}&soyisim=${soyisim}&okul_no=${okul_no}&sifre=${sifre}`,
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
    okul_no = document.getElementById("school_no_input").value
    sifre = document.getElementById("password_input").value
    if(isim !=""&&soyisim !=""&&okul_no !=""&&sifre !=""){
        user_POST(isim,soyisim,okul_no,sifre)
        window.location.replace('./login')
    }else{
        console.log("\n%cİnput alanlarının hepsi dolu olması lazım !!!\n","color:red;")
        hata_yazdir("Kullanıcı bilgileri boş olamaz !")
    }
}

