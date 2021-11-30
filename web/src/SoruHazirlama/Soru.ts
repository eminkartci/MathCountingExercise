
import {Ders} from './Ders';
import {Konu} from './Konu';
import {SoruTipi} from './SoruTipi';
import {kiz_ismi,erkek_ismi,sehirler,ince_isimler,kalin_isimler,elementler,yazim_hatali_cumle,yazim_hatasiz_cumle,mitoz_evre,katli_oranlar_uygulanabilir_bilesikleri} from './Database';

export class Soru{

    /// OZELLİKLERİ
    private SoruTipi    : any ; // SoruTipi
    private SoruYazisi  : string    = ""
    private Siklar      : string[]  = [];
    private Degiskenler :any[]=[]
    private Cevap       : string    = ""
    private CevapFormulu : string   = ""

    private degisken_isimleri : any[]=[];
    private degisken_verileri : any[] =[];
    private CevapSikki : string = ""
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
    degiskenleri_al(Degiskenler : any){
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

            
            let degisken_ismi :any = ""
            let degisken_verisi : any // double
            let new_option = this.CevapFormulu // cevap formulu string tutuyor

            //Bütün şıkları döndürür
            for(let x = 0;x<this.Siklar.length;x++){

                // console.log("THİS DĞEİŞKEN İSMİ  :",this.degisken_isimleri)
                // console.log(" THİS DĞEİŞKEN VERİSİ:",this.degisken_verileri)
                // butun degisken isimlerini dondur
                for(let i = 0 ;i < this.degisken_isimleri.length;i++){

                    //Değişken ismini ve veri type'ını bul
                    degisken_ismi = this.degisken_isimleri[i]
                    degisken_verisi = this.Degiskenler[degisken_ismi]

                    // console.log("DĞEİŞKEN İSMİ  :",degisken_ismi)
                    // console.log("DĞEİŞKEN VERİSİ:",degisken_verisi)


                    //Değişken verisini ver
                        // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
                        // 0 --> minimum sayı
                        // 1 --> maksimum sayi
                        // 2 --> katsayı
                    if(degisken_verisi instanceof Array && degisken_verisi.length == 3){

                            let degisken_ilk_ismi : any = ""
                            let degisken_ilk_verisi : any = ""
                        try{
                            for(let i = 0 ;i< Object.keys(this.get_Degiskenler()).length;i++){
                                degisken_ilk_ismi = Object.keys(this.get_Degiskenler())[i]
                                degisken_ilk_verisi  = this.get_Degiskenler()[degisken_ilk_ismi]
                                

                                // degisken_verisi[2]=degisken_ilk_verisi[2].split("|"+degisken_ilk_ismi+"|").join(degisken_ilk_ismi.toString())
                                // degisken_verisi[2] = eval(degisken_verisi[2])
                                
                            }
                        }catch(e){
                            // console.log("Hata,",e)
                        }

                        let random_maximum = degisken_verisi[1]
                        let random_minimum = degisken_verisi[0]
                        let random_katsayi = degisken_verisi[2]
                        degisken_verisi = Math.floor(Math.random() * (random_maximum-random_minimum) + random_minimum)*random_katsayi

                        new_option= new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }
                    else if(this.Siklar[x] == "name-kiz"){
                        degisken_verisi = kiz_ismi[Math.floor(Math.random()*kiz_ismi.length)]

                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "name-erkek"){
                        degisken_verisi = erkek_ismi[Math.floor(Math.random()*erkek_ismi.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "sehir"){
                        degisken_verisi = sehirler[Math.floor(Math.random()*sehirler.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "name-kalin"){
                        degisken_verisi = kalin_isimler[Math.floor(Math.random()*kalin_isimler.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "name-ince"){
                        degisken_verisi = ince_isimler[Math.floor(Math.random()*ince_isimler.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "yazim-hatasiz-cumle"){
                        degisken_verisi = yazim_hatasiz_cumle[Math.floor(Math.random()*yazim_hatasiz_cumle.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "yazim-hatali-cumle"){
                        degisken_verisi = yazim_hatali_cumle[Math.floor(Math.random()*yazim_hatali_cumle.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "mitoz-evre"){
                        degisken_verisi = mitoz_evre[Math.floor(Math.random()*mitoz_evre.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }else if(this.Siklar[x] == "katli-oranlar-uygulanabilir-bilesikleri"){
                        degisken_verisi = katli_oranlar_uygulanabilir_bilesikleri[Math.floor(Math.random()*katli_oranlar_uygulanabilir_bilesikleri.length)]
                        new_option = new_option.split("|"+degisken_ismi+"|").join(degisken_verisi)
                    }


                }
            }
            try{
                new_option = eval(new_option).toString()
                // console.log("new_option",new_option)
            }catch(e){
                // console.log("HATA",e)
            }
            if(new_Siklar.length == 0){
                new_Siklar.push(new_option)
                // console.log(new_Siklar)

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
    cevabi_hesapla(CevapFormulu:string){
        //cevap formülünü degisken verileri ile değiştir
        for(let i =0 ;i < this.degisken_isimleri.length;i++){
            // CevapFormulu = CevapFormulu.replace("|"+this.degisken_isimleri[i]+"|",this.degisken_verileri[i])
            // console.log("Degisken İsmi",this.degisken_isimleri[i])
            // console.log("Degisken verisi",this.degisken_verileri[i])
            CevapFormulu = CevapFormulu.split("|"+this.degisken_isimleri[i]+"|").join(this.degisken_verileri[i])  
        }
        try {
            this.Cevap = eval(CevapFormulu)
        } catch (e) {
            this.Cevap =CevapFormulu
        }
    }
    
    //Cevabı şıkların içine rastgele yerleştirir
    cevabi_siklara_yerlestir(){
        let siklar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z"]

        for(let i = 0;i<this.Siklar.length;i++){
            if(this.Siklar[i] == this.Cevap.toString()){
                this.CevapSikki = siklar[i]
                return
            }
        }
        let option_index = Math.floor(this.Siklar.length*Math.random())
        this.CevapSikki = siklar[option_index]
        this.Siklar[option_index] = this.Cevap.toString()
    }

    //Soru içindeki değişkenlere değerler verir
    degiskenlere_deger_ver(){

        // Değişiken isimlerini ve verilerini diğer fonksiyonlarda kullanabilmek için arraye ekliyoruz
        this.degisken_isimleri = []
        this.degisken_verileri = []

        for(let i = 0 ;i< Object.keys(this.Degiskenler).length;i++){

            //Değişken ismini ve veri type'ını bul
            let degisken_ismi : any = Object.keys(this.Degiskenler)[i]
            let degisken_verisi : any = this.Degiskenler[degisken_ismi]

            //Değişken verisini ver
            if(degisken_verisi == "name-kiz"){
                degisken_verisi = kiz_ismi[Math.floor(Math.random()*kiz_ismi.length)]
            }else if(degisken_verisi == "name-erkek"){
                degisken_verisi = erkek_ismi[Math.floor(Math.random()*erkek_ismi.length)]
            }else if(degisken_verisi == "sehir"){
                degisken_verisi = sehirler[Math.floor(Math.random()*sehirler.length)]
            }else if(degisken_verisi == "name-kalin"){
                degisken_verisi = kalin_isimler[Math.floor(Math.random()*kalin_isimler.length)]
            }else if(degisken_verisi == "name-ince"){
                degisken_verisi = ince_isimler[Math.floor(Math.random()*ince_isimler.length)]
            }else if(degisken_verisi == "yazim-hatasiz-cumle"){
                degisken_verisi = yazim_hatasiz_cumle[Math.floor(Math.random()*yazim_hatasiz_cumle.length)]
            }else if(degisken_verisi == "yazim-hatali-cumle"){
                degisken_verisi = yazim_hatali_cumle[Math.floor(Math.random()*yazim_hatali_cumle.length)]
            }else if(degisken_verisi == "mitoz-evre"){
                degisken_verisi = mitoz_evre[Math.floor(Math.random()*mitoz_evre.length)]
            }else if(degisken_verisi == "katli-oranlar-uygulanabilir-bilesikleri"){
                degisken_verisi = katli_oranlar_uygulanabilir_bilesikleri[Math.floor(Math.random()*katli_oranlar_uygulanabilir_bilesikleri.length)]
            }

                // degisken_verisi arrayinin 3 verisi olmasının nedeni , option range tutması
                // 0 --> minimum sayı
                // 1 --> maksimum sayi
                // 2 --> katsayı
            else if(degisken_verisi instanceof Array && degisken_verisi.length == 3){
                try{

                    for(let a=0;a<this.degisken_isimleri.length;a++){
                        degisken_verisi[2] = degisken_verisi[2].split("|"+this.degisken_isimleri[a]+"|").join(this.degisken_verileri[a].toString())
                        degisken_verisi[2] = eval(degisken_verisi[2])
                        
                    }
                }catch(e){
                    // console.log("Hata,",e)
                }
                let random_maximum = degisken_verisi[1]
                let random_minimum = degisken_verisi[0]
                let random_katsayi = degisken_verisi[2]
                degisken_verisi = Math.floor(Math.random() * (random_maximum-random_minimum) + random_minimum)*random_katsayi

            }else{
                degisken_verisi == degisken_verisi
            }

            //değişken ismini ve verisini arraye ekle
            this.degisken_isimleri.push(degisken_ismi)
            this.degisken_verileri.push(degisken_verisi)

            // Soru yazısını güncelle
            // this.SoruYazisi = this.SoruYazisi.replace("|"+degisken_ismi+"|",degisken_verisi)
            this.SoruYazisi = this.SoruYazisi.split("|"+degisken_ismi+"|").join(degisken_verisi)
        }
    }

    soru_hazirla(){

        // Soru tipi şimdilik rastgele alınıyor
        this.soru_tipi_al(this.Konu.get_randomly_SoruTipi());
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

    toJSON(){
        let Soru_json : any= {}
        Soru_json["Ders"] = this.Ders.toJSON()
        Soru_json["Konu"] = this.Konu.toJSON()
        Soru_json["SoruYazisi"] = this.SoruYazisi
        Soru_json["Siklar"] = this.Siklar
        Soru_json["Degiskenler"] = this.Degiskenler
        Soru_json["Cevap"] = this.Cevap
        Soru_json["CevapFormulu"] = this.CevapFormulu
        Soru_json["degisken_isimleri"] = this.degisken_isimleri
        Soru_json["degisken_verileri"] = this.degisken_verileri
        Soru_json["SoruTipi"] = this.SoruTipi.toJSON()
        Soru_json["CevapSikki"] = this.CevapSikki
        return Soru_json
    }

    toCSV(){

    }

    toHTML(cevap_yazdirilsin_mi:boolean){
        if(cevap_yazdirilsin_mi==true){
            let content = `<p style="color:red"> ${this.get_SoruYazisi()} <br></p><br> A) ${this.get_Siklar_index(0)} <br> B) ${this.get_Siklar_index(1)} <br> C) ${this.get_Siklar_index(2)} <br> D) ${this.get_Siklar_index(3)} <br> E) ${this.get_Siklar_index(4)} <br>  <br> CEVAP: ${this.get_CevapSikki()}`
            return content
        }else{
            let content = `<p style="color:red"> ${this.get_SoruYazisi()} <br></p><br> A) ${this.get_Siklar_index(0)} <br> B) ${this.get_Siklar_index(1)} <br> C) ${this.get_Siklar_index(2)} <br> D) ${this.get_Siklar_index(3)} <br> E) ${this.get_Siklar_index(4)} <br><br>`
            return content
        }
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

CEVAP: ${this.get_CevapSikki()}`

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

    get_CevapSikki() : string{
        return this.CevapSikki;
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

    set_Degiskenler(Degiskenler:any){
        this.Degiskenler = Degiskenler;
    }

    add_Degisken(Degisken:any){
        this.Degiskenler.push(Degisken)
    }

    set_Cevap(Cevap : string){
        this.Cevap = Cevap;
    }





}