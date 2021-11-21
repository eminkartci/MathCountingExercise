
function user_POST(isim,soyisim,okul_no,sifre){

    var form = new FormData();
    form.append("isim", isim);
    form.append("soyisim", soyisim);
    form.append("okul_no", okul_no);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `http://localhost:5006/danisan/bul?isim=${isim}&soyisim=${soyisim}&okul_no=${okul_no}&sifre=${sifre}`,
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

document.getElementById("login_button").onclick = () =>{
    isim = document.getElementById("name_input").value
    soyisim = document.getElementById("surname_input").value
    okul_no = document.getElementById("school_no_input").value
    sifre = CryptoJS.MD5(document.getElementById("password_input").value).toString()

    console.log("İSİM    : ", isim)
    console.log("SOYİSİM : ", soyisim)
    console.log("OKUL NO : ", okul_no)
    console.log("SİFRE   : ", sifre)
    if(isim !=""&&soyisim !=""&&okul_no !=""&&sifre !=""){
        user_POST(isim,soyisim,okul_no,sifre)
    }
}