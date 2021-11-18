"use strict";
exports.__esModule = true;
exports.Ders = void 0;
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
exports.Ders = Ders;
