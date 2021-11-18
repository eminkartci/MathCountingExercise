
import {Konu} from './Konu.js';
import {Soru} from './Soru.js';
import {SoruTipi} from './SoruTipi.js';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './database.js';


export class Ders{

    /// OZELLİKLERİ
    private Konular : Konu[] = [];
    /// YAPILANDIRICI

    constructor(private DersAdi:string){
    }

    /// DAVRANIŞLARI


    /// GETTER
    get_DersAdi() : string{
        return this.DersAdi;
    }

    get_Konular() : Konu[]{
        return this.Konular
    }
    
    get_Konular_index(index) : Konu{
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