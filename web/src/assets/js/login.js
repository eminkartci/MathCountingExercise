function user_get(okul_no,sifre){

    var form = new FormData();
    form.append("okul_no", okul_no);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `http://localhost:5006/danisan/bul?okul_no=${okul_no}&sifre=${sifre}`,
    "method": "get",
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

        let response_json = JSON.parse(response)
        user_POST(response_json.İsim,response_json.Soyİsim,response_json.OkulNo,response_json.Sifre)
    });



}

function user_POST(isim,soyisim,okul_no,sifre){

    var form = new FormData();
    form.append("isim", isim);
    form.append("soyisim", soyisim);
    form.append("okul_no", okul_no);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `http://localhost:5006/login?isim=${isim}&soyisim=${soyisim}&okul_no=${okul_no}&sifre=${sifre}`,
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

// document.getElementById("login_button").onclick = () =>{
//     okul_no = document.getElementById("school_no_input").value
//     sifre = CryptoJS.MD5(document.getElementById("password_input").value).toString()
//     if(okul_no !=""&&sifre !=""){
//         // user_get(okul_no,sifre)
//     }else{
//         console.log("\n%cOkul Numarası veya Şifre Alanı Boş Olamaz !\n","color:red;")
//         alert("Okul Numarası veya Şifre Alanı Boş Olamaz !")
//     }
// }