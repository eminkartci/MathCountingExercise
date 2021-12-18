let gunluk_ozet_tablo_body = document.getElementById("gunluk_ozet_tablo_body")
let konu_ekle_button = document.getElementById("konu_ekle")
let ders_adi = document.getElementById("ders_adi_input")
let konu_adi = document.getElementById("konu_adi_input")
let soru_sayisi = document.getElementById("soru_sayisi_input")
let dogru_sayisi = document.getElementById("dogru_sayisi_input")
let yanlis_sayisi = document.getElementById("yanlis_sayisi_input")

let tarih_secici = document.getElementById("tarih_secici")
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()
tarih_secici.value = date

mevcut_tarihin_soru_takvimi_json = {}
tablodaki_mevcut_soru_takvimi_tr_HTML_array = []

gunluk_ozet_tablo_body.innerHTML = ""
let soru_takvimi_ders_rengi = "#fff"
var requestOptions_1 = {
    method: 'GET',
    redirect: 'follow'
  };
fetch("http://localhost:5006/soru-takvimi/getir/"+date.split("/").join("-"), requestOptions_1)
.then(response => response.text())
.then(result =>  {

    result = JSON.parse(result)
    mevcut_tarihin_soru_takvimi_json = result

    gunluk_ozet_tablo_body.innerHTML = ""
    tablodaki_mevcut_soru_takvimi_tr_HTML_array = []
    for(let i = 0 ;i < Object.keys(result).length;i++){
        let mevcut_soru_takvimi = result[i]
        let mevcut_ders = dersler[mevcut_soru_takvimi.ders_id]
        let mevcut_konu = mevcut_ders.Konular[mevcut_soru_takvimi.konu_id]
        tabloya_konu_ekle(mevcut_ders.DersYazisi,mevcut_konu.KonuYazisi,mevcut_soru_takvimi.toplam_soru_sayisi,mevcut_soru_takvimi.dogru_soru_sayisi,mevcut_soru_takvimi.yanlis_soru_sayisi)
    }


})
.catch(error => console.log('error', error));

// Databaseden alacağımız dersler için dersler değişkenini oluşturuyoruz
let dersler;

var settings = {
    "url": "http://localhost:5006/dersler",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "connect.sid=s%3ACe1E1jk_2_DLE_iszl3bz62Zk6tEaJqK.4KZYfEBs%2FqSOyxqFw1jhWON8AM1g5hrml64eOuY2r00"
    },
  };
  
  $.ajax(settings).done(function (dersler_value) {
      
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

    ders_adi.oninput = () =>{
        if(ders_adi.value != null){
            try {
                    
                
                let secilen_ders_konulari = dersler[ders_adi.value].Konular
                konu_adi.innerHTML = `<option label="&nbsp;">&nbsp;</option>                        
                <optgroup label="Konular">`

                let konu_sayisi = Object.keys(secilen_ders_konulari).length;
                for(let i = 0;i<konu_sayisi;i++){
                    konu_adi.innerHTML += `<option value="${secilen_ders_konulari[Object.keys(secilen_ders_konulari)[i]].KonuID}">${secilen_ders_konulari[Object.keys(secilen_ders_konulari)[i]].KonuYazisi}</option>`                    
                }

                konu_adi.innerHTML += `                      
                    </optgroup>
                `
            } catch (error) {
                konu_adi.innerHTML = ``
            }
            soru_takviminde_onceden_varsa()
        }else if(ders_adi.value == null || ders_adi.value == ' '){
            konu_adi.innerHTML = ``
        }
    }

    konu_adi.oninput = () => {
        soru_takviminde_onceden_varsa()
    }


    konu_ekle_button.onclick = () =>{
        soru_takviminde_onceden_varsa()
        // console.log("ders adi",ders_adi.value)
        // console.log("konu adi",konu_adi.value)
        // console.log("soru_sayisi",soru_sayisi.value)
        // console.log("dogri sayisi",dogru_sayisi.value)
        // console.log("yanlis sayisi",yanlis_sayisi.value)

        if(konu_ekle_button.innerHTML == "Ekle"){
            if(ders_adi.value != null && konu_adi.value != null && soru_sayisi.value != null && dogru_sayisi.value != null && yanlis_sayisi.value != null && parseInt( soru_sayisi.value)> 0 && parseInt( dogru_sayisi.value) >= 0 && parseInt( yanlis_sayisi.value) >= 0 && parseInt( soru_sayisi.value) >= (parseInt( dogru_sayisi.value)+parseInt( yanlis_sayisi.value))){            
                let secilen_ders = dersler[ders_adi.value]
                let secilen_konu = secilen_ders.Konular[konu_adi.value]
                tabloya_konu_ekle(secilen_ders.DersYazisi,secilen_konu.KonuYazisi,soru_sayisi.value,dogru_sayisi.value,yanlis_sayisi.value)
                soru_takvimi_ekle_POST(tarih_secici.value,parseInt(secilen_ders.DersID),parseInt(secilen_konu.KonuID),parseInt(soru_sayisi.value),parseInt(dogru_sayisi.value),parseInt(yanlis_sayisi.value),parseInt(10))
            }
        }else if(konu_ekle_button.innerHTML == "Güncelle"){
            if(ders_adi.value != null && konu_adi.value != null && soru_sayisi.value != null && dogru_sayisi.value != null && yanlis_sayisi.value != null && parseInt( soru_sayisi.value)> 0 && parseInt( dogru_sayisi.value) >= 0 && parseInt( yanlis_sayisi.value) >= 0 && parseInt( soru_sayisi.value) >= (parseInt( dogru_sayisi.value)+parseInt( yanlis_sayisi.value))){            
                let secilen_ders = dersler[ders_adi.value]
                let secilen_konu = secilen_ders.Konular[konu_adi.value]
                tabloya_konu_guncelle(secilen_ders.DersYazisi,secilen_konu.KonuYazisi,soru_sayisi.value,dogru_sayisi.value,yanlis_sayisi.value)
                soru_takvimi_guncelle_POST(tarih_secici.value,parseInt(secilen_ders.DersID),parseInt(secilen_konu.KonuID),parseInt(soru_sayisi.value),parseInt(dogru_sayisi.value),parseInt(yanlis_sayisi.value),parseInt(10))
            }
        }
    }

    tarih_secici.oninput = () => {
        soru_takviminde_onceden_varsa()
        let secilenTarih = tarih_secici.value;
        soru_takvimi_ders_rengi = "#fff"
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        let fetch_tarih_format = secilenTarih.split("/").join("-")
        fetch("http://localhost:5006/soru-takvimi/getir/"+fetch_tarih_format, requestOptions)
        .then(response => response.text())
        .then(result =>  {

            result = JSON.parse(result)
            mevcut_tarihin_soru_takvimi_json = result

            gunluk_ozet_tablo_body.innerHTML = ""
            tablodaki_mevcut_soru_takvimi_tr_HTML_array = []
            for(let i = 0 ;i < Object.keys(result).length;i++){
                let mevcut_soru_takvimi = result[i]
                let mevcut_ders = dersler[mevcut_soru_takvimi.ders_id]
                let mevcut_konu = mevcut_ders.Konular[mevcut_soru_takvimi.konu_id]
                tabloya_konu_ekle(mevcut_ders.DersYazisi,mevcut_konu.KonuYazisi,mevcut_soru_takvimi.toplam_soru_sayisi,mevcut_soru_takvimi.dogru_soru_sayisi,mevcut_soru_takvimi.yanlis_soru_sayisi)
            }


        })
        .catch(error => console.log('error', error));

        
    }



})

function tabloya_konu_ekle(ders_adi,konu_adi,soru_sayisi,dogru_sayisi,yanlis_sayisi){
    let content = `
    
    <tr role="row" class="odd" style="display:flex;min-height:50px;justify-content:center;align-items:center;background:${soru_takvimi_ders_rengi}">
        <td style="width:20%" tabindex="0">
            <p class="list-item-heading" style="text-align:center">${ders_adi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${konu_adi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${soru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${dogru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${yanlis_sayisi}</p>
        </td>
    </tr>

    `
    gunluk_ozet_tablo_body.innerHTML += content
    tablodaki_mevcut_soru_takvimi_tr_HTML_array.push(content)


    if(soru_takvimi_ders_rengi != "#fff"){
        soru_takvimi_ders_rengi= "#fff"
    }else{
        soru_takvimi_ders_rengi= "#f8f8f8"
    }
}

function tabloya_konu_guncelle(ders_adi,konu_adi,soru_sayisi,dogru_sayisi,yanlis_sayisi){

    gunluk_ozet_tablo_body.innerHTML  = "" 
    soru_takvimi_ders_rengi = "#fff"
    for(let i = 0;i<tablodaki_mevcut_soru_takvimi_tr_HTML_array.length;i++){
        let mevcut_soru_takvimi_tr_HTML = tablodaki_mevcut_soru_takvimi_tr_HTML_array[i]
        if(mevcut_soru_takvimi_tr_HTML.includes(ders_adi) && mevcut_soru_takvimi_tr_HTML.includes(konu_adi) ){
            mevcut_soru_takvimi_tr_HTML = `
    
            <tr role="row" class="odd" style="display:flex;min-height:50px;justify-content:center;align-items:center;background:${soru_takvimi_ders_rengi}">
                <td style="width:20%" tabindex="0">
                    <p class="list-item-heading" style="text-align:center">${ders_adi}</p>
                </td>
                <td style="width:20%">
                    <p class="text-muted" style="text-align:center">${konu_adi}</p>
                </td>
                <td style="width:20%">
                    <p class="text-muted" style="text-align:center">${soru_sayisi}</p>
                </td>
                <td style="width:20%">
                    <p class="text-muted" style="text-align:center">${dogru_sayisi}</p>
                </td>
                <td style="width:20%">
                    <p class="text-muted" style="text-align:center">${yanlis_sayisi}</p>
                </td>
            </tr>
        
            `

            tablodaki_mevcut_soru_takvimi_tr_HTML_array[i] = mevcut_soru_takvimi_tr_HTML
            gunluk_ozet_tablo_body.innerHTML += mevcut_soru_takvimi_tr_HTML
        }else{
            gunluk_ozet_tablo_body.innerHTML += mevcut_soru_takvimi_tr_HTML
        }
        if(soru_takvimi_ders_rengi != "#fff"){
            soru_takvimi_ders_rengi= "#fff"
        }else{
            soru_takvimi_ders_rengi= "#f8f8f8"
        }
    }



    if(gunluk_ozet_tablo_body.innerHTML.includes("ders_adi"))
    gunluk_ozet_tablo_body.innerHTML += `
    
    <tr role="row" class="odd" style="display:flex;min-height:50px;justify-content:center;align-items:center;background:${soru_takvimi_ders_rengi}">
        <td style="width:20%" tabindex="0">
            <p class="list-item-heading" style="text-align:center">${ders_adi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${konu_adi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${soru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${dogru_sayisi}</p>
        </td>
        <td style="width:20%">
            <p class="text-muted" style="text-align:center">${yanlis_sayisi}</p>
        </td>
    </tr>

    `
}

function soru_takvimi_ekle_POST(tarih,ders_id,konu_id,toplam_soru_sayisi,dogru_soru_sayisi,yanlis_soru_sayisi,kisisel_degerlendirme){

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
    "url": `http://localhost:5006/soru-takvimi/ekle?tarih=${tarih}&ders_id=${ders_id}&konu_id=${konu_id}&toplam_soru_sayisi=${toplam_soru_sayisi}&dogru_soru_sayisi=${dogru_soru_sayisi}&yanlis_soru_sayisi=${yanlis_soru_sayisi}&kisisel_degerlendirme=${kisisel_degerlendirme}`,
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

function soru_takvimi_guncelle_POST(tarih,ders_id,konu_id,toplam_soru_sayisi,dogru_soru_sayisi,yanlis_soru_sayisi,kisisel_degerlendirme){

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
    "url": `http://localhost:5006/soru-takvimi/guncelle?tarih=${tarih}&ders_id=${ders_id}&konu_id=${konu_id}&toplam_soru_sayisi=${toplam_soru_sayisi}&dogru_soru_sayisi=${dogru_soru_sayisi}&yanlis_soru_sayisi=${yanlis_soru_sayisi}&kisisel_degerlendirme=${kisisel_degerlendirme}`,
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

function soru_takviminde_onceden_varsa(){
    if(ders_adi.value != null && konu_adi.value != null && soru_sayisi.value != null && dogru_sayisi.value != null && yanlis_sayisi.value != null ){
        for(let i = 0;i<Object.keys(mevcut_tarihin_soru_takvimi_json).length;i++){
            if(mevcut_tarihin_soru_takvimi_json[i].tarih == tarih_secici.value && mevcut_tarihin_soru_takvimi_json[i].ders_id == ders_adi.value && mevcut_tarihin_soru_takvimi_json[i].konu_id == konu_adi.value ){
                konu_ekle_button.innerHTML = "Güncelle"
                break;
            }else{
                konu_ekle_button.innerHTML = "Ekle"
            }
        }
    }
}