class Konu{

    /// OZELLIKLER
    private SoruTipleri : SoruTipi[]; // SoruTipi Array

    /// YAPILANDIRICI
    constructor(private Ders:Ders , private KonuAdi : string){
        this.soru_tipi_olustur();
    }

    /// DAVRANISLARI

    soru_tipi_ver() : SoruTipi[]{
        return this.SoruTipleri
    }

    soru_tipi_olustur(){
        this.SoruTipleri = [new SoruTipi([this.Ders],[this],"Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Ayşe"],["10","11","8","7"])]
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

    add_SoruTipleri(SoruTipi:SoruTipi){
        this.SoruTipleri.push(SoruTipi)
    }
    
    
}

