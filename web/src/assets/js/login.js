function user_POST(okul_no,sifre){

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

        console.log(response)
        // let user_json = JSON.parse(response)
        // window.location.replace("http://localhost:5006/profil?isim="+user_json.İsim+"&"+"soyisim="+user_json.Soyİsim+"&"+"okul_no="+user_json.OkulNo+"&"+"sifre="+user_json.Sifre);
        // kullanici_yazdir(user_json.İsim,user_json.Soyİsim,user_json.OkulNo,user_json.Sifre)
    });



}

function kullanici_yazdir(isim,soyisim,okul_no,sifre){
    let main_div = document.getElementById("main_div")
    main_div.innerHTML = 
    `
    <h1>Kullanici Sayfasi</h1>

    <h2> Hoş Geldiniz <span id="name">${isim}</span> <span id="surname">${soyisim}</span>,</h2>
    <p>Okul no : <span id="school_no">${okul_no}</span></p>
    <p>Şifre   : <span id="password">${sifre}</span></p>

    `
}

document.getElementById("login_button").onclick = () =>{
    okul_no = document.getElementById("school_no_input").value
    sifre = CryptoJS.MD5(document.getElementById("password_input").value).toString()
    console.log("OKUL NO ",okul_no)
    console.log("ŞİFRE ",sifre)
    if(okul_no !=""&&sifre !=""){
        user_POST(okul_no,sifre)
    }else{
        console.log("\n%cOkul Numarası veya Şifre Alanı Boş Olamaz !\n","color:red;")
        alert("Okul Numarası veya Şifre Alanı Boş Olamaz !")
    }
}