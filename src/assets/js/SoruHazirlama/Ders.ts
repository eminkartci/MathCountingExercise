class Ders{

    /// OZELLİKLERİ
    
    /// YAPILANDIRICI

    constructor(private DersAdi:string,private Konular:Konu[]){
    }

    /// DAVRANIŞLARI


    /// GETTER
    get_DersAdi() : string{
        return this.DersAdi;
    }
    
    /// SETTER
    set_DersAdi(DersAdi : string){
        this.DersAdi = DersAdi;
    }

    set_Konular(Konular : Konu[]){
        this.Konular = Konular;
    }

    add_Konular(Konu : Konu){
        this.Konular.push(Konu)
    }

}
