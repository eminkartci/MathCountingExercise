import {Ders} from './Ders';
import {Konu} from './Konu';
import {SoruTipi} from './SoruTipi';

export class Soru{

    /// OZELLİKLERİ
    private SoruTipi    : SoruTipi ; // SoruTipi
    private Siklar      : string[];
    private Degiskenler : string[]
    private Cevap       : string
    /// YAPILANDIRICI

    constructor(private Ders:Ders,private Konu:Konu){
        this.soru_hazirla();
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

    set_Degiskenler(Degiskenler : string[]){
        this.Degiskenler = Degiskenler;
    }

    add_Degisken(Degisken : string){
        this.Degiskenler.push(Degisken)
    }

    set_Cevap(Cevap : string){
        this.Cevap = Cevap;
    }





}
