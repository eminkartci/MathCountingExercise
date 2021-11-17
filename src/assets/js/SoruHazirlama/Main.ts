
/////////////// DERSLER ///////////////
let matematik   = new Ders("Matematik")
let turkce      = new Ders("Türkçe")
let fizik       = new Ders("Fizik")
let kimya       = new Ders("Kimya")
let biyoloji    = new Ders("Biyoloji")
let tarih       = new Ders("Tarih")


/////////////// KONULAR ///////////////

let yas_problemi    = new Konu(matematik,"Yaş Problemi")
matematik.add_Konu(yas_problemi)

let yazim_kurallari = new Konu(turkce,"Yazım Kuralları")
turkce.add_Konu(yazim_kurallari)

let hareket_hiz     = new Konu(fizik,"Hareket-Hız")
fizik.add_Konu(hareket_hiz)

let sabit_oranlar_kanunu = new Konu(kimya,"Sabit Oranlar Kanunu")
kimya.add_Konu(sabit_oranlar_kanunu)

let mitoz_bolunme = new Konu(biyoloji,"Mitoz Bölünme")
biyoloji.add_Konu(mitoz_bolunme)

let ilk_turk_beylikleri = new Konu(tarih,"İlk Türk Beylikleri")
tarih.add_Konu(ilk_turk_beylikleri)


console.log("/*-------------------------------------*\\")
console.log("")
console.log("MATEMATİK KONULAR : " , matematik.get_Konular())
console.log("TÜRKÇE    KONULAR : " , turkce.get_Konular())
console.log("FİZİK     KONULAR : " , fizik.get_Konular())
console.log("KİMYA     KONULAR : " , kimya.get_Konular())
console.log("BİYOLOJİ  KONULAR : " , biyoloji.get_Konular())
console.log("TARİH     KONULAR : " , tarih.get_Konular())
console.log("")
console.log("/*-------------------------------------*\\")

/////////////// SORULAR ///////////////

let matematik_sorusu    = new Soru(matematik,yas_problemi)
let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
let fizik_sorusu        = new Soru(fizik,hareket_hiz)
let kimya_sorusu        = new Soru(kimya,sabit_oranlar_kanunu)
let biyoloji_sorusu     = new Soru(biyoloji,mitoz_bolunme)
let tarih_sorusu        = new Soru(tarih,ilk_turk_beylikleri)


console.log("/*-------------------------------------*\\")
console.log("")
console.log("MATEMATİK SORUSU : " , matematik_sorusu)
console.log("TÜRKÇE    SORUSU : " , turkce_sorusu)
console.log("FİZİK     SORUSU : " , fizik_sorusu)
console.log("KİMYA     SORUSU : " , kimya_sorusu)
console.log("BİYOLOJİ  SORUSU : " , biyoloji_sorusu)
console.log("TARİH     SORUSU : " , tarih_sorusu)
console.log("")
console.log("/*-------------------------------------*\\")
