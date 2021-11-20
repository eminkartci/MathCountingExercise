console.log("Hello Soru")

function soru_getir(){
    let endpoint = "http://localhost:5006/matematik/yas-problemi";

    fetch(endpoint).then(res => res.json()).then(soru => {
        // console.log("SORU: ", soru)
        soru_yazdir(soru)
    })
}

function soru_yazdir(soru){
    let ders_adi = document.getElementById("ders_adi");
    let konu_adi = document.getElementById("konu_adi");
    let soru_yazisi = document.getElementById("soru_yazisi");
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");
    let option5 = document.getElementById("option5");

    ders_adi.innerHTML = soru.Ders.DersYazisi
    konu_adi.innerHTML = soru.Konu.KonuYazisi
    soru_yazisi.innerHTML = soru.SoruYazisi
    option1.innerHTML = soru.Siklar[1-1]
    option2.innerHTML = soru.Siklar[2-1]
    option3.innerHTML = soru.Siklar[3-1]
    option4.innerHTML = soru.Siklar[4-1]
    option5.innerHTML = soru.Siklar[5-1]
}

soru_getir()