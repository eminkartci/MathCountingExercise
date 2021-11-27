"use strict";
exports.__esModule = true;
exports.Ders = void 0;
var Ders = /** @class */ (function () {
    /// YAPILANDIRICI
    function Ders(DersAdi, DersYazisi) {
        this.DersAdi = DersAdi;
        this.DersYazisi = DersYazisi;
        /// OZELLİKLERİ
        this.Konular = [];
    }
    /// DAVRANIŞLARI
    Ders.prototype.toJSON = function () {
        var Ders_json = {};
        Ders_json["DersAdi"] = this.DersAdi;
        Ders_json["DersYazisi"] = this.DersYazisi;
        var Konular_json = {};
        for (var i = 0; i < this.Konular.length; i++) {
            Konular_json["Konu" + (i + 1)] = this.Konular[i].toJSON();
        }
        Ders_json["Konular"] = Konular_json;
        return Ders_json;
    };
    /// GETTER
    Ders.prototype.get_DersAdi = function () {
        return this.DersAdi;
    };
    Ders.prototype.get_DersYazisi = function () {
        return this.DersYazisi;
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
    Ders.prototype.set_DersYazisi = function (DersYazisi) {
        this.DersYazisi = DersYazisi;
    };
    Ders.prototype.set_Konular = function (Konular) {
        this.Konular = Konular;
    };
    Ders.prototype.add_Konu = function (Konu) {
        this.Konular.push(Konu);
    };
    return Ders;
}());
exports.Ders = Ders;
