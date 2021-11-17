// import {Ders} from './Ders';
// import {Konu} from './Konu';
// import {Soru} from './Soru';
// import {SoruTipi} from './SoruTipi';
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
        this.SoruTipleri = []; // SoruTipi Array
        this.soru_tipi_olustur();
    }
    /// DAVRANISLARI
    Konu.prototype.soru_tipi_ver = function () {
        return this.SoruTipleri;
    };
    Konu.prototype.soru_tipi_olustur = function () {
        this.SoruTipleri = [new SoruTipi([this.Ders], [this], "Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?", ["Ayşe"], ["10", "11", "8", "7"])];
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
    Konu.prototype.add_SoruTipleri = function (SoruTipi) {
        this.SoruTipleri.push(SoruTipi);
    };
    return Konu;
}());
var Soru = /** @class */ (function () {
    /// YAPILANDIRICI
    function Soru(Ders, Konu) {
        this.Ders = Ders;
        this.Konu = Konu;
        this.Siklar = [];
        this.Degiskenler = [];
        this.Cevap = "";
        this.soru_hazirla();
    }
    /// DAVRANIŞLARI
    Soru.prototype.soru_tipi_al = function () {
    };
    Soru.prototype.siklari_al = function () {
    };
    Soru.prototype.degiskenleri_al = function () {
    };
    Soru.prototype.cevabi_hesapla = function () {
    };
    Soru.prototype.cevabi_siklara_yerlestir = function () {
    };
    Soru.prototype.soru_hazirla = function () {
        this.soru_tipi_al();
        this.siklari_al();
        this.degiskenleri_al();
        this.cevabi_hesapla();
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
    Soru.prototype.get_Degiskenler = function () {
        return this.Degiskenler;
    };
    Soru.prototype.get_Cevap = function () {
        return this.Cevap;
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
    function SoruTipi(Dersler, Konular, SoruYazisi, SoruDegiskenleri, Siklar) {
        this.Dersler = Dersler;
        this.Konular = Konular;
        this.SoruYazisi = SoruYazisi;
        this.SoruDegiskenleri = SoruDegiskenleri;
        this.Siklar = Siklar;
    }
    /// DAVRANISLARI
    SoruTipi.prototype.siklari_ver = function () {
    };
    SoruTipi.prototype.degiskenleri_ver = function () {
    };
    SoruTipi.prototype.soru_tipi_cozumu = function () {
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
    SoruTipi.prototype.add_Sik = function (Sik) {
        this.Siklar.push(Sik);
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
matematik.add_Konu(yas_problemi);
var yazim_kurallari = new Konu(turkce, "Yazım Kuralları");
turkce.add_Konu(yazim_kurallari);
var hareket_hiz = new Konu(fizik, "Hareket-Hız");
fizik.add_Konu(hareket_hiz);
var sabit_oranlar_kanunu = new Konu(kimya, "Sabit Oranlar Kanunu");
kimya.add_Konu(sabit_oranlar_kanunu);
var mitoz_bolunme = new Konu(biyoloji, "Mitoz Bölünme");
biyoloji.add_Konu(mitoz_bolunme);
var ilk_turk_beylikleri = new Konu(tarih, "İlk Türk Beylikleri");
tarih.add_Konu(ilk_turk_beylikleri);
/////////////// SORULAR ///////////////
var matematik_sorusu = new Soru(matematik, yas_problemi);
var turkce_sorusu = new Soru(turkce, yazim_kurallari);
var fizik_sorusu = new Soru(fizik, hareket_hiz);
var kimya_sorusu = new Soru(kimya, sabit_oranlar_kanunu);
var biyoloji_sorusu = new Soru(biyoloji, mitoz_bolunme);
var tarih_sorusu = new Soru(tarih, ilk_turk_beylikleri);
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
console.log("/*-------------------------------------*\\");
console.log("");
console.log("MATEMATİK SORUSU : ", matematik_sorusu);
console.log("TÜRKÇE    SORUSU : ", turkce_sorusu);
console.log("FİZİK     SORUSU : ", fizik_sorusu);
console.log("KİMYA     SORUSU : ", kimya_sorusu);
console.log("BİYOLOJİ  SORUSU : ", biyoloji_sorusu);
console.log("TARİH     SORUSU : ", tarih_sorusu);
console.log("");
console.log("/*-------------------------------------*\\");
