class Soru{

    /// OZELLİKLERİ
    DersAdi = ""
    Konu ;
    SoruTipi ;
    Siklar  = []
    Degiskenler = []
    Cevap = ""
    /// YAPILANDIRICI

    constructor(DersAdi , Konu){
        this.DersAdi = DersAdi;
        this.Konu = Konu;
        soru_hazirla();
    }

    /// DAVRANIŞLARI

    soru_tipi_al(){

    }

    siklari_al(){

    }

    degiskenleri_al(){

    }

    cevabi_hesapla(){

    }
    
    cevabi_siklara_yerlestir(){

    }

    soru_hazirla(){
        this.soru_tipi_al();
        this.siklari_al();
        this.degiskenleri_al();
        this.cevabi_hesapla();
        this.cevabi_siklara_yerlestir();
    }

    toCSV(){

    }

    toHTML(){

    }

    /// TO_STRING()
    toString(){

    }
    /// GETTER
    get_DersAdi(){
        return this.DersAdi;
    }

    get_Konu(){
        return this.Konu;
    }

    get_SoruTipi(){
        return this.SoruTipi;
    }

    get_Siklar(){
        return this.Siklar;
    }

    get_Degiskenler(){
        return this.Degiskenler;
    }

    get_Cevap(){
        return this.Cevap;
    }
    /// SETTER
    set_DersAdi(DersAdi){
        this.DersAdi = DersAdi;
    }

    set_Konu(Konu){
        this.Konu = Konu;
    }

    set_SoruTipi(SoruTipi){
        this.SoruTipi = SoruTipi;
    }

    set_Siklar(Siklar){
        this.Siklar = Siklar;
    }

    set_Degiskenler(Degiskenler){
        this.Degiskenler = Degiskenler;
    }

    set_Cevap(Cevap){
        this.Cevap = Cevap;
    }





}

// let soru_tipi_1 = new SoruTipi(["Matematik","Fikzik"],)
// let yas_problemi = new Konu("Matematik","Yaş Problemi",[soru_tipi_1])
// let matematik_soru = new Soru("Matematik",yas_problemi)