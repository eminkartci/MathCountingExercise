"use strict";
exports.__esModule = true;
exports.Soru = void 0;
var Database_js_1 = require("./Database.js");
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
    //Şıkları oluştur
    Soru.prototype.siklari_oluştur = function () {
        // sıkları tutan bir liste yap
        var new_Siklar = [];
        // 5 tane şık olana kadar döndür
        while (new_Siklar.length < 5) {
            var degisken_ismi = "";
            var degisken_verisi = void 0; // double
            var new_option = this.CevapFormulu; // cevap formulu string tutuyor
            // butun degisken isimlerini dondur
            for (var i = 0; i < this.degisken_isimleri.length; i++) {
                //Değişken ismini ve veri type'ını bul
                degisken_ismi = this.degisken_isimleri[i];
                degisken_verisi = this.Degiskenler[degisken_ismi];
                //Değişken verisini ver
                // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
                // 0 --> minimum sayı
                // 1 --> maksimum sayi
                // 2 --> katsayı
                if (degisken_verisi instanceof Array && degisken_verisi.length == 3) {
                    degisken_verisi = Math.floor(Math.random() * degisken_verisi[1] + degisken_verisi[0]) * degisken_verisi[2];
                    // new_option = new_option.replace("|"+degisken_ismi+"|",degisken_verisi)
                    new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                }
            }
            new_option = eval(new_option).toString();
            if (new_Siklar.length == 0) {
                new_Siklar.push(new_option);
            }
            // Option ekle
            var onceden_eklenmis_mi = false;
            for (var j = 0; j < new_Siklar.length; j++) {
                if (new_option == new_Siklar[j]) {
                    onceden_eklenmis_mi = true;
                }
            }
            if (onceden_eklenmis_mi == false) {
                new_Siklar.push(new_option);
            }
        }
        this.Siklar = new_Siklar;
    };
    //Sorunun cevabını hesaplar
    // Şimdilik cevap sadece formülle hesaplanabilir sorular için geçerli
    Soru.prototype.cevabi_hesapla = function (CevapFormulu) {
        //cevap formülünü degisken verileri ile değiştir
        for (var i = 0; i < this.degisken_isimleri.length; i++) {
            // CevapFormulu = CevapFormulu.replace("|"+this.degisken_isimleri[i]+"|",this.degisken_verileri[i])
            CevapFormulu = CevapFormulu.split("|" + this.degisken_isimleri[i] + "|").join(this.degisken_verileri[i]);
        }
        this.Cevap = eval(CevapFormulu);
    };
    //Cevabı şıkların içine rastgele yerleştirir
    Soru.prototype.cevabi_siklara_yerlestir = function () {
        for (var i = 0; i < this.Siklar.length; i++) {
            if (this.Siklar[i] == this.Cevap.toString()) {
                return;
            }
        }
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
                degisken_verisi = Database_js_1.kiz_ismi[Math.floor(Math.random() * Database_js_1.kiz_ismi.length)];
            }
            else if (degisken_verisi == "name-erkek") {
                degisken_verisi = Database_js_1.erkek_ismi[Math.floor(Math.random() * Database_js_1.erkek_ismi.length)];
            }
            else if (degisken_verisi == "sehir") {
                degisken_verisi = Database_js_1.sehirler[Math.floor(Math.random() * Database_js_1.sehirler.length)];
            }
            else if (degisken_verisi == "name-kalin") {
                degisken_verisi = Database_js_1.kalin_isimler[Math.floor(Math.random() * Database_js_1.kalin_isimler.length)];
            }
            else if (degisken_verisi == "name-ince") {
                degisken_verisi = Database_js_1.ince_isimler[Math.floor(Math.random() * Database_js_1.ince_isimler.length)];
            }
            // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
            // 0 --> minimum sayı
            // 1 --> maksimum sayi
            // 2 --> katsayı
            else if (degisken_verisi instanceof Array && degisken_verisi.length == 3) {
                degisken_verisi = Math.floor(Math.random() * degisken_verisi[1] + degisken_verisi[0]) * degisken_verisi[2];
            }
            //değişken ismini ve verisini arraye ekle
            this.degisken_isimleri.push(degisken_ismi);
            this.degisken_verileri.push(degisken_verisi);
            // Soru yazısını güncelle
            // this.SoruYazisi = this.SoruYazisi.replace("|"+degisken_ismi+"|",degisken_verisi)
            this.SoruYazisi = this.SoruYazisi.split("|" + degisken_ismi + "|").join(degisken_verisi);
        }
    };
    Soru.prototype.soru_hazirla = function () {
        // Soru tipi şimdilik rastgele alınıyor
        this.soru_tipi_al(this.Konu.soru_tipi_ver(Math.floor(Math.random() * this.Konu.get_SoruTipleri.length)));
        // Soru yazısını sorutipinden al
        this.soru_yazisi_al(this.SoruTipi.get_SoruYazisi());
        // Değişkenleri sorutipinden al
        this.degiskenleri_al(this.SoruTipi.get_SoruDegiskenleri());
        // Cevap Formülünü sorutipinden al
        this.cevapFormulu_al(this.SoruTipi.get_CevapFormulu());
        //Soru yazısını günceller ve değiken arraylerini doldurur
        this.degiskenlere_deger_ver();
        // Şıkları sorutipinden al
        this.siklari_al(this.SoruTipi.get_Siklar());
        // Şıkları Oluştur
        this.siklari_oluştur();
        //Cevabı hesaplar
        this.cevabi_hesapla(this.CevapFormulu);
        //Cevabı Şıklara yerleştirir
        this.cevabi_siklara_yerlestir();
    };
    Soru.prototype.toCSV = function () {
    };
    Soru.prototype.toHTML = function () {
    };
    /// TO_STRING()
    Soru.prototype.toString = function () {
        var content = "\nSoru :\n" + this.get_SoruYazisi() + "\n\nA) " + this.get_Siklar_index(0) + "\nB) " + this.get_Siklar_index(1) + "\nC) " + this.get_Siklar_index(2) + "\nD) " + this.get_Siklar_index(3) + "\nE) " + this.get_Siklar_index(4) + "\n\nCEVAP: " + this.get_Cevap() + "\n        ";
        return content;
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
exports.Soru = Soru;
