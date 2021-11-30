
import {Ders} from './Ders';
import {Konu} from './Konu';
import {Soru} from './Soru';
import {SoruTipi} from './SoruTipi';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './Database';

export class Test{

    // Soru objeclerinin tutulduğu array
    private Sorular : Soru[] = []

    constructor(private TestAdi : string){

    }

    soru_ekle(Soru : Soru){
        this.Sorular.push(Soru)
    }

    toString(){
        let test_content = ``
        let cevap_anahtari_content = ``
        for(let i = 0;i<this.Sorular.length;i++){
            let temp_soru = this.Sorular[i]
            test_content += `
Soru ${i+1}:
${temp_soru.get_SoruYazisi()}
A) ${temp_soru.get_Siklar_index(0)}
B) ${temp_soru.get_Siklar_index(1)}
C) ${temp_soru.get_Siklar_index(2)}
D) ${temp_soru.get_Siklar_index(3)}
E) ${temp_soru.get_Siklar_index(4)}
            `
            cevap_anahtari_content+=`
Soru ${i+1}:  ${temp_soru.get_CevapSikki()}`
        
        }



        test_content += `\n\n Cevap Anahtarı: ${cevap_anahtari_content}`
        
        return test_content
    }

    toHTML(){
        let test_content = ``
        let cevap_anahtari_content = `<ul id="cevap_list">`
        for(let i = 0;i<this.Sorular.length;i++){
            let temp_soru = this.Sorular[i]
            test_content += `
            <div id="soru${i+1}">

            <h2 style="color:#881010">Soru ${i+1}:</h2>
            ${temp_soru.toHTML(false)}
            </div>
            `
            cevap_anahtari_content += `
            <li><p style="color:red">Soru ${i+1} :</p> ${temp_soru.get_CevapSikki()}`
        }

        cevap_anahtari_content += "</ul>"
        test_content += cevap_anahtari_content
        return test_content
    }

    toJSON(){
        let test_json :any = {}
        test_json["TestAdi"] = this.TestAdi
        for(let i = 0;i<this.Sorular.length;i++){
            let temp_soru = this.Sorular[i]
            test_json["Soru"+(i+1)] = temp_soru.toJSON()
        }
        return test_json
    }

    get_TestAdi():string{
        return this.TestAdi
    }



}