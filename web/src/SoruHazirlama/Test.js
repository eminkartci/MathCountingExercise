"use strict";
exports.__esModule = true;
exports.Test = void 0;
var Test = /** @class */ (function () {
    function Test(TestAdi) {
        this.TestAdi = TestAdi;
        // Soru objeclerinin tutulduğu array
        this.Sorular = [];
    }
    Test.prototype.soru_ekle = function (Soru) {
        this.Sorular.push(Soru);
    };
    Test.prototype.toString = function () {
        var test_content = "";
        var cevap_anahtari_content = "";
        for (var i = 0; i < this.Sorular.length; i++) {
            var temp_soru = this.Sorular[i];
            test_content += "\nSoru " + (i + 1) + ":\n" + temp_soru.get_SoruYazisi() + "\nA) " + temp_soru.get_Siklar_index(0) + "\nB) " + temp_soru.get_Siklar_index(1) + "\nC) " + temp_soru.get_Siklar_index(2) + "\nD) " + temp_soru.get_Siklar_index(3) + "\nE) " + temp_soru.get_Siklar_index(4) + "\n            ";
            cevap_anahtari_content += "\nSoru " + (i + 1) + ": \u00A0" + temp_soru.get_CevapSikki();
        }
        test_content += "\n\n Cevap Anahtar\u0131: " + cevap_anahtari_content;
        return test_content;
    };
    return Test;
}());
exports.Test = Test;
