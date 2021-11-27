"use strict";
exports.__esModule = true;
exports.SoruTipi = void 0;
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
    SoruTipi.prototype.toJSON = function () {
        var SoruTipi_json = {};
        SoruTipi_json["SoruYazisi"] = this.SoruYazisi;
        SoruTipi_json["SoruDegiskenleri"] = this.SoruDegiskenleri;
        SoruTipi_json["Siklar"] = this.Siklar;
        SoruTipi_json["CevapFormulu"] = this.CevapFormulu;
        return SoruTipi_json;
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
exports.SoruTipi = SoruTipi;
