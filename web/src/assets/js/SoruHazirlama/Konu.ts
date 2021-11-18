import {Ders} from './Ders';
import {Soru} from './Soru';
import {SoruTipi} from './SoruTipi';

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
    soru_tipi_ver(index) : SoruTipi{
        return this.SoruTipleri[index]
    }

    // Şimdilik tek bir soru tipi oluşturuluyor
    // Soru tipi oluştur ve sorutipleri arrayine ekle
    soru_tipi_olustur(SoruYazisi : string,SoruDegiskenleri,Siklar : string[],CevapFormulu:string){
        this.SoruTipleri = [new SoruTipi([this.Ders],[this],SoruYazisi,SoruDegiskenleri,Siklar,CevapFormulu)]
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

