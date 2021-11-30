"use strict";
exports.__esModule = true;
exports.Soru = void 0;
var Database_1 = require("./Database");
var Soru = /** @class */ (function () {
    /// YAPILANDIRICI
    function Soru(Ders, Konu) {
        this.Ders = Ders;
        this.Konu = Konu;
        this.SoruYazisi = "";
        this.Siklar = [];
        this.Degiskenler = [];
        this.Cevap = "";
        this.CevapFormulu = "";
        this.degisken_isimleri = [];
        this.degisken_verileri = [];
        this.CevapSikki = "";
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
            //Bütün şıkları döndürür
            for (var x = 0; x < this.Siklar.length; x++) {
                // console.log("THİS DĞEİŞKEN İSMİ  :",this.degisken_isimleri)
                // console.log(" THİS DĞEİŞKEN VERİSİ:",this.degisken_verileri)
                // butun degisken isimlerini dondur
                for (var i = 0; i < this.degisken_isimleri.length; i++) {
                    //Değişken ismini ve veri type'ını bul
                    degisken_ismi = this.degisken_isimleri[i];
                    degisken_verisi = this.Degiskenler[degisken_ismi];
                    // console.log("DĞEİŞKEN İSMİ  :",degisken_ismi)
                    // console.log("DĞEİŞKEN VERİSİ:",degisken_verisi)
                    //Değişken verisini ver
                    // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
                    // 0 --> minimum sayı
                    // 1 --> maksimum sayi
                    // 2 --> katsayı
                    if (degisken_verisi instanceof Array && degisken_verisi.length == 3) {
                        var degisken_ilk_ismi = "";
                        var degisken_ilk_verisi = "";
                        try {
                            for (var i_1 = 0; i_1 < Object.keys(this.get_Degiskenler()).length; i_1++) {
                                degisken_ilk_ismi = Object.keys(this.get_Degiskenler())[i_1];
                                degisken_ilk_verisi = this.get_Degiskenler()[degisken_ilk_ismi];
                                // degisken_verisi[2]=degisken_ilk_verisi[2].split("|"+degisken_ilk_ismi+"|").join(degisken_ilk_ismi.toString())
                                // degisken_verisi[2] = eval(degisken_verisi[2])
                            }
                        }
                        catch (e) {
                            // console.log("Hata,",e)
                        }
                        var random_maximum = degisken_verisi[1];
                        var random_minimum = degisken_verisi[0];
                        var random_katsayi = degisken_verisi[2];
                        degisken_verisi = Math.floor(Math.random() * (random_maximum - random_minimum) + random_minimum) * random_katsayi;
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "name-kiz") {
                        degisken_verisi = Database_1.kiz_ismi[Math.floor(Math.random() * Database_1.kiz_ismi.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "name-erkek") {
                        degisken_verisi = Database_1.erkek_ismi[Math.floor(Math.random() * Database_1.erkek_ismi.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "sehir") {
                        degisken_verisi = Database_1.sehirler[Math.floor(Math.random() * Database_1.sehirler.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "name-kalin") {
                        degisken_verisi = Database_1.kalin_isimler[Math.floor(Math.random() * Database_1.kalin_isimler.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "name-ince") {
                        degisken_verisi = Database_1.ince_isimler[Math.floor(Math.random() * Database_1.ince_isimler.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "yazim-hatasiz-cumle") {
                        degisken_verisi = Database_1.yazim_hatasiz_cumle[Math.floor(Math.random() * Database_1.yazim_hatasiz_cumle.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "yazim-hatali-cumle") {
                        degisken_verisi = Database_1.yazim_hatali_cumle[Math.floor(Math.random() * Database_1.yazim_hatali_cumle.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "mitoz-evre") {
                        degisken_verisi = Database_1.mitoz_evre[Math.floor(Math.random() * Database_1.mitoz_evre.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                    else if (this.Siklar[x] == "katli-oranlar-uygulanabilir-bilesikleri") {
                        degisken_verisi = Database_1.katli_oranlar_uygulanabilir_bilesikleri[Math.floor(Math.random() * Database_1.katli_oranlar_uygulanabilir_bilesikleri.length)];
                        new_option = new_option.split("|" + degisken_ismi + "|").join(degisken_verisi);
                    }
                }
            }
            try {
                new_option = eval(new_option).toString();
                // console.log("new_option",new_option)
            }
            catch (e) {
                // console.log("HATA",e)
            }
            if (new_Siklar.length == 0) {
                new_Siklar.push(new_option);
                // console.log(new_Siklar)
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
            // console.log("Degisken İsmi",this.degisken_isimleri[i])
            // console.log("Degisken verisi",this.degisken_verileri[i])
            CevapFormulu = CevapFormulu.split("|" + this.degisken_isimleri[i] + "|").join(this.degisken_verileri[i]);
        }
        try {
            this.Cevap = eval(CevapFormulu);
        }
        catch (e) {
            this.Cevap = CevapFormulu;
        }
    };
    //Cevabı şıkların içine rastgele yerleştirir
    Soru.prototype.cevabi_siklara_yerlestir = function () {
        var siklar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];
        for (var i = 0; i < this.Siklar.length; i++) {
            if (this.Siklar[i] == this.Cevap.toString()) {
                this.CevapSikki = siklar[i];
                return;
            }
        }
        var option_index = Math.floor(this.Siklar.length * Math.random());
        this.CevapSikki = siklar[option_index];
        this.Siklar[option_index] = this.Cevap.toString();
    };
    //Soru içindeki değişkenlere değerler verir
    Soru.prototype.degiskenlere_deger_ver = function () {
        // Değişiken isimlerini ve verilerini diğer fonksiyonlarda kullanabilmek için arraye ekliyoruz
        this.degisken_isimleri = [];
        this.degisken_verileri = [];
        for (var i = 0; i < Object.keys(this.Degiskenler).length; i++) {
            //Değişken ismini ve veri type'ını bul
            var degisken_ismi = Object.keys(this.Degiskenler)[i];
            var degisken_verisi = this.Degiskenler[degisken_ismi];
            //Değişken verisini ver
            if (degisken_verisi == "name-kiz") {
                degisken_verisi = Database_1.kiz_ismi[Math.floor(Math.random() * Database_1.kiz_ismi.length)];
            }
            else if (degisken_verisi == "name-erkek") {
                degisken_verisi = Database_1.erkek_ismi[Math.floor(Math.random() * Database_1.erkek_ismi.length)];
            }
            else if (degisken_verisi == "sehir") {
                degisken_verisi = Database_1.sehirler[Math.floor(Math.random() * Database_1.sehirler.length)];
            }
            else if (degisken_verisi == "name-kalin") {
                degisken_verisi = Database_1.kalin_isimler[Math.floor(Math.random() * Database_1.kalin_isimler.length)];
            }
            else if (degisken_verisi == "name-ince") {
                degisken_verisi = Database_1.ince_isimler[Math.floor(Math.random() * Database_1.ince_isimler.length)];
            }
            else if (degisken_verisi == "yazim-hatasiz-cumle") {
                degisken_verisi = Database_1.yazim_hatasiz_cumle[Math.floor(Math.random() * Database_1.yazim_hatasiz_cumle.length)];
            }
            else if (degisken_verisi == "yazim-hatali-cumle") {
                degisken_verisi = Database_1.yazim_hatali_cumle[Math.floor(Math.random() * Database_1.yazim_hatali_cumle.length)];
            }
            else if (degisken_verisi == "mitoz-evre") {
                degisken_verisi = Database_1.mitoz_evre[Math.floor(Math.random() * Database_1.mitoz_evre.length)];
            }
            else if (degisken_verisi == "katli-oranlar-uygulanabilir-bilesikleri") {
                degisken_verisi = Database_1.katli_oranlar_uygulanabilir_bilesikleri[Math.floor(Math.random() * Database_1.katli_oranlar_uygulanabilir_bilesikleri.length)];
            }
            // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
            // 0 --> minimum sayı
            // 1 --> maksimum sayi
            // 2 --> katsayı
            else if (degisken_verisi instanceof Array && degisken_verisi.length == 3) {
                try {
                    for (var a = 0; a < this.degisken_isimleri.length; a++) {
                        degisken_verisi[2] = degisken_verisi[2].split("|" + this.degisken_isimleri[a] + "|").join(this.degisken_verileri[a].toString());
                        degisken_verisi[2] = eval(degisken_verisi[2]);
                    }
                }
                catch (e) {
                    // console.log("Hata,",e)
                }
                var random_maximum = degisken_verisi[1];
                var random_minimum = degisken_verisi[0];
                var random_katsayi = degisken_verisi[2];
                degisken_verisi = Math.floor(Math.random() * (random_maximum - random_minimum) + random_minimum) * random_katsayi;
            }
            else {
                degisken_verisi == degisken_verisi;
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
    Soru.prototype.toJSON = function () {
        var Soru_json = {};
        Soru_json["Ders"] = this.Ders.toJSON();
        Soru_json["Konu"] = this.Konu.toJSON();
        Soru_json["SoruYazisi"] = this.SoruYazisi;
        Soru_json["Siklar"] = this.Siklar;
        Soru_json["Degiskenler"] = this.Degiskenler;
        Soru_json["Cevap"] = this.Cevap;
        Soru_json["CevapFormulu"] = this.CevapFormulu;
        Soru_json["degisken_isimleri"] = this.degisken_isimleri;
        Soru_json["degisken_verileri"] = this.degisken_verileri;
        Soru_json["SoruTipi"] = this.SoruTipi.toJSON();
        Soru_json["CevapSikki"] = this.CevapSikki;
        return Soru_json;
    };
    Soru.prototype.toCSV = function () {
    };
    Soru.prototype.toHTML = function () {
        var content = " <br> Soru : <br> " + this.get_SoruYazisi() + " <br>  <br> A) " + this.get_Siklar_index(0) + " <br> B) " + this.get_Siklar_index(1) + " <br> C) " + this.get_Siklar_index(2) + " <br> D) " + this.get_Siklar_index(3) + " <br> E) " + this.get_Siklar_index(4) + " <br>  <br> CEVAP: " + this.get_CevapSikki();
        return content;
    };
    /// TO_STRING()
    Soru.prototype.toString = function () {
        var content = "\nSoru :\n" + this.get_SoruYazisi() + "\n\nA) " + this.get_Siklar_index(0) + "\nB) " + this.get_Siklar_index(1) + "\nC) " + this.get_Siklar_index(2) + "\nD) " + this.get_Siklar_index(3) + "\nE) " + this.get_Siklar_index(4) + "\n\nCEVAP: " + this.get_CevapSikki();
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
    Soru.prototype.get_CevapSikki = function () {
        return this.CevapSikki;
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
