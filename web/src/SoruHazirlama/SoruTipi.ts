
import {Ders} from './Ders';
import {Konu} from './Konu';
import {Soru} from './Soru';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './Database';


export 
class SoruTipi{

    /// OZELLIKLER
    /// YAPILANDIRICI
    constructor(private Dersler : Ders[],private Konular:Konu[],private SoruYazisi:string,private SoruDegiskenleri:any,private Siklar:string[],private CevapFormulu : string){

    }

    /// DAVRANISLARI
    soru_tipi_cozumu(){
        return this.CevapFormulu;
    }

    toJSON(){
        let SoruTipi_json : any = {}
        SoruTipi_json["SoruYazisi"] = this.SoruYazisi
        SoruTipi_json["SoruDegiskenleri"] = this.SoruDegiskenleri
        SoruTipi_json["Siklar"] = this.Siklar
        SoruTipi_json["CevapFormulu"] = this.CevapFormulu
        return SoruTipi_json

    }

    /// GETTER

    get_Dersler() : Ders[]{
        return this.Dersler
    }
    
    get_Konular() : Konu[]{
        return this.Konular
    }
    
    get_SoruYazisi() : string{
        return this.SoruYazisi
    }

    get_SoruDegiskenleri(){
        return this.SoruDegiskenleri
    }

    get_Siklar() : string[]{
        return this.Siklar
    }

    get_CevapFormulu():string{
        return this.CevapFormulu
    }

    /// SETTER

    set_Dersler(Dersler : Ders[]){
        this.Dersler = Dersler
    }

    add_Ders(Ders:Ders){
        this.Dersler.push(Ders)
    }

    set_Konular(Konular : Konu[]){
        this.Konular = Konular
    }

    add_Konu(Konu:Konu){
        this.Konular.push(Konu)
    }
    
    set_SoruYazisi(SoruYazisi : string){
        this.SoruYazisi = SoruYazisi
    }
    
    set_SoruDegiskenleri(SoruDegiskenleri:any){
        this.SoruDegiskenleri = SoruDegiskenleri
    }

    add_SoruDegiskeni(add_SoruDegiskeni:any){
        this.SoruDegiskenleri.push(add_SoruDegiskeni)

    }
    
    set_Siklar(Siklar : string[]){
        this.Siklar = Siklar
    }

    add_Option(option : string){
        this.Siklar.push(option)

    }
    
    
}