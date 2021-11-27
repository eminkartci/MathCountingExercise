
/////////////// EXPORT ////////////////

import {Ders} from './Ders';
import {Konu} from './Konu';
import {Soru} from './Soru';
import {SoruTipi} from './SoruTipi';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './Database';


/////////////// DERSLER ///////////////
export let matematik   = new Ders("matematik","Matematik")
export let turkce      = new Ders("turkce","Türkçe")
export let fizik       = new Ders("fizik","Fizik")
export let kimya       = new Ders("kimya","Kimya")
export let biyoloji    = new Ders("biyoloji","Biyoloji")
export let tarih       = new Ders("tarih","Tarih")

export let dersler = [matematik,turkce,fizik,kimya,biyoloji,tarih]


/////////////// KONULAR ///////////////

export  let yas_problemi    = new Konu(matematik,"yas-problemi","Yaş Problemi")
yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.|isim| 'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",{"isim":"name-kiz","sayi1":[1,5,1],"sayi2":[1,5,1],"sayi3":[1,5,1]},["30","28","15","1"],"|sayi1|+|sayi2|*|sayi3|")
matematik.add_Konu(yas_problemi)

export  let yazim_kurallari = new Konu(turkce,"yazim-kurallari","Yazım Kuralları")
yazim_kurallari.soru_tipi_olustur("Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",{"cevap":"yazim-hatali-cumle"},["yazim-hatasiz-cumle","yazim-hatasiz-cumle","yazim-hatasiz-cumle","yazim-hatasiz-cumle","yazim-hatasiz-cumle"],"|cevap|")
turkce.add_Konu(yazim_kurallari)

export  let hareket_hiz     = new Konu(fizik,"hareket-hiz","Hareket Hız")
hareket_hiz.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hızı kaç km/h'tir?",{"isim1":"name-erkek","isim2":"name-ince","sayi1":[1,10,10],"sayi2":[5,15,10]},["30","28","15","1"],"|sayi1|+|sayi2|")
fizik.add_Konu(hareket_hiz)

export  let katli_oranlar_kanunu = new Konu(kimya,"katli-oranlar-kanunu","Katlı Oranlar Kanunu")
katli_oranlar_kanunu.soru_tipi_olustur("Aşağıda verilen bileşiklerin hangilerinin arasında katlı oranlar kanunu uygulanamaz?",{"cevap":"H"+"2".sub()+"O-H"+"2".sub()+"O"+"2".sub()},["katli-oranlar-uygulanabilir-bilesikleri","katli-oranlar-uygulanabilir-bilesikleri","katli-oranlar-uygulanabilir-bilesikleri","katli-oranlar-uygulanabilir-bilesikleri"],"|cevap|")
kimya.add_Konu(katli_oranlar_kanunu)

export  let mitoz_bolunme = new Konu(biyoloji,"mitoz-bolunme","Mitoz Bölünme")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde kromozomlar ortaya dizilmiş halde bulunur?",{"cevap":"Metafaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
biyoloji.add_Konu(mitoz_bolunme)

// export  let ilk_turk_beylikleri = new Konu(tarih,"ilk-turk-beylikleri","İlk Türk Beylikleri")
// ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
// tarih.add_Konu(ilk_turk_beylikleri)

export let konular = [yas_problemi,yazim_kurallari,hareket_hiz,katli_oranlar_kanunu,mitoz_bolunme]



/////////////// SORULAR ///////////////
// export  let matematik_sorusu       = new Soru(matematik,yas_problemi)
// export  let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
// export  let fizik_sorusu        = new Soru(fizik,hareket_hiz)
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

console.log("")
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