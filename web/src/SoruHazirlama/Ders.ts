
import {Konu} from './Konu';
import {Soru} from './Soru';
import {SoruTipi} from './SoruTipi';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './Database';


export class Ders{

    /// OZELLİKLERİ
    private Konular : Konu[] = [];
    /// YAPILANDIRICI

    constructor(private DersAdi:string){
    }

    /// DAVRANIŞLARI
    toJSON(){
        let Ders_json : any= {}
        Ders_json["DersAdi"] = this.DersAdi

        let Konular_json : any = {}
        for(let i = 0;i<this.Konular.length;i++){
            Konular_json["Konu"+(i+1)] = this.Konular[i].toJSON()
        }
        Ders_json["Konular"] = Konular_json
        return Ders_json
    }

    /// GETTER
    get_DersAdi() : string{
        return this.DersAdi;
    }

    get_Konular() : Konu[]{
        return this.Konular
    }
    
    get_Konular_index(index:number) : Konu{
        return this.Konular[index]
    }
    
    /// SETTER
    set_DersAdi(DersAdi : string){
        this.DersAdi = DersAdi;
    }

    set_Konular(Konular : Konu[]){
        this.Konular = Konular;
    }

    add_Konu(Konu : Konu){
        this.Konular.push(Konu)
    }

}