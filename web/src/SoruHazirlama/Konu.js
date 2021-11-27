"use strict";
exports.__esModule = true;
exports.Konu = void 0;
var SoruTipi_1 = require("./SoruTipi");
var Konu = /** @class */ (function () {
    /// YAPILANDIRICI
    function Konu(Ders, KonuAdi, KonuYazisi) {
        this.Ders = Ders;
        this.KonuAdi = KonuAdi;
        this.KonuYazisi = KonuYazisi;
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
        this.SoruTipleri = [new SoruTipi_1.SoruTipi([this.Ders], [this], SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu)];
    };
    Konu.prototype.toJSON = function () {
        var Konu_json = {};
        Konu_json["KonuAdi"] = this.KonuAdi;
        Konu_json["KonuYazisi"] = this.KonuYazisi;
        var SoruTipleri_json = {};
        for (var i = 0; i < this.SoruTipleri.length; i++) {
            SoruTipleri_json["SoruTipi" + (i + 1)] = this.SoruTipleri[i].toJSON();
        }
        Konu_json["SoruTipleri"] = SoruTipleri_json;
        return Konu_json;
    };
    /// GETTER
    Konu.prototype.get_Ders = function () {
        return this.Ders;
    };
    Konu.prototype.get_KonuAdi = function () {
        return this.KonuAdi;
    };
    Konu.prototype.get_KonuYazisi = function () {
        return this.KonuYazisi;
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
    Konu.prototype.set_KonuYazisi = function (KonuYazisi) {
        this.KonuYazisi = KonuYazisi;
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
exports.Konu = Konu;
