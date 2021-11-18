"use strict";
exports.__esModule = true;
exports.Konu = void 0;
var SoruTipi_js_1 = require("./SoruTipi.js");
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
        this.SoruTipleri = [new SoruTipi_js_1.SoruTipi([this.Ders], [this], SoruYazisi, SoruDegiskenleri, Siklar, CevapFormulu)];
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
exports.Konu = Konu;
