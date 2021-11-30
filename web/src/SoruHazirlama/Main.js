"use strict";
/////////////// EXPORT ////////////////
exports.__esModule = true;
exports.konular = exports.mitoz_bolunme = exports.katli_oranlar_kanunu = exports.elektrik_manyetizma = exports.yazim_kurallari = exports.yas_problemi = exports.dersler = exports.tarih = exports.biyoloji = exports.kimya = exports.fizik = exports.turkce = exports.matematik = void 0;
var Ders_1 = require("./Ders");
var Konu_1 = require("./Konu");
var Soru_1 = require("./Soru");
var Test_1 = require("./Test");
/////////////// DERSLER ///////////////
exports.matematik = new Ders_1.Ders("matematik", "Matematik");
exports.turkce = new Ders_1.Ders("turkce", "Türkçe");
exports.fizik = new Ders_1.Ders("fizik", "Fizik");
exports.kimya = new Ders_1.Ders("kimya", "Kimya");
exports.biyoloji = new Ders_1.Ders("biyoloji", "Biyoloji");
exports.tarih = new Ders_1.Ders("tarih", "Tarih");
exports.dersler = [exports.matematik, exports.turkce, exports.fizik, exports.kimya, exports.biyoloji, exports.tarih];
/////////////// KONULAR ///////////////
exports.yas_problemi = new Konu_1.Konu(exports.matematik, "yas-problemi", "Yaş Problemi");
exports.yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.|isim| 'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?", { "isim": "name-kiz", "sayi1": [1, 5, 1], "sayi2": [1, 5, 1], "sayi3": [1, 5, 1] }, ["30", "28", "15", "1"], "|sayi1|+|sayi2|*|sayi3|");
exports.matematik.add_Konu(exports.yas_problemi);
exports.yazim_kurallari = new Konu_1.Konu(exports.turkce, "yazim-kurallari", "Yazım Kuralları");
exports.yazim_kurallari.soru_tipi_olustur("Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?", { "cevap": "yazim-hatali-cumle" }, ["yazim-hatasiz-cumle", "yazim-hatasiz-cumle", "yazim-hatasiz-cumle", "yazim-hatasiz-cumle", "yazim-hatasiz-cumle"], "|cevap|");
exports.turkce.add_Konu(exports.yazim_kurallari);
exports.elektrik_manyetizma = new Konu_1.Konu(exports.fizik, "elektrik-manyetizma", "Elektrik - Manyetizma");
exports.elektrik_manyetizma.soru_tipi_olustur("Yarıçap uzunluğu |yaricap| cm , uzunluğu |uzunluk| cm olan bir telin direnci kaç ohm'dur?\n(π=3)", { "yaricap": [1, 5, 1], "uzunluk": [1, 5, "|yaricap|*|yaricap|*3"] }, ["", "", "", "", ""], "|uzunluk|/(3*|yaricap|*|yaricap|)");
exports.fizik.add_Konu(exports.elektrik_manyetizma);
exports.katli_oranlar_kanunu = new Konu_1.Konu(exports.kimya, "katli-oranlar-kanunu", "Katlı Oranlar Kanunu");
exports.katli_oranlar_kanunu.soru_tipi_olustur("Aşağıda verilen bileşiklerin hangilerinin arasında katlı oranlar kanunu uygulanamaz?", { "cevap": "H" + "2".sub() + "O-H" + "2".sub() + "O" + "2".sub() }, ["katli-oranlar-uygulanabilir-bilesikleri", "katli-oranlar-uygulanabilir-bilesikleri", "katli-oranlar-uygulanabilir-bilesikleri", "katli-oranlar-uygulanabilir-bilesikleri"], "|cevap|");
exports.kimya.add_Konu(exports.katli_oranlar_kanunu);
exports.mitoz_bolunme = new Konu_1.Konu(exports.biyoloji, "mitoz-bolunme", "Mitoz Bölünme");
exports.mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde kromozomlar ortaya dizilmiş halde bulunur?", { "cevap": "Metafaz" }, ["mitoz-evre", "mitoz-evre", "mitoz-evre", "mitoz-evre"], "|cevap|");
exports.biyoloji.add_Konu(exports.mitoz_bolunme);
// export  let ilk_turk_beylikleri = new Konu(tarih,"ilk-turk-beylikleri","İlk Türk Beylikleri")
// ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
// tarih.add_Konu(ilk_turk_beylikleri)
exports.konular = [exports.yas_problemi, exports.yazim_kurallari, exports.elektrik_manyetizma, exports.katli_oranlar_kanunu, exports.mitoz_bolunme];
/////////////// SORULAR ///////////////
// export  let matematik_sorusu       = new Soru(matematik,yas_problemi)
// export  let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
// export  let fizik_sorusu        = new Soru(fizik,elektrik_manyetizma)
// export  let kimya_sorusu        = new Soru(kimya,katli_oranlar_kanunu)
// export  let biyoloji_sorusu     = new Soru(biyoloji,mitoz_bolunme)
// // export  let tarih_sorusu        = new Soru(tarih,ilk_turk_beylikleri)
// export let sorular = [matematik_sorusu,turkce_sorusu,fizik_sorusu,kimya_sorusu,biyoloji_sorusu]
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
console.log("");
// console.log("-----------MATEMATİK ------------")
// console.log(matematik_sorusu.toString())
// console.log("")
// console.log("-----------FİZİK ------------")
// console.log(fizik_sorusu.toString())
// console.log("")
// console.log("-----------BİYOLOJİ------------")
// console.log(biyoloji_sorusu.toString())
// console.log("")
// console.log("-----------KİMYA ------------")
// console.log(kimya_sorusu.toString())
// console.log("")
// console.log("-----------TARİH ------------")
// console.log(tarih_sorusu.toString())
// console.log("")
// console.log("-----------TURKCE------------")
// console.log(turkce_sorusu.toString())
var SORU_SAYISI = 100;
var fizik_test = new Test_1.Test("Elektrik ve Manyetizma - 10. Sınıf Fizik");
for (var i = 0; i < SORU_SAYISI; i++) {
    var temp_soru = new Soru_1.Soru(exports.fizik, exports.elektrik_manyetizma);
    fizik_test.soru_ekle(temp_soru);
}
console.log(fizik_test.toString());
