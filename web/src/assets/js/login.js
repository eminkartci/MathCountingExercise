function user_get(okul_no,sifre){

    var form = new FormData();
    form.append("okul_no", okul_no);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/danisan/bul?okul_no=${okul_no}&sifre=${sifre}`,
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

        try{
            let response_json = JSON.parse(response)
            console.log("Kullanici Response: ", response_json)
            user_POST(response_json.OkulNo,response_json.Sifre);
            //window.location.replace("/soru-takvimi")
        }catch(e){
            hata_yazdir(response)
        }
    });



}

function user_POST(okul_no,sifre){

    var form = new FormData();
    form.append("okul_no", okul_no);
    form.append("sifre", sifre);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/giris_yap?okul_no=${okul_no}&sifre=${sifre}`,
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

// document.getElementById("login_button").onclick = () =>{
//     okul_no = document.getElementById("school_no_input").value
//     let sifre = document.getElementById("password_input").value
//     let hashedSifre = CryptoJS.MD5(sifre).toString()
//     if(okul_no !=""&&sifre !=""){
//         user_get(okul_no,hashedSifre)
//     }else{
//         console.log("\n%cOkul Numarası veya Şifre Alanı Boş Olamaz !\n","color:red;")
//         hata_yazdir("Okul numarası veya şifre alanı boş olamaz !")
//     }
// }