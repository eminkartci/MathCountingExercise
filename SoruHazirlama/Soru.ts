import {Ders} from './Ders';
import {Konu} from './Konu';
import {SoruTipi} from './SoruTipi';

export class Soru{

    /// OZELLİKLERİ
    private SoruTipi    : SoruTipi ; // SoruTipi
    private SoruYazisi  : string = ""
    private Siklar      : string[] = [];
    private Degiskenler  = []
    private Cevap       : string = ""
    /// YAPILANDIRICI

    constructor(private Ders:Ders,private Konu:Konu){
        this.soru_hazirla();
    }

    /// DAVRANIŞLARI

    // Sorutipini alır
    soru_tipi_al(SoruTipi : SoruTipi){
        this.SoruTipi = SoruTipi
    }

    // Soru Yazısı alır
    soru_yazisi_al(SoruYazisi : string){
        this.SoruYazisi = SoruYazisi
    }

    // Şıkları alır
    siklari_al(Siklar : string[]){
        this.Siklar = Siklar
    }

    // Değişkenleri alır
    degiskenleri_al(Degiskenler){
        this.Degiskenler = Degiskenler
    }

    //Sorunun cevabını hesaplar
        // Şimdilik cevap hesaplanmıyor
    cevabi_hesapla(){
        this.Cevap = "hello world : cevap"
    }
    
    //Cevabı şıkların içine rastgele yerleştirir
    cevabi_siklara_yerlestir(){
        this.Siklar[Math.floor(this.Siklar.length*Math.random())] = this.Cevap
    }

    //Soru içindeki değişkenlere değerler verir
    degiskenlere_deger_ver(){
        console.log(this.Degiskenler)
    }

    soru_hazirla(){

        // Soru tipi şimdilik rastgele alınıyor
        this.soru_tipi_al(this.Konu.soru_tipi_ver( Math.floor(Math.random()*this.Konu.get_SoruTipleri.length) ));
        // Soru yazısını sorutipinden al
        this.soru_yazisi_al(this.SoruTipi.get_SoruYazisi());
        // Şıkları sorutipinden al
        this.siklari_al(this.SoruTipi.get_Siklar());
        // Değişkenleri sorutipinden al
        this.degiskenleri_al(this.SoruTipi.get_SoruDegiskenleri());
        //Cevabı hesaplar
        this.cevabi_hesapla();
        //Cevabı Şıklara yerleştirir
        this.cevabi_siklara_yerlestir();

        this.degiskenlere_deger_ver();
    }

    

    toCSV(){

    }

    toHTML(){

    }

    /// TO_STRING()
    toString(){

    }
    /// GETTER
    get_Ders() : Ders{
        return this.Ders;
    }

    get_Konu() : Konu{
        return this.Konu;
    }

    get_SoruTipi() : SoruTipi{
        return this.SoruTipi;
    }

    get_Siklar() : string[]{
        return this.Siklar;
    }

    get_Degiskenler() : string[]{
        return this.Degiskenler;
    }

    get_Cevap() : string{
        return this.Cevap;
    }


    /// SETTER
    set_Ders(Ders : Ders){
        this.Ders = Ders;
    }

    set_Konu(Konu : Konu){
        this.Konu = Konu;
    }

    set_SoruTipi(SoruTipi : SoruTipi){
        this.SoruTipi = SoruTipi;
    }

    set_Siklar(Siklar : string[]){
        this.Siklar = Siklar;
    }

    add_Sik(Sik : string){
        this.Siklar.push(Sik)
    }

    set_Degiskenler(Degiskenler){
        this.Degiskenler = Degiskenler;
    }

    add_Degisken(Degisken){
        this.Degiskenler.push(Degisken)
    }

    set_Cevap(Cevap : string){
        this.Cevap = Cevap;
    }





}
