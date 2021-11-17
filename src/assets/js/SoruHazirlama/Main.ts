
// import {Ders} from './Ders';
// import {Konu} from './Konu';
// import {Soru} from './Soru';
// import {SoruTipi} from './SoruTipi';

/////////////// EXPORT ////////////////
class Ders{

    /// OZELLİKLERİ
    private Konular : Konu[] = [];
    /// YAPILANDIRICI

    constructor(private DersAdi:string){
    }

    /// DAVRANIŞLARI


    /// GETTER
    get_DersAdi() : string{
        return this.DersAdi;
    }

    get_Konular() : Konu[]{
        return this.Konular
    }
    
    get_Konular_index(index) : Konu{
        return this.Konular[index]
    }
    
    /// SETTER
    set_DersAdi(DersAdi : string){
        this.DersAdi = DersAdi;
    }

    set_Konular(Konular : Konu[]){
        this.Konular = Konular;
    }

    add_Konu(Konu : Konu){
        this.Konular.push(Konu)
    }

}

class Konu{



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
    soru_tipi_olustur(SoruYazisi : string,SoruDegiskenleri : string[],Siklar : string[]){
        this.SoruTipleri = [new SoruTipi([this.Ders],[this],SoruYazisi,SoruDegiskenleri,Siklar)]
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

class Soru{

    /// OZELLİKLERİ
    private SoruTipi    : SoruTipi ; // SoruTipi
    private Siklar      : string[] = [];
    private Degiskenler : string[] = []
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

    // Şıkları alır
    siklari_al(Siklar : string[]){
        this.Siklar = Siklar
    }

    // Değişkenleri alır
    degiskenleri_al(Degiskenler : string[]){
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

    soru_hazirla(){

        // Soru tipi şimdilik rastgele alınıyor
        this.soru_tipi_al(this.Konu.soru_tipi_ver( Math.floor(Math.random()*this.Konu.get_SoruTipleri.length) ));
        // Şıkları sorutipinden al
        this.siklari_al(this.SoruTipi.siklari_ver());
        // Değişkenleri sorutipinden al
        this.degiskenleri_al(this.SoruTipi.degiskenleri_ver());
        //Cevabı hesaplar
        this.cevabi_hesapla();
        //Cevabı Şıklara yerleştirir
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

class SoruTipi{

    /// OZELLIKLER
    /// YAPILANDIRICI
    constructor(private Dersler : Ders[],private Konular:Konu[],private SoruYazisi:string,private SoruDegiskenleri:string[],private Siklar:string[]){

    }

    /// DAVRANISLARI
    
    // Şıkları döndürür
    siklari_ver() : string[]{
        return this.Siklar
    }   

    // Soru değişkenlerini döndürür
    degiskenleri_ver() : string[]{
        return this.SoruDegiskenleri
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

    add_Option(option : string){
        this.Siklar.push(option)

    }
    
    
}  


/////////////// DERSLER ///////////////
let matematik   = new Ders("Matematik")
let turkce      = new Ders("Türkçe")
let fizik       = new Ders("Fizik")
let kimya       = new Ders("Kimya")
let biyoloji    = new Ders("Biyoloji")
let tarih       = new Ders("Tarih")


/////////////// KONULAR ///////////////

let yas_problemi    = new Konu(matematik,"Yaş Problemi")
yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["isim","sayi1","sayi2","sayi3"],["10","11","8","7"])
matematik.add_Konu(yas_problemi)

let yazim_kurallari = new Konu(turkce,"Yazım Kuralları")
yazim_kurallari.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Emin"],["10","11","8","7"])
turkce.add_Konu(yazim_kurallari)

let hareket_hiz     = new Konu(fizik,"Hareket-Hız")
hareket_hiz.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Muhammed"],["10","11","8","7"])
fizik.add_Konu(hareket_hiz)

let sabit_oranlar_kanunu = new Konu(kimya,"Sabit Oranlar Kanunu")
sabit_oranlar_kanunu.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Büşra"],["10","11","8","7"])
kimya.add_Konu(sabit_oranlar_kanunu)

let mitoz_bolunme = new Konu(biyoloji,"Mitoz Bölünme")
mitoz_bolunme.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Mehmet"],["10","11","8","7"])
biyoloji.add_Konu(mitoz_bolunme)

let ilk_turk_beylikleri = new Konu(tarih,"İlk Türk Beylikleri")
ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
tarih.add_Konu(ilk_turk_beylikleri)


/////////////// SORULAR ///////////////

let matematik_sorusu    = new Soru(matematik,yas_problemi)
let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
let fizik_sorusu        = new Soru(fizik,hareket_hiz)
let kimya_sorusu        = new Soru(kimya,sabit_oranlar_kanunu)
let biyoloji_sorusu     = new Soru(biyoloji,mitoz_bolunme)
let tarih_sorusu        = new Soru(tarih,ilk_turk_beylikleri)



console.log("/*-------------------------------------*\\")
console.log("")
// console.log("MATEMATİK KONULAR : " , matematik.get_Konular())
// console.log("TÜRKÇE    KONULAR : " , turkce.get_Konular())
// console.log("FİZİK     KONULAR : " , fizik.get_Konular())
// console.log("KİMYA     KONULAR : " , kimya.get_Konular())
// console.log("BİYOLOJİ  KONULAR : " , biyoloji.get_Konular())
// console.log("TARİH     KONULAR : " , tarih.get_Konular())
console.log("")
console.log("/*-------------------------------------*\\")
console.log("")
console.log("/*-------------------------------------*\\")
console.log("")
console.log("MATEMATİK SORUSU : " , matematik_sorusu)
// console.log("TÜRKÇE    SORUSU : " , turkce_sorusu)
// console.log("FİZİK     SORUSU : " , fizik_sorusu)
// console.log("KİMYA     SORUSU : " , kimya_sorusu)
// console.log("BİYOLOJİ  SORUSU : " , biyoloji_sorusu)
// console.log("TARİH     SORUSU : " , tarih_sorusu)
console.log("")
console.log("/*-------------------------------------*\\")
