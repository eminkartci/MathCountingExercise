class SoruTipi{

    /// OZELLIKLER
    /// YAPILANDIRICI
    constructor(private Dersler : Ders[],private Konular:Konu[],private SoruYazisi:string,private SoruDegiskenleri:string[],private Siklar:string[]){

    }

    /// DAVRANISLARI
    
    siklari_ver(){

    }

    degiskenleri_ver(){

    }

    soru_tipi_cozumu(){

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

    get_SoruDegiskenleri() : string[]{
        return this.SoruDegiskenleri
    }

    get_Siklar() : string[]{
        return this.Siklar
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
    
    set_SoruDegiskenleri(SoruDegiskenleri : string[]){
        this.SoruDegiskenleri = SoruDegiskenleri
    }

    add_SoruDegiskeni(add_SoruDegiskeni : string){
        this.SoruDegiskenleri.push(add_SoruDegiskeni)

    }
    
    set_Siklar(Siklar : string[]){
        this.Siklar = Siklar
    }

    add_Sik(Sik : string){
        this.Siklar.push(Sik)

    }
    
    
}