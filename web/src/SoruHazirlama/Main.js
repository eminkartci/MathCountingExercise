"use strict";
/////////////// EXPORT ////////////////
exports.__esModule = true;
exports.biyoloji_sorusu = exports.kimya_sorusu = exports.fizik_sorusu = exports.turkce_sorusu = exports.matematik_sorusu = exports.mitoz_bolunme = exports.katli_oranlar_kanunu = exports.hareket_hiz = exports.yazim_kurallari = exports.yas_problemi = exports.dersler = exports.tarih = exports.biyoloji = exports.kimya = exports.fizik = exports.turkce = exports.matematik = void 0;
var Ders_1 = require("./Ders");
var Konu_1 = require("./Konu");
var Soru_1 = require("./Soru");
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
exports.hareket_hiz = new Konu_1.Konu(exports.fizik, "hareket-hiz", "Hareket Hız");
exports.hareket_hiz.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hızı kaç km/h'tir?", { "isim1": "name-erkek", "isim2": "name-ince", "sayi1": [1, 10, 10], "sayi2": [5, 15, 10] }, ["30", "28", "15", "1"], "|sayi1|+|sayi2|");
exports.fizik.add_Konu(exports.hareket_hiz);
exports.katli_oranlar_kanunu = new Konu_1.Konu(exports.kimya, "katli-oranlar-kanunu", "Katlı Oranlar Kanunu");
exports.katli_oranlar_kanunu.soru_tipi_olustur("Aşağıda verilen bileşiklerin hangilerinin arasında katlı oranlar kanunu uygulanamaz", { "cevap": "H" + "2".sub() + "O-H" + "2".sub() + "O" + "2".sub() }, ["katli-oranlar-uygulanabilir-bilesikleri", "katli-oranlar-uygulanabilir-bilesikleri", "katli-oranlar-uygulanabilir-bilesikleri", "katli-oranlar-uygulanabilir-bilesikleri"], "|cevap|");
exports.kimya.add_Konu(exports.katli_oranlar_kanunu);
exports.mitoz_bolunme = new Konu_1.Konu(exports.biyoloji, "mitoz-bolunme", "Mitoz Bölünme");
exports.mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde kromozomlar ortaya dizilmiş halde bulunur", { "cevap": "Metafaz" }, ["mitoz-evre", "mitoz-evre", "mitoz-evre", "mitoz-evre"], "|cevap|");
exports.biyoloji.add_Konu(exports.mitoz_bolunme);
// export  let ilk_turk_beylikleri = new Konu(tarih,"ilk-turk-beylikleri","İlk Türk Beylikleri")
// ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
// tarih.add_Konu(ilk_turk_beylikleri)
/////////////// SORULAR ///////////////
exports.matematik_sorusu = new Soru_1.Soru(exports.matematik, exports.yas_problemi);
exports.turkce_sorusu = new Soru_1.Soru(exports.turkce, exports.yazim_kurallari);
exports.fizik_sorusu = new Soru_1.Soru(exports.fizik, exports.hareket_hiz);
exports.kimya_sorusu = new Soru_1.Soru(exports.kimya, exports.katli_oranlar_kanunu);
exports.biyoloji_sorusu = new Soru_1.Soru(exports.biyoloji, exports.mitoz_bolunme);
// export  let tarih_sorusu        = new Soru(tarih,ilk_turk_beylikleri)
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
console.log("-----------MATEMATİK ------------");
console.log(exports.matematik_sorusu.toString());
console.log("");
console.log("-----------FİZİK ------------");
console.log(exports.fizik_sorusu.toString());
console.log("");
console.log("-----------BİYOLOJİ------------");
console.log(exports.biyoloji_sorusu.toString());
console.log("");
console.log("-----------KİMYA ------------");
console.log(exports.kimya_sorusu.toString());
console.log("");
// console.log("-----------TARİH ------------")
// console.log(tarih_sorusu.toString())
console.log("");
console.log("-----------TURKCE------------");
console.log(exports.turkce_sorusu.toString());
