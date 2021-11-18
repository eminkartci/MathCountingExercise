
// import {Ders} from './Ders';
// import {Konu} from './Konu';
// import {Soru} from './Soru';
// import {SoruTipi} from './SoruTipi';
let kiz_ismi    = ["Elif","Açelya","Elvan","Selen","Emin","Eda","Melis","Ceylin","Zeynep","Pelin","Özlem"]
let erkek_ismi  = ["Can","Yiğit","Türkdoğan","Ferhat","Emir","Buğra","Eren","Ertuğrul","Deniz","Durmuş","Arda","Ali","Burak","Sidar","Ömer"]
let sehirler    = ['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce']
let ince_isimler = ["Ahmet","Yiğit"]
let kalın_isimler = ["Can","Ferhat"]
let elementler = ["H","He","Li","Be","B","C","N"]
interface String {
    /**
     * Replace all instances of a substring in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
     */
    replaceAll(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Replace all instances of a substring in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replacer A function that returns the replacement text.
     */
    replaceAll(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
}
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

class Soru{

    /// OZELLİKLERİ
    private SoruTipi    : SoruTipi ; // SoruTipi
    private SoruYazisi  : string    = ""
    private Siklar      : string[]  = [];
    private Degiskenler  = []
    private Cevap       : string    = ""
    private CevapFormulu : string

    private degisken_isimleri : string[] ;
    private degisken_verileri;
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

    // Soru Yazısı alır
    soru_yazisi_al(SoruYazisi : string){
        this.SoruYazisi = SoruYazisi
    }

    // Değişkenleri alır
    degiskenleri_al(Degiskenler){
        this.Degiskenler = Degiskenler
    }

    //Cevap Formülünü al
    cevapFormulu_al(CevapFormulu:string){
        this.CevapFormulu = CevapFormulu
    }

    //Şıkları oluştur
    siklari_oluştur(){
        // sıkları tutan bir liste yap
        let new_Siklar = []

        // 5 tane şık olana kadar döndür
        while(new_Siklar.length < 5){

            
            let degisken_ismi = ""
            let degisken_verisi // double
            let new_option = this.CevapFormulu // cevap formulu string tutuyor

            // butun degisken isimlerini dondur
            for(let i = 0 ;i < this.degisken_isimleri.length;i++){

                //Değişken ismini ve veri type'ını bul
                degisken_ismi = this.degisken_isimleri[i]
                degisken_verisi = this.Degiskenler[degisken_ismi]

                //Değişken verisini ver
                    // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
                    // 0 --> minimum sayı
                    // 1 --> maksimum sayi
                    // 2 --> katsayı
                if(degisken_verisi instanceof Array && degisken_verisi.length == 3){

                    degisken_verisi = Math.floor(Math.random()*degisken_verisi[1]+degisken_verisi[0])*degisken_verisi[2]
                    new_option = new_option.replaceAll("|"+degisken_ismi+"|",degisken_verisi)
                }

            }
            new_option = eval(new_option).toString()
            if(new_Siklar.length == 0){
                new_Siklar.push(new_option)
            }
            // Option ekle
            let onceden_eklenmis_mi = false
            for(let j = 0;j < new_Siklar.length;j++){
                if(new_option == new_Siklar[j]){
                    onceden_eklenmis_mi = true
                }
            }
            if(onceden_eklenmis_mi==false){
                new_Siklar.push(new_option)
            }

        }
    this.Siklar = new_Siklar
    }

    //Sorunun cevabını hesaplar
        // Şimdilik cevap sadece formülle hesaplanabilir sorular için geçerli
    cevabi_hesapla(CevapFormulu){
        //cevap formülünü degisken verileri ile değiştir
        for(let i =0 ;i < this.degisken_isimleri.length;i++){
            CevapFormulu = CevapFormulu.replaceAll("|"+this.degisken_isimleri[i]+"|",this.degisken_verileri[i])
        }
        this.Cevap = eval(CevapFormulu)
    }
    
    //Cevabı şıkların içine rastgele yerleştirir
    cevabi_siklara_yerlestir(){
        for(let i = 0;i<this.Siklar.length;i++){
            if(this.Siklar[i] == this.Cevap.toString()){
                return
            }
        }
        this.Siklar[Math.floor(this.Siklar.length*Math.random())] = this.Cevap.toString()
    }

    //Soru içindeki değişkenlere değerler verir
    degiskenlere_deger_ver(){

        // Değişiken isimlerini ve verilerini diğer fonksiyonlarda kullanabilmek için arraye ekliyoruz
        this.degisken_isimleri = []
        this.degisken_verileri = []

        let degisken_ismi = ""
        let degisken_verisi

        for(let i = 0 ;i< Object.keys(this.Degiskenler).length;i++){

            //Değişken ismini ve veri type'ını bul
            degisken_ismi = Object.keys(this.Degiskenler)[i]
            degisken_verisi = this.Degiskenler[degisken_ismi]

            //Değişken verisini ver
            if(degisken_verisi == "name-kiz"){
                degisken_verisi = kiz_ismi[Math.floor(Math.random()*kiz_ismi.length)]
            }else if(degisken_verisi == "name-erkek"){
                degisken_verisi = erkek_ismi[Math.floor(Math.random()*erkek_ismi.length)]
            }else if(degisken_verisi == "sehir"){
                degisken_verisi = sehirler[Math.floor(Math.random()*sehirler.length)]
            }else if(degisken_verisi == "name-kalin"){
                degisken_verisi = kalın_isimler[Math.floor(Math.random()*kalın_isimler.length)]
            }else if(degisken_verisi == "name-ince"){
                degisken_verisi = ince_isimler[Math.floor(Math.random()*ince_isimler.length)]
            }
                // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
                // 0 --> minimum sayı
                // 1 --> maksimum sayi
                // 2 --> katsayı
            else if(degisken_verisi instanceof Array && degisken_verisi.length == 3){
                degisken_verisi = Math.floor(Math.random()*degisken_verisi[1]+degisken_verisi[0])*degisken_verisi[2]
            }

            //değişken ismini ve verisini arraye ekle
            this.degisken_isimleri.push(degisken_ismi)
            this.degisken_verileri.push(degisken_verisi)

            // Soru yazısını güncelle
            this.SoruYazisi = this.SoruYazisi.replaceAll("|"+degisken_ismi+"|",degisken_verisi)
        }
    }

    soru_hazirla(){

        // Soru tipi şimdilik rastgele alınıyor
        this.soru_tipi_al(this.Konu.soru_tipi_ver( Math.floor(Math.random()*this.Konu.get_SoruTipleri.length) ));
        // Soru yazısını sorutipinden al
        this.soru_yazisi_al(this.SoruTipi.get_SoruYazisi());
        // Değişkenleri sorutipinden al
        this.degiskenleri_al(this.SoruTipi.get_SoruDegiskenleri());
        // Cevap Formülünü sorutipinden al
        this.cevapFormulu_al(this.SoruTipi.get_CevapFormulu());
        //Soru yazısını günceller ve değiken arraylerini doldurur
        this.degiskenlere_deger_ver();
        // Şıkları sorutipinden al
        this.siklari_al(this.SoruTipi.get_Siklar());
        // Şıkları Oluştur
        this.siklari_oluştur()
        //Cevabı hesaplar
        this.cevabi_hesapla(this.CevapFormulu);
        //Cevabı Şıklara yerleştirir
        this.cevabi_siklara_yerlestir();

    }

    

    toCSV(){

    }

    toHTML(){

    }

    /// TO_STRING()
    toString(){
        let content = `
Soru :
${this.get_SoruYazisi()}

A) ${this.get_Siklar_index(0)}
B) ${this.get_Siklar_index(1)}
C) ${this.get_Siklar_index(2)}
D) ${this.get_Siklar_index(3)}
E) ${this.get_Siklar_index(4)}

CEVAP: ${this.get_Cevap()}
        `

        return content
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

    get_Siklar_index(index : number):string{
        return this.Siklar[index]
    }

    get_Degiskenler() : string[]{
        return this.Degiskenler;
    }

    get_Cevap() : string{
        return this.Cevap;
    }

    get_SoruYazisi(){
        return this.SoruYazisi
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

class SoruTipi{

    /// OZELLIKLER
    /// YAPILANDIRICI
    constructor(private Dersler : Ders[],private Konular:Konu[],private SoruYazisi:string,private SoruDegiskenleri,private Siklar:string[],private CevapFormulu : string){

    }

    /// DAVRANISLARI
    soru_tipi_cozumu(){
        return this.CevapFormulu;
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

    get_SoruDegiskenleri(){
        return this.SoruDegiskenleri
    }

    get_Siklar() : string[]{
        return this.Siklar
    }

    get_CevapFormulu():string{
        return this.CevapFormulu
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
    
    set_SoruDegiskenleri(SoruDegiskenleri){
        this.SoruDegiskenleri = SoruDegiskenleri
    }

    add_SoruDegiskeni(add_SoruDegiskeni){
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
yas_problemi.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen |isim| , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in |sayi1| elbise , |sayi2| gömlek ve |sayi3| pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",{"isim":"name-kiz","sayi1":[1,5,1],"sayi2":[1,5,1],"sayi3":[1,5,1]},["30","28","15","1"],"|sayi1|+|sayi2|*|sayi3|")
matematik.add_Konu(yas_problemi)

// let yazim_kurallari = new Konu(turkce,"Yazım Kuralları")
// yazim_kurallari.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Emin"],["10","11","8","7"])
// turkce.add_Konu(yazim_kurallari)

let hareket_hiz     = new Konu(fizik,"Hareket-Hız")
hareket_hiz.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hızı kaç km/h'tir?",{"isim1":"name-erkek","isim2":"name-ince","sayi1":[1,10,10],"sayi2":[5,15,10]},["30","28","15","1"],"|sayi1|+|sayi2|")
fizik.add_Konu(hareket_hiz)

// let sabit_oranlar_kanunu = new Konu(kimya,"Sabit Oranlar Kanunu")
// sabit_oranlar_kanunu.soru_tipi_olustur("Doğu yönünde |sayi1|km/h hızla giden |isim1|, batı yönünden |sayi2|km/h hızla ile gelen |isim2| ile karşılaşıyor. Buna göre |isim2|'ye göre |isim1|'in hızı kaç km/h'tir?",{"isim1":"name-erkek","isim2":"name-ince","sayi1":[1,10,10],"sayi2":[5,15,10]},["30","28","15","1"],"|sayi1|+|sayi2|")
// kimya.add_Konu(sabit_oranlar_kanunu)

// let mitoz_bolunme = new Konu(biyoloji,"Mitoz Bölünme")
// mitoz_bolunme.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Mehmet"],["10","11","8","7"])
// biyoloji.add_Konu(mitoz_bolunme)

// let ilk_turk_beylikleri = new Konu(tarih,"İlk Türk Beylikleri")
// ilk_turk_beylikleri.soru_tipi_olustur("Arkadaşlarıyla dışarıya çıkmak isteyen Ayşe , dışarıya çıkarken elbise veya gömlek ve pantolon giymek istiyor.Ayşe'in 5 elbise , 2 gömlek ve 3 pantolonu olduğuna göre kaç farklı şekilde giyinebilir ?",["Hatice"],["10","11","8","7"])
// tarih.add_Konu(ilk_turk_beylikleri)


/////////////// SORULAR ///////////////

let matematik_sorusu    = new Soru(matematik,yas_problemi)
// let turkce_sorusu       = new Soru(turkce,yazim_kurallari)
let fizik_sorusu        = new Soru(fizik,hareket_hiz)
// let kimya_sorusu        = new Soru(kimya,sabit_oranlar_kanunu)
// let biyoloji_sorusu     = new Soru(biyoloji,mitoz_bolunme)
// let tarih_sorusu        = new Soru(tarih,ilk_turk_beylikleri)



// console.log("/*-------------------------------------*\\")
// console.log("")
// console.log("MATEMATİK KONULAR : " , matematik.get_Konular())
// console.log("TÜRKÇE    KONULAR : " , turkce.get_Konular())
// console.log("FİZİK     KONULAR : " , fizik.get_Konular())
// console.log("KİMYA     KONULAR : " , kimya.get_Konular())
// console.log("BİYOLOJİ  KONULAR : " , biyoloji.get_Konular())
// console.log("TARİH     KONULAR : " , tarih.get_Konular())
// console.log("")
// console.log("/*-------------------------------------*\\")
// console.log("")
// console.log("/*-------------------------------------*\\")

console.log("")
console.log("-----------MATEMATİK------------")
console.log(matematik_sorusu.toString())
console.log("")
console.log("-----------FİZİK ------------")
console.log(fizik_sorusu.toString())

// console.log("-----------KİMYA ------------")
// console.log("Soru: \n" , fizik_sorusu.get_SoruYazisi())
// console.log("A) " , fizik_sorusu.get_Siklar_index(0))
// console.log("B) " , fizik_sorusu.get_Siklar_index(1))
// console.log("C) " , fizik_sorusu.get_Siklar_index(2))
// console.log("D) " , fizik_sorusu.get_Siklar_index(3))
// console.log("Cevap : \n",fizik_sorusu.get_Cevap())
// console.log("TÜRKÇE    SORUSU : " , turkce_sorusu)
// console.log("FİZİK     SORUSU : " , fizik_sorusu)
// console.log("KİMYA     SORUSU : " , kimya_sorusu)
// console.log("BİYOLOJİ  SORUSU : " , biyoloji_sorusu)
// console.log("TARİH     SORUSU : " , tarih_sorusu)
// console.log("")
// console.log("/*-------------------------------------*\\")
