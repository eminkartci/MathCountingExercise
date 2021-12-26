
/////////////// EXPORT ////////////////

import {Ders} from './Ders';
import {Konu} from './Konu';
import {Soru} from './Soru';
import {Test} from './Test';
import {SoruTipi} from './SoruTipi';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './Database';

                                                      
/////////////// DERSLER ///////////////
export let matematik   = new Ders("0","matematik","Matematik")
export let turkce      = new Ders("1","turkce","Türkçe")
export let fizik       = new Ders("2","fizik","Fizik")
export let kimya       = new Ders("3","kimya","Kimya")
export let biyoloji    = new Ders("4","biyoloji","Biyoloji")
export let tarih       = new Ders("5","tarih","Tarih")
export let cografya       = new Ders("5","cografya","Coğrafya")



/////////////// KONULAR ///////////////

export  let yas_problemi    = new Konu("0",matematik,"yas-problemi","Yaş Problemi")
yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.|isim| 'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",{"isim":"name-kiz","sayi1":[1,5,1],"sayi2":[1,5,1],"sayi3":[1,5,1]},["30","28","15","1"],"|sayi1|+|sayi2|*|sayi3|")
matematik.add_Konu(yas_problemi)

export  let olasilik    = new Konu("6",matematik,"olasilik","Olasılık")
olasilik.soru_tipi_olustur(

    "*|isim| , |zar-sayisi| madeni parayı aynı anda atıyor. Buna göre yere düşen paraların |tura-sayisi| tanesinin tura gelme olasılığı yüzde kaçtır ?",
    {"isim":"name-erkek","zar-sayisi":[1,6,1],"tura-sayisi":[1,"|zar-sayisi|",1]},
    ["30","28","15","1"],
    " (1) /(2*|zar-sayisi|)*100"
    
)

olasilik.soru_tipi_olustur(

    "*|isim| , |zar-sayisi| madeni parayı aynı anda atıyor. Buna göre yere düşen paraların |tura-sayisi| tanesinin tura gelme olasılığı yüzde kaçtır ?",
    {"isim":"name-kiz","zar-sayisi":[1,6,1],"tura-sayisi":[1,"|zar-sayisi|",1]},
    ["30","28","15","1"],
    " (1) /(2*|zar-sayisi|)*100"
    
)

olasilik.soru_tipi_olustur(

    "*|isim| , |zar-sayisi| madeni parayı aynı anda atıyor. Buna göre yere düşen paraların |yazi-sayisi| tanesinin yazı gelme olasılığı yüzde kaçtır ?",
    {"isim":"name-kiz","zar-sayisi":[1,6,1],"yazi-sayisi":[1,"|zar-sayisi|",1]},
    ["30","28","15","1"],
    " (1) /(2*|zar-sayisi|)*100"
    
)

olasilik.soru_tipi_olustur(

    "*|isim| , |zar-sayisi| madeni parayı aynı anda atıyor. Buna göre yere düşen paraların |yazi-sayisi| tanesinin yazı gelme olasılığı yüzde kaçtır ?",
    {"isim":"name-erkek","zar-sayisi":[1,6,1],"yazi-sayisi":[1,"|zar-sayisi|",1]},
    ["30","28","15","1"],
    " (1) /(2*|zar-sayisi|)*100"
    
)

olasilik.soru_tipi_olustur(

    "*Bir torbada |sol-mavi-sayi| adet mavi top, |sol-yesil-sayi| adet yeşil top ; diğer torbada ise |sag-mavi-sayi| adet mavi top , |sag-yesil-sayi| adet top vardır. Bu iki torbadan rastgele bir torba seçiliyor ve seçilen torbadan rastgele bir top seçiliyor.Buna göre seçilen topun mavi olma olasılığı kaçtır?",
    {"sol-mavi-sayi":[1,5,1],"sol-yesil-sayi":[1,5,1],"sag-mavi-sayi":[1,5,1],"sag-yesil-sayi":[1,5,1]},
    ["30","28","15","1"],
    "(|sol-mavi-sayi|+|sag-mavi-sayi|)/(|sol-mavi-sayi|+|sag-mavi-sayi|+|sol-yesil-sayi|+|sag-yesil-sayi|)"
    
)

olasilik.soru_tipi_olustur(

    "*Bir torbada |sol-mavi-sayi| adet mavi top, |sol-yesil-sayi| adet yeşil top ; diğer torbada ise |sag-mavi-sayi| adet mavi top , |sag-yesil-sayi| adet top vardır. Bu iki torbadan rastgele bir torba seçiliyor ve seçilen torbadan rastgele bir top seçiliyor.Buna göre seçilen topun yeşil olma olasılığı kaçtır?",
    {"sol-mavi-sayi":[1,5,1],"sol-yesil-sayi":[1,5,1],"sag-mavi-sayi":[1,5,1],"sag-yesil-sayi":[1,5,1]},
    ["30","28","15","1"],
    "(|sol-yesil-sayi|+|sag-yesil-sayi|)/(|sol-mavi-sayi|+|sag-mavi-sayi|+|sol-yesil-sayi|+|sag-yesil-sayi|)"
    
)

olasilik.soru_tipi_olustur(

    "Bir zar arka arkaya |atilma-sayisi| kez atılıyor.Buna göre arka arkaya |arka-arkaya-gelme-sayisi| kez aynı sayı gelme olasılığı kaçtır?",
    {"atilma-sayisi":[2,10,1],"arka-arkaya-gelme-sayisi":[1,"(|atilma-sayisi| - 1)",1]},
    ["30","28","15","1"],
    "(1/|atilma-sayisi|)**(|arka-arkaya-gelme-sayisi|)"
    
)

matematik.add_Konu(olasilik)

export  let yazim_kurallari = new Konu("1",turkce,"yazim-kurallari","Yazım Kuralları")
yazim_kurallari.soru_tipi_olustur("Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",{"cevap":"yazim-hatali-cumle"},["yazim-hatasiz-cumle","yazim-hatasiz-cumle","yazim-hatasiz-cumle","yazim-hatasiz-cumle","yazim-hatasiz-cumle"],"|cevap|")
turkce.add_Konu(yazim_kurallari)

export let elektrik_manyetizma = new Konu("2",fizik,"elektrik-manyetizma","Elektrik - Manyetizma")
elektrik_manyetizma.soru_tipi_olustur("Yarıçap uzunluğu |yaricap| cm , uzunluğu |uzunluk| cm olan bir telin direnci kaç ohm'dur?\n(π=3)",{"yaricap":[1,5,1],"uzunluk":[1,5,"|yaricap|*|yaricap|*3"]},["","","","",""],"|uzunluk|/(3*|yaricap|*|yaricap|)")
fizik.add_Konu(elektrik_manyetizma)

export  let katli_oranlar_kanunu = new Konu("3",kimya,"katli-oranlar-kanunu","Katlı Oranlar Kanunu")
katli_oranlar_kanunu.soru_tipi_olustur("Aşağıda verilen bileşiklerin hangilerinin arasında katlı oranlar kanunu uygulanamaz?",{"cevap":"H"+"2".sub()+"O-H"+"2".sub()+"O"+"2".sub()},["katli-oranlar-uygulanabilir-bilesikleri","katli-oranlar-uygulanabilir-bilesikleri","katli-oranlar-uygulanabilir-bilesikleri","katli-oranlar-uygulanabilir-bilesikleri"],"|cevap|")
kimya.add_Konu(katli_oranlar_kanunu)

export  let mitoz_bolunme = new Konu("4",biyoloji,"mitoz-bolunme","Mitoz Bölünme")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde kromozomlar ortaya dizilmiş halde bulunur?",{"cevap":"Metafaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde çekirdek zarı erimeye başlar?",{"cevap":"Profaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde çekirdek zarı üretilmeye?",{"cevap":"Telofaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde DNA eşlenir?",{"cevap":"İnterfaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde kardeş kromatitler birbirinden ayrılır?",{"cevap":"Anafaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
mitoz_bolunme.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde hayvan hücrelerinde boğumlanma görülür?",{"cevap":"Sitokinez"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
biyoloji.add_Konu(mitoz_bolunme)

export  let ilk_turk_beylikleri = new Konu("5",tarih,"ilk-turk-beylikleri","İlk Türk Beylikleri")
ilk_turk_beylikleri.soru_tipi_olustur("Aşağıdaki evrelerin hangisinde kromozomlar ortaya dizilmiş halde bulunur?",{"cevap":"Metafaz"},["mitoz-evre","mitoz-evre","mitoz-evre","mitoz-evre"],"|cevap|")
tarih.add_Konu(ilk_turk_beylikleri)

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

// const SORU_SAYISI = 100;
// let fizik_test : Test = new Test("Elektrik ve Manyetizma - 10. Sınıf Fizik")
// for(let i = 0;i<SORU_SAYISI;i++){
//     let temp_soru = new Soru(fizik,elektrik_manyetizma)
//     fizik_test.soru_ekle(temp_soru)
// }

// console.log(fizik_test.toString())

export let dersler = [matematik,turkce,fizik,kimya,biyoloji,tarih]//,cografya]
 