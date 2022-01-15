let kullanici;
var user_settings = {
    "url": "/user/infos",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "connect.sid=s%3ACe1E1jk_2_DLE_iszl3bz62Zk6tEaJqK.4KZYfEBs%2FqSOyxqFw1jhWON8AM1g5hrml64eOuY2r00"
    },
  };

$.ajax(user_settings).done(function (user_value) {
    kullanici = user_value
    kullanici_bilgilerini_yerlestir(kullanici.isim,kullanici.soyisim,kullanici.email)
})

function kullanici_bilgilerini_yerlestir(isim,soyisim,email){
    document.getElementById("kullanici_adi").innerHTML = isim
    document.getElementById("kullanici_soyadi").innerHTML = soyisim.toUpperCase();
}