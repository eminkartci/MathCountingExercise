class SoruTipi{

    /// OZELLIKLER
    Dersler ; // Ders Array
    Konular ; //Konu Array
    SoruYazisi ; // String
    SoruDegiskenleri ; //String Array
    Siklar ; // String Array

    /// YAPILANDIRICI
    constructor(Dersler,Konular,SoruYazisi,SoruDegiskenleri,Siklar){
        this.Dersler = Dersler;
        this.Konular = Konular;
        this.SoruYazisi = SoruYazisi;
        this.SoruDegiskenleri = SoruDegiskenleri;
        this.Siklar = Siklar;

    }

    /// DAVRANISLARI
    
    siklari_ver(){

    }

    degiskenleri_ver(){

    }

    soru_tipi_cozumu(){

    }

    /// GETTER

    get_Dersler(){
        return this.Dersler
    }
    
    get_Konular(){
        return this.Konular
    }
    
    get_SoruYazisi(){
        return this.SoruYazisi
    }

    get_SoruDegiskenleri(){
        return this.SoruDegiskenleri
    }

    get_Siklar(){
        return this.Siklar
    }

    /// SETTER

    set_Dersler(Dersler){
        this.Dersler = Dersler
    }
    
    set_Konular(Konular){
        this.Konular = Konular
    }
    
    set_SoruYazisi(SoruYazisi){
        this.SoruYazisi = SoruYazisi
    }
    
    set_SoruDegiskenleri(SoruDegiskenleri){
        this.SoruDegiskenleri = SoruDegiskenleri
    }
    
    set_Siklar(Siklar){
        this.Siklar = Siklar
    }
    
    
}
