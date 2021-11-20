
import {Ders} from './Ders';
import {Soru} from './Soru';
import {SoruTipi} from './SoruTipi';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler} from './Database';


export class Konu{



    /// OZELLIKLER
    private SoruTipleri : SoruTipi[] = []

    /// YAPILANDIRICI
    constructor(private Ders:Ders , private KonuAdi : string){
    }

    /// DAVRANISLARI

    // Bu konuya ait olan bütün soru tiplerini döndür
    soru_tipleri_ver() : SoruTipi[]{
        return this.SoruTipleri
    }

    // Bu konuya ait olan soru tiplerinden, indexe ait olan soru tipini döndür
    soru_tipi_ver(index:number) : SoruTipi{
        return this.SoruTipleri[index]
    }

    // Şimdilik tek bir soru tipi oluşturuluyor
    // Soru tipi oluştur ve sorutipleri arrayine ekle
    soru_tipi_olustur(SoruYazisi : string,SoruDegiskenleri:any,Siklar : string[],CevapFormulu:string){
        this.SoruTipleri = [new SoruTipi([this.Ders],[this],SoruYazisi,SoruDegiskenleri,Siklar,CevapFormulu)]
    }

    toJSON(){
        let Konu_json : any = {}        
        Konu_json["KonuAdi"] = this.KonuAdi
        let SoruTipleri_json : any = {}
        for(let i = 0;i<this.SoruTipleri.length;i++){
            SoruTipleri_json["SoruTipi"+(i+1)] = this.SoruTipleri[i].toJSON()
        }
        Konu_json["SoruTipleri"] = SoruTipleri_json
        return Konu_json
    }

    /// GETTER

    get_Ders() : Ders{
        return this.Ders
    }
    
    get_KonuAdi() : string{
        return this.KonuAdi
    }

    get_SoruTipleri() : SoruTipi[]{
        return this.SoruTipleri
    }

    get_SoruTipleri_index(index:number) : SoruTipi{
        return this.SoruTipleri[index]
    }

    /// SETTER

    set_Ders(Ders:Ders){
        this.Ders = Ders
    }

    set_KonuAdi(KonuAdi:string){
        this.KonuAdi = KonuAdi
    }

    set_SoruTipleri(SoruTipleri:SoruTipi[]){
        this.SoruTipleri = SoruTipleri
    }

    add_SoruTipi(SoruTipi:SoruTipi){
        this.SoruTipleri.push(SoruTipi)
    }
    
    
}