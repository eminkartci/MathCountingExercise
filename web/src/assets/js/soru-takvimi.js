
let gunluk_ozet_tablo_body = document.getElementById("gunluk_ozet_tablo_body")
let konu_ekle_button = document.getElementById("konu_ekle")
let ders_adi = document.getElementById("ders_adi_input")
let konu_adi = document.getElementById("konu_adi_input")
let toplam_soru_sayisi_input = document.getElementById("soru_sayisi_input")
let dogru_soru_sayisi_input = document.getElementById("dogru_sayisi_input")
let yanlis_soru_sayisi_input = document.getElementById("yanlis_sayisi_input")
let dakika_input = document.getElementById("dakika_input")

let tarih_secici = document.getElementById("tarih_secici")
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()
tarih_secici.value = date

mevcut_tarihin_soru_takvimi_json = {}

gunluk_ozet_tablo_body.innerHTML = ""
let soru_takvimi_ders_rengi = "#fff"

let user;
var user_settings = {
    "url": "/user/infos",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "connect.sid=s%3ACe1E1jk_2_DLE_iszl3bz62Zk6tEaJqK.4KZYfEBs%2FqSOyxqFw1jhWON8AM1g5hrml64eOuY2r00"
    },
  };

$.ajax(user_settings).done(function (user_value) {
    user = user_value
    kullanici_bilgilerini_yerlestir(user.isim,user.soyisim,user.okul_no)
})
// Databaseden alacağımız dersler için dersler değişkenini oluşturuyoruz
let dersler;

var dersler_settings = {
    "url": "/dersler",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "connect.sid=s%3ACe1E1jk_2_DLE_iszl3bz62Zk6tEaJqK.4KZYfEBs%2FqSOyxqFw1jhWON8AM1g5hrml64eOuY2r00"
    },
  };
  
$.ajax(dersler_settings).done(function (dersler_value) {
    
    dersler = dersler_value
    ders_adi.innerHTML = `
    <option label="&nbsp;">&nbsp;</option>                        
        <optgroup label="Dersler">
    `
    let ders_sayisi = Object.keys(dersler).length
    for(let i = 0;i<ders_sayisi;i++){
        ders_adi.innerHTML += `<option value="${dersler[Object.keys(dersler)[i]].DersID}">${dersler[Object.keys(dersler)[i]].DersYazisi}</option>`
    }

    ders_adi.innerHTML += `                      
        </optgroup>
    `

    soru_takvimini_guncelle()

    ders_adi.onchange = () =>{
        if(ders_adi.value != null){
            try {
                    
                
                let secilen_ders_konulari = dersler[ders_adi.value].Konular
                konu_adi.innerHTML = `<option label="&nbsp;">&nbsp;</option> `

                let konu_sayisi = Object.keys(secilen_ders_konulari).length;
                for(let i = 0;i<konu_sayisi;i++){
                    konu_adi.innerHTML += `<option value="${secilen_ders_konulari[Object.keys(secilen_ders_konulari)[i]].KonuID}">${secilen_ders_konulari[Object.keys(secilen_ders_konulari)[i]].KonuYazisi}</option>`                    
                }
            } catch (error) {
                konu_adi.innerHTML = ``
            }
        }else if(ders_adi.value == null || ders_adi.value == ' '){
            konu_adi.innerHTML = ``
        }
    }


    konu_ekle_button.onclick = () =>{
        konu_ekle_guncelle()
    }



    tarih_secici.onchange = () => {
        soru_takvimini_guncelle()
    }



})

function tabloya_konu_ekle(ders_id,ders_adi,konu_id,konu_adi,toplam_soru_sayisi,dogru_soru_sayisi,yanlis_soru_sayisi,dakika){
    let content = `
    
    <tr role="row" class="odd tiklanabilir" style="display:flex;min-height:50px;margin-top:10px;margin-bottom:10px;justify-content:center;align-items:center;transition: all ease-in-out 0.5s;
background:${soru_takvimi_ders_rengi}" onclick='
    input_alanina_veriler_yerlestir("${ders_id}","${konu_id}","${toplam_soru_sayisi}","${dogru_soru_sayisi}","${yanlis_soru_sayisi}","${dakika}")
    '>
        <td style="width:20%" tabindex="0">
            <p class="list-item-heading" style="text-align:center">${ders_adi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${konu_adi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${toplam_soru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${dogru_soru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${yanlis_soru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${dakika}</p>
        </td>
    </tr>

    `
    gunluk_ozet_tablo_body.innerHTML += content


    if(soru_takvimi_ders_rengi != "#fff"){
        soru_takvimi_ders_rengi= "#fff"
    }else{
        soru_takvimi_ders_rengi= "#f8f8f8"
    }
}

function soru_takvimi_ekle_POST(tarih,ders_id,konu_id,toplam_soru_sayisi,dogru_soru_sayisi,yanlis_soru_sayisi,dakika,kisisel_degerlendirme){

    var form = new FormData();
    form.append("tarih", tarih);
    form.append("ders_id", ders_id);
    form.append("konu_id", konu_id);
    form.append("toplam_soru_sayisi", toplam_soru_sayisi);
    form.append("dogru_soru_sayisi", dogru_soru_sayisi);
    form.append("yanlis_soru_sayisi", yanlis_soru_sayisi);
    form.append("kisisel_degerlendirme", kisisel_degerlendirme);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/soru-takvimi/ekle?tarih=${tarih}&ders_id=${ders_id}&konu_id=${konu_id}&toplam_soru_sayisi=${toplam_soru_sayisi}&dogru_soru_sayisi=${dogru_soru_sayisi}&yanlis_soru_sayisi=${yanlis_soru_sayisi}&dakika=${dakika}&kisisel_degerlendirme=${kisisel_degerlendirme}`,
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
                window.location.replace("soru-takvimi/'"+tarih_secici.value.split("/")[1]+"_"+tarih_secici.value.split("/")[0]+"_"+tarih_secici.value.split("/")[2]+"'")
    });

}

function soru_takvimi_guncelle_POST(tarih,ders_id,konu_id,toplam_soru_sayisi,dogru_soru_sayisi,yanlis_soru_sayisi,dakika,kisisel_degerlendirme){

    var form = new FormData();
    form.append("tarih", tarih);
    form.append("ders_id", ders_id);
    form.append("konu_id", konu_id);
    form.append("toplam_soru_sayisi", toplam_soru_sayisi);
    form.append("dogru_soru_sayisi", dogru_soru_sayisi);
    form.append("yanlis_soru_sayisi", yanlis_soru_sayisi);
    form.append("kisisel_degerlendirme", kisisel_degerlendirme);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/soru-takvimi/guncelle?tarih=${tarih}&ders_id=${ders_id}&konu_id=${konu_id}&toplam_soru_sayisi=${toplam_soru_sayisi}&dogru_soru_sayisi=${dogru_soru_sayisi}&yanlis_soru_sayisi=${yanlis_soru_sayisi}&dakika=${dakika}&kisisel_degerlendirme=${kisisel_degerlendirme}`,
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
                window.location.replace("soru-takvimi/'"+tarih_secici.value.split("/")[1]+"_"+tarih_secici.value.split("/")[0]+"_"+tarih_secici.value.split("/")[2]+"'")
    });

}

function soru_takvimi_sil_POST(tarih,ders_id,konu_id){

    var form = new FormData();
    form.append("tarih", tarih);
    form.append("ders_id", ders_id);
    form.append("konu_id", konu_id);

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `/soru-takvimi/sil?tarih=${tarih}&ders_id=${ders_id}&konu_id=${konu_id}`,
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
                window.location.replace("soru-takvimi/'"+tarih_secici.value.split("/")[1]+"_"+tarih_secici.value.split("/")[0]+"_"+tarih_secici.value.split("/")[2]+"'")
    });

}

function soru_takviminde_onceden_varsa(){
    if(ders_adi.value != null && konu_adi.value != null && ders_adi.value != " " && konu_adi.value != " " && ders_adi.value != "" && konu_adi.value != ""){
        for(let i = 0;i<Object.keys(mevcut_tarihin_soru_takvimi_json).length;i++){
            if(mevcut_tarihin_soru_takvimi_json[i].tarih == tarih_secici.value && mevcut_tarihin_soru_takvimi_json[i].ders_id == parseInt(ders_adi.value) && mevcut_tarihin_soru_takvimi_json[i].konu_id == parseInt(konu_adi.value)){
            
                document.getElementById("butonlar_div").innerHTML = `
                <button class="btn btn-primary" style="position: absolute;bottom:3rem;right:3rem" id="konu_ekle">Güncelle</button>
                <button class="btn sil-buton" style="position: absolute;bottom:3rem;right:10rem;background:red;color:white" id="konu_sil">Sil</button>
                `

                document.getElementById("konu_sil").onclick = () =>{
                    konu_sil()
                }
                konu_ekle_button = document.getElementById("konu_ekle")
                konu_ekle_button.onclick = () =>{
                    konu_ekle_guncelle()
                }

                break;
            }else{
                document.getElementById("butonlar_div").innerHTML = `
                <button class="btn btn-primary" style="position: absolute;bottom:3rem;right:3rem" id="konu_ekle">Ekle</button>
                `
                konu_ekle_button = document.getElementById("konu_ekle")
                konu_ekle_button.onclick = () =>{
                    konu_ekle_guncelle()
                }
            }
        }
        if(Object.keys(mevcut_tarihin_soru_takvimi_json).length == 0){
            document.getElementById("butonlar_div").innerHTML = `
                <button class="btn btn-primary" style="position: absolute;bottom:3rem;right:3rem" id="konu_ekle">Ekle</button>
                `
                konu_ekle_button = document.getElementById("konu_ekle")
                konu_ekle_button.onclick = () =>{
                    konu_ekle_guncelle()
                }
        }
    }
}

function input_alanina_veriler_yerlestir(ders_id,konu_id,soru_sayisi,dogru_sayisi,yanlis_sayisi,dakika){

    ders_adi.value = ders_id
    if(ders_adi.value != null){
        try {
                
            
            let secilen_ders_konulari = dersler[ders_adi.value].Konular
            konu_adi.innerHTML = `<option label="&nbsp;">&nbsp;</option>`

            let konu_sayisi = Object.keys(secilen_ders_konulari).length;
            for(let i = 0;i<konu_sayisi;i++){
                konu_adi.innerHTML += `<option value="${secilen_ders_konulari[Object.keys(secilen_ders_konulari)[i]].KonuID}">${secilen_ders_konulari[Object.keys(secilen_ders_konulari)[i]].KonuYazisi}</option>`                    
            }
            konu_adi.value = konu_id
        } catch (error) {
            konu_adi.innerHTML = ``
        }
    }else if(ders_adi.value == null || ders_adi.value == ' '){
        konu_adi.innerHTML = ``
    }
    konu_adi.value = konu_id
    toplam_soru_sayisi_input.value = parseInt(soru_sayisi)
    dogru_soru_sayisi_input.value = parseInt(dogru_sayisi)
    yanlis_soru_sayisi_input.value = parseInt(yanlis_sayisi)
    dakika_input.value = parseInt(dakika)
}

function konu_ekle_guncelle(){
    if(konu_ekle_button.innerHTML == "Ekle"){
        if(ders_adi.value != null && konu_adi.value != null && toplam_soru_sayisi_input.value != null && dogru_soru_sayisi_input.value != null && yanlis_soru_sayisi_input.value != null && dakika_input.value != null && parseInt( toplam_soru_sayisi_input.value)> 0 && parseInt( dogru_soru_sayisi_input.value) >= 0 && parseInt( yanlis_soru_sayisi_input.value) >= 0 && parseInt( toplam_soru_sayisi_input.value) >= (parseInt( dogru_soru_sayisi_input.value)+parseInt( yanlis_soru_sayisi_input.value)) && parseInt(dakika_input.value) >= 0){            
            let secilen_ders = dersler[ders_adi.value]
            let secilen_konu = secilen_ders.Konular[konu_adi.value]
            soru_takvimi_ekle_POST(tarih_secici.value,parseInt(secilen_ders.DersID),parseInt(secilen_konu.KonuID),parseInt(toplam_soru_sayisi_input.value),parseInt(dogru_soru_sayisi_input.value),parseInt(yanlis_soru_sayisi_input.value),parseInt(dakika_input.value),parseInt(10))
        }
    }else if(konu_ekle_button.innerHTML == "Güncelle"){
        if(ders_adi.value != null && konu_adi.value != null && toplam_soru_sayisi_input.value != null && dogru_soru_sayisi_input.value != null && yanlis_soru_sayisi_input.value != null && dakika_input.value != null  && parseInt( toplam_soru_sayisi_input.value)> 0 && parseInt( dogru_soru_sayisi_input.value) >= 0 && parseInt( yanlis_soru_sayisi_input.value) >= 0 && parseInt( toplam_soru_sayisi_input.value) >= (parseInt( dogru_soru_sayisi_input.value)+parseInt( yanlis_soru_sayisi_input.value)) && parseInt(dakika_input.value) >= 0){            
            let secilen_ders = dersler[ders_adi.value]
            let secilen_konu = secilen_ders.Konular[konu_adi.value]            
            soru_takvimi_guncelle_POST(tarih_secici.value,parseInt(secilen_ders.DersID),parseInt(secilen_konu.KonuID),parseInt(toplam_soru_sayisi_input.value),parseInt(dogru_soru_sayisi_input.value),parseInt(yanlis_soru_sayisi_input.value),parseInt(dakika_input.value),parseInt(10))
        }

    }

    soru_takvimini_guncelle()

}

function konu_sil(){
    
    if(ders_adi.value != null && konu_adi.value != null && ders_adi.value != " " && konu_adi.value != " " && ders_adi.value != "" && konu_adi.value != "" ){            
        let secilen_ders = dersler[ders_adi.value]
        let secilen_konu = secilen_ders.Konular[konu_adi.value]
        soru_takvimi_sil_POST(tarih_secici.value,parseInt(secilen_ders.DersID),parseInt(secilen_konu.KonuID))
        
    }

    soru_takvimini_guncelle()

}

function soru_takvimini_guncelle(){
    let secilenTarih = tarih_secici.value;
        soru_takvimi_ders_rengi = "#fff"
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        let fetch_tarih_format = secilenTarih.split("/").join("-")
        fetch("/soru-takvimi/getir/"+fetch_tarih_format, requestOptions)
        .then(response => response.text())
        .then(result =>  {

            result = JSON.parse(result)
            mevcut_tarihin_soru_takvimi_json = result

            gunluk_ozet_tablo_body.innerHTML = ""
            for(let i = 0 ;i < Object.keys(result).length;i++){
                let mevcut_soru_takvimi = result[i]
                let mevcut_ders = dersler[mevcut_soru_takvimi.ders_id]
                let mevcut_konu = mevcut_ders.Konular[mevcut_soru_takvimi.konu_id]
                tabloya_konu_ekle(mevcut_soru_takvimi.ders_id,mevcut_ders.DersYazisi,mevcut_soru_takvimi.konu_id,mevcut_konu.KonuYazisi,mevcut_soru_takvimi.toplam_soru_sayisi,mevcut_soru_takvimi.dogru_soru_sayisi,mevcut_soru_takvimi.yanlis_soru_sayisi,mevcut_soru_takvimi.dakika)
            }


        })
        .catch(error => console.log('error', error));
}

function kullanici_bilgilerini_yerlestir(isim,soyisim,okul_no){
    document.getElementById("kullanici_adi").innerHTML = isim
    document.getElementById("kullanici_soyadi").innerHTML = soyisim.toUpperCase();
}

setInterval(soru_takviminde_onceden_varsa, 1000);