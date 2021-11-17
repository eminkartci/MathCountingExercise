// import {Ders} from './Ders';
// import {Konu} from './Konu';
// import {Soru} from './Soru';
// import {SoruTipi} from './SoruTipi';
var kiz_ismi = ["Elif", "Açelya", "Elvan", "Selen", "Emin", "Eda", "Melis", "Ceylin", "Zeynep", "Pelin", "Özlem"];
var erkek_ismi = ["Can", "yiğit", "Türkdoğan", "Ferhat", "Emir", "Buğra", "Eren", "Ertuğrul", "Deniz", "Durmuş", "Arda", "Ali", "Burak", "Sidar", "Ömer"];
/////////////// EXPORT ////////////////
var Ders = /** @class */ (function () {
    /// YAPILANDIRICI
    function Ders(DersAdi) {
        this.DersAdi = DersAdi;
        /// OZELLİKLERİ
        this.Konular = [];
    }
    /// DAVRANIŞLARI
    /// GETTER
    Ders.prototype.get_DersAdi = function () {
        return this.DersAdi;
    };
    Ders.prototype.get_Konular = function () {
        return this.Konular;
    };
    Ders.prototype.get_Konular_index = function (index) {
        return this.Konular[index];
    };
    /// SETTER
    Ders.prototype.set_DersAdi = function (DersAdi) {
        this.DersAdi = DersAdi;
    };
    Ders.prototype.set_Konular = function (Konular) {
        this.Konular = Konular;
    };
    Ders.prototype.add_Konu = function (Konu) {
        this.Konular.push(Konu);
    };
    return Ders;
}());
var Konu = /** @class */ (function () {
    /// YAPILANDIRICI
    function Konu(Ders, KonuAdi) {
        this.Ders = Ders;
        this.KonuAdi = KonuAdi;
        /// OZELLIKLER
        this.SoruTipleri = [];
    }
    /// DAVRANISLARI
    // Bu konuya ait olan bütün soru tiplerini döndür
    Konu.prototype.soru_tipleri_ver = function () {
        return this.SoruTipleri;
    };
    // Bu konuya ait olan soru tiplerinden, indexe ait olan soru tipini döndür
    Konu.prototype.soru_tipi_ver = function (index) {
        return this.SoruTipleri[index];
    };
    // Şimdilik tek bir soru tipi oluşturuluyor
    // Soru tipi oluştur ve sorutipleri arrayine ekle
    Konu.prototype.soru_tipi_olustur = function (SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu) {
        this.SoruTipleri = [new SoruTipi([this.Ders], [this], SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu)];
    };
    /// GETTER
    Konu.prototype.get_Ders = function () {
        return this.Ders;
    };
    Konu.prototype.get_KonuAdi = function () {
        return this.KonuAdi;
    };
    Konu.prototype.get_SoruTipleri = function () {
        return this.SoruTipleri;
    };
    Konu.prototype.get_SoruTipleri_index = function (index) {
        return this.SoruTipleri[index];
    };
    /// SETTER
    Konu.prototype.set_Ders = function (Ders) {
        this.Ders = Ders;
    };
    Konu.prototype.set_KonuAdi = function (KonuAdi) {
        this.KonuAdi = KonuAdi;
    };
    Konu.prototype.set_SoruTipleri = function (SoruTipleri) {
        this.SoruTipleri = SoruTipleri;
    };
    Konu.prototype.add_SoruTipi = function (SoruTipi) {
        this.SoruTipleri.push(SoruTipi);
    };
    return Konu;
}());
var Soru = /** @class */ (function () {
    /// YAPILANDIRICI
    function Soru(Ders, Konu) {
        this.Ders = Ders;
        this.Konu = Konu;
        this.SoruYazisi = "";
        this.Siklar = [];
        this.Degiskenler = [];
        this.Cevap = "";
        this.soru_hazirla();
    }
    /// DAVRANIŞLARI
    // Sorutipini alır
    Soru.prototype.soru_tipi_al = function (SoruTipi) {
        this.SoruTipi = SoruTipi;
    };
    // Şıkları alır
    Soru.prototype.siklari_al = function (Siklar) {
        this.Siklar = Siklar;
    };
    // Soru Yazısı alır
    Soru.prototype.soru_yazisi_al = function (SoruYazisi) {
        this.SoruYazisi = SoruYazisi;
    };
    // Değişkenleri alır
    Soru.prototype.degiskenleri_al = function (Degiskenler) {
        this.Degiskenler = Degiskenler;
    };
    //Cevap Formülünü al
    Soru.prototype.cevapFormulu_al = function (CevapFormulu) {
        this.CevapFormulu = CevapFormulu;
    };
    //Sorunun cevabını hesaplar
    // Şimdilik cevap sadece formülle hesaplanabilir sorular için geçerli
    Soru.prototype.cevabi_hesapla = function () {
        //cevap formülünü degisken verileri ile değiştir
        for (var i = 0; i < this.degisken_isimleri.length; i++) {
            this.CevapFormulu = this.CevapFormulu.replaceAll("|" + this.degisken_isimleri[i] + "|", this.degisken_verileri[i]);
        }
        this.Cevap = eval(this.CevapFormulu);
    };
    //Cevabı şıkların içine rastgele yerleştirir
    Soru.prototype.cevabi_siklara_yerlestir = function () {
        this.Siklar[Math.floor(this.Siklar.length * Math.random())] = this.Cevap.toString();
    };
    //Soru içindeki değişkenlere değerler verir
    Soru.prototype.degiskenlere_deger_ver = function () {
        // Değişiken isimlerini ve verilerini diğer fonksiyonlarda kullanabilmek için arraye ekliyoruz
        this.degisken_isimleri = [];
        this.degisken_verileri = [];
        var degisken_ismi = "";
        var degisken_verisi;
        for (var i = 0; i < Object.keys(this.Degiskenler).length; i++) {
            //Değişken ismini ve veri type'ını bul
            degisken_ismi = Object.keys(this.Degiskenler)[i];
            degisken_verisi = this.Degiskenler[degisken_ismi];
            //Değişken verisini ver
            if (degisken_verisi == "name-kiz") {
                degisken_verisi = kiz_ismi[Math.floor(Math.random() * kiz_ismi.length)];
            }
            else if (degisken_verisi == "name-erkek") {
                degisken_verisi = erkek_ismi[Math.floor(Math.random() * kiz_ismi.length)];
            }
            else if (degisken_verisi instanceof Array && degisken_verisi.length == 3) {
                degisken_verisi = Math.floor(Math.random() * degisken_verisi[1] + degisken_verisi[0]) * degisken_verisi[2];
            }
            //değişken ismini ve verisini arraye ekle
            this.degisken_isimleri.push(degisken_ismi);
            this.degisken_verileri.push(degisken_verisi);
            // Soru yazısını güncelle
            this.SoruYazisi = this.SoruYazisi.replaceAll("|" + degisken_ismi + "|", degisken_verisi);
        }
        // console.log("Soru Yazısı : \n",this.SoruYazisi)
        // console.log("Değişken İsimleri : ",this.degisken_isimleri)
        // console.log("Değişken Verileri : ",this.degisken_verileri)
    };
    Soru.prototype.soru_hazirla = function () {
        // Soru tipi şimdilik rastgele alınıyor
        this.soru_tipi_al(this.Konu.soru_tipi_ver(Math.floor(Math.random() * this.Konu.get_SoruTipleri.length)));
        // Soru yazısını sorutipinden al
        this.soru_yazisi_al(this.SoruTipi.get_SoruYazisi());
        // Şıkları sorutipinden al
        this.siklari_al(this.SoruTipi.get_Siklar());
        // Değişkenleri sorutipinden al
        this.degiskenleri_al(this.SoruTipi.get_SoruDegiskenleri());
        //Soru yazısını günceller ve değiken arraylerini doldurur
        this.degiskenlere_deger_ver();
        // Cevap Formülünü sorutipinden al
        this.cevapFormulu_al(this.SoruTipi.get_CevapFormulu());
        //Cevabı hesaplar
        this.cevabi_hesapla();
        //Cevabı Şıklara yerleştirir
        this.cevabi_siklara_yerlestir();
    };
    Soru.prototype.toCSV = function () {
    };
    Soru.prototype.toHTML = function () {
    };
    /// TO_STRING()
    Soru.prototype.toString = function () {
    };
    /// GETTER
    Soru.prototype.get_Ders = function () {
        return this.Ders;
    };
    Soru.prototype.get_Konu = function () {
        return this.Konu;
    };
    Soru.prototype.get_SoruTipi = function () {
        return this.SoruTipi;
    };
    Soru.prototype.get_Siklar = function () {
        return this.Siklar;
    };
    Soru.prototype.get_Siklar_index = function (index) {
        return this.Siklar[index];
    };
    Soru.prototype.get_Degiskenler = function () {
        return this.Degiskenler;
    };
    Soru.prototype.get_Cevap = function () {
        return this.Cevap;
    };
    Soru.prototype.get_SoruYazisi = function () {
        return this.SoruYazisi;
    };
    /// SETTER
    Soru.prototype.set_Ders = function (Ders) {
        this.Ders = Ders;
    };
    Soru.prototype.set_Konu = function (Konu) {
        this.Konu = Konu;
    };
    Soru.prototype.set_SoruTipi = function (SoruTipi) {
        this.SoruTipi = SoruTipi;
    };
    Soru.prototype.set_Siklar = function (Siklar) {
        this.Siklar = Siklar;
    };
    Soru.prototype.add_Sik = function (Sik) {
        this.Siklar.push(Sik);
    };
    Soru.prototype.set_Degiskenler = function (Degiskenler) {
        this.Degiskenler = Degiskenler;
    };
    Soru.prototype.add_Degisken = function (Degisken) {
        this.Degiskenler.push(Degisken);
    };
    Soru.prototype.set_Cevap = function (Cevap) {
        this.Cevap = Cevap;
    };
    return Soru;
}());
var SoruTipi = /** @class */ (function () {
    /// OZELLIKLER
    /// YAPILANDIRICI
    function SoruTipi(Dersler, Konular, SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu) {
        this.Dersler = Dersler;
        this.Konular = Konular;
        this.SoruYazisi = SoruYazisi;
        this.SoruDegiskenleri = SoruDegiskenleri;
        this.Siklar = Siklar;
        this.CevapFormulu = CevapFormulu;
    }
    /// DAVRANISLARI
    SoruTipi.prototype.soru_tipi_cozumu = function () {
        return this.CevapFormulu;
    };
    /// GETTER
    SoruTipi.prototype.get_Dersler = function () {
        return this.Dersler;
    };
    SoruTipi.prototype.get_Konular = function () {
        return this.Konular;
    };
    SoruTipi.prototype.get_SoruYazisi = function () {
        return this.SoruYazisi;
    };
    SoruTipi.prototype.get_SoruDegiskenleri = function () {
        return this.SoruDegiskenleri;
    };
    SoruTipi.prototype.get_Siklar = function () {
        return this.Siklar;
    };
    SoruTipi.prototype.get_CevapFormulu = function () {
        return this.CevapFormulu;
    };
    /// SETTER
    SoruTipi.prototype.set_Dersler = function (Dersler) {
        this.Dersler = Dersler;
    };
    SoruTipi.prototype.add_Ders = function (Ders) {
        this.Dersler.push(Ders);
    };
    SoruTipi.prototype.set_Konular = function (Konular) {
        this.Konular = Konular;
    };
    SoruTipi.prototype.add_Konu = function (Konu) {
        this.Konular.push(Konu);
    };
    SoruTipi.prototype.set_SoruYazisi = function (SoruYazisi) {
        this.SoruYazisi = SoruYazisi;
    };
    SoruTipi.prototype.set_SoruDegiskenleri = function (SoruDegiskenleri) {
        this.SoruDegiskenleri = SoruDegiskenleri;
    };
    SoruTipi.prototype.add_SoruDegiskeni = function (add_SoruDegiskeni) {
        this.SoruDegiskenleri.push(add_SoruDegiskeni);
    };
    SoruTipi.prototype.set_Siklar = function (Siklar) {
        this.Siklar = Siklar;
    };
    SoruTipi.prototype.add_Option = function (option) {
        this.Siklar.push(option);
    };
    return SoruTipi;
}());
/////////////// DERSLER ///////////////
var matematik = new Ders("Matematik");
var turkce = new Ders("Türkçe");
var fizik = new Ders("Fizik");
var kimya = new Ders("Kimya");
var biyoloji = new Ders("Biyoloji");
var tarih = new Ders("Tarih");
/////////////// KONULAR ///////////////
var yas_problemi = new Konu(matematik, "Yaş Problemi");
yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?", { "isim": "name-kiz", "sayi1": [1, 5, 1], "sayi2": [1, 5, 1], "sayi3": [1, 5, 1] }, ["30", "28", "15", "1"], "|sayi1|+|sayi2|*|sayi3|");
matematik.add_Konu(yas_problemi);
// let yazim_kurallari = new Konu(turkce,"Yazım Kuralları")
// yazim_kurallari.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Emin"],["10","11","8","7"])
// turkce.add_Konu(yazim_kurallari)
var hareket_hiz = new Konu(fizik, "Hareket-Hız");
hareket_hiz.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hıcı kaç km/h'tir?", { "isim1": "name-erkek", "isim2": "name-kiz", "sayi1": [1, 10, 10], "sayi2": [5, 15, 10] }, ["30", "28", "15", "1"], "|sayi1|+|sayi2|");
fizik.add_Konu(hareket_hiz);
// let sabit_oranlar_kanunu = new Konu(kimya,"Sabit Oranlar Kanunu")
// sabit_oranlar_kanunu.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Büşra"],["10","11","8","7"])
// kimya.add_Konu(sabit_oranlar_kanunu)
// let mitoz_bolunme = new Konu(biyoloji,"Mitoz Bölünme")
// mitoz_bolunme.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Mehmet"],["10","11","8","7"])
// biyoloji.add_Konu(mitoz_bolunme)
// let ilk_turk_beylikleri = new Konu(tarih,"İlk Türk Beylikleri")
// ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
// tarih.add_Konu(ilk_turk_beylikleri)
/////////////// SORULAR ///////////////
var matematik_sorusu = new Soru(matematik, yas_problemi);
// let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
var fizik_sorusu = new Soru(fizik, hareket_hiz);
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
// console.log("")
console.log("Soru: \n", fizik_sorusu.get_SoruYazisi());
console.log("A) ", fizik_sorusu.get_Siklar_index(0));
console.log("B) ", fizik_sorusu.get_Siklar_index(1));
console.log("C) ", fizik_sorusu.get_Siklar_index(2));
console.log("D) ", fizik_sorusu.get_Siklar_index(3));
console.log("Cevap : \n", fizik_sorusu.get_Cevap());
// console.log("TÜRKÇE    SORUSU : " , turkce_sorusu)
// console.log("FİZİK     SORUSU : " , fizik_sorusu)
// console.log("KİMYA     SORUSU : " , kimya_sorusu)
// console.log("BİYOLOJİ  SORUSU : " , biyoloji_sorusu)
// console.log("TARİH     SORUSU : " , tarih_sorusu)
// console.log("")
// console.log("/*-------------------------------------*\\")
