"use strict";
exports.__esModule = true;
exports.Soru = void 0;
var Soru = /** @class */ (function () {
    /// YAPILANDIRICI
    function Soru(Ders, Konu) {
        this.Ders = Ders;
        this.Konu = Konu;
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
exports.Soru = Soru;
