class Konu{

    /// OZELLIKLER
    Ders ; // Ders
    KonuAdi ; //String
    SoruTipleri ; // SoruTipi Array

    /// YAPILANDIRICI
    constructor(Ders,KonuAdi){
        this.Ders = Ders;
        this.KonuAdi = KonuAdi;
    }

    /// DAVRANISLARI
    
    soru_tipi_ver(){

    }

    /// GETTER

    get_Ders(){
        return Ders
    }
    
    get_KonuAdi(){
        return KonuAdi
    }

    get_SoruTipleri(){
        return SoruTipleri
    }

    /// SETTER

    set_Ders(Ders){
        this.Ders = Ders
    }

    set_KonuAdi(KonuAdi){
        this.KonuAdi = KonuAdi
    }

    set_SoruTipleri(SoruTipleri){
        this.SoruTipleri = SoruTipleri
    }
    
    
}
