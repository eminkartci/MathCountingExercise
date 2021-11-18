"use strict";
/////////////// EXPORT ////////////////
exports.__esModule = true;
var Ders_js_1 = require("./Ders.js");
var Konu_js_1 = require("./Konu.js");
var Soru_js_1 = require("./Soru.js");
/////////////// DERSLER ///////////////
var matematik = new Ders_js_1.Ders("Matematik");
var turkce = new Ders_js_1.Ders("Türkçe");
var fizik = new Ders_js_1.Ders("Fizik");
var kimya = new Ders_js_1.Ders("Kimya");
var biyoloji = new Ders_js_1.Ders("Biyoloji");
var tarih = new Ders_js_1.Ders("Tarih");
/////////////// KONULAR ///////////////
var yas_problemi = new Konu_js_1.Konu(matematik, "Yaş Problemi");
yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.|isim| 'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?", { "isim": "name-kiz", "sayi1": [1, 5, 1], "sayi2": [1, 5, 1], "sayi3": [1, 5, 1] }, ["30", "28", "15", "1"], "|sayi1|+|sayi2|*|sayi3|");
matematik.add_Konu(yas_problemi);
// let yazim_kurallari = new Konu(turkce,"Yazım Kuralları")
// yazim_kurallari.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Emin"],["10","11","8","7"])
// turkce.add_Konu(yazim_kurallari)
var hareket_hiz = new Konu_js_1.Konu(fizik, "Hareket-Hız");
hareket_hiz.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hızı kaç km/h'tir?", { "isim1": "name-erkek", "isim2": "name-ince", "sayi1": [1, 10, 10], "sayi2": [5, 15, 10] }, ["30", "28", "15", "1"], "|sayi1|+|sayi2|");
fizik.add_Konu(hareket_hiz);
// let sabit_oranlar_kanunu = new Konu(kimya,"Sabit Oranlar Kanunu")
// sabit_oranlar_kanunu.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hızı kaç km/h'tir?",{"isim1":"name-erkek","isim2":"name-ince","sayi1":[1,10,10],"sayi2":[5,15,10]},["30","28","15","1"],"|sayi1|+|sayi2|")
// kimya.add_Konu(sabit_oranlar_kanunu)
// let mitoz_bolunme = new Konu(biyoloji,"Mitoz Bölünme")
// mitoz_bolunme.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Mehmet"],["10","11","8","7"])
// biyoloji.add_Konu(mitoz_bolunme)
// let ilk_turk_beylikleri = new Konu(tarih,"İlk Türk Beylikleri")
// ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
// tarih.add_Konu(ilk_turk_beylikleri)
/////////////// SORULAR ///////////////
var matematik_sorusu = new Soru_js_1.Soru(matematik, yas_problemi);
// let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
var fizik_sorusu = new Soru_js_1.Soru(fizik, hareket_hiz);
// let kimya_sorusu        = new Soru(kimya,sabit_oranlar_kanunu)
// let biyoloji_sorusu     = new Soru(biyoloji,mitoz_bolunme)
// let tarih_sorusu        = new Soru(tarih,ilk_turk_beylikleri)
// console.log("/*-------------------------------------*\\")
// console.log("")
// console.log("MATEMATİK KONULAR : " , matematik.get_Konular())
// console.log("TÜRKÇE    KONULAR : " , turkce.get_Konular())
// console.log("FİZİK     KONULAR : " , fizik.get_Konular())
// console.log("KİMYA     KONULAR : " , kimya.get_Konular())
// console.log("BİYOLOJİ  KONULAR : " , biyoloji.get_Konular())
// console.log("TARİH     KONULAR : " , tarih.get_Konular())
// console.log("")
// console.log("/*-------------------------------------*\\")
// console.log("")
// console.log("/*-------------------------------------*\\")
console.log("");
console.log("-----------MATEMATİK------------");
console.log(matematik_sorusu.toString());
console.log("");
console.log("-----------FİZİK ------------");
console.log(fizik_sorusu.toString());
// console.log("-----------KİMYA ------------")
// console.log("Soru: \n" , fizik_sorusu.get_SoruYazisi())
// console.log("A) " , fizik_sorusu.get_Siklar_index(0))
// console.log("B) " , fizik_sorusu.get_Siklar_index(1))
// console.log("C) " , fizik_sorusu.get_Siklar_index(2))
// console.log("D) " , fizik_sorusu.get_Siklar_index(3))
// console.log("Cevap : \n",fizik_sorusu.get_Cevap())
// console.log("TÜRKÇE    SORUSU : " , turkce_sorusu)
// console.log("FİZİK     SORUSU : " , fizik_sorusu)
// console.log("KİMYA     SORUSU : " , kimya_sorusu)
// console.log("BİYOLOJİ  SORUSU : " , biyoloji_sorusu)
// console.log("TARİH     SORUSU : " , tarih_sorusu)
// console.log("")
// console.log("/*-------------------------------------*\\")
