
export class User{

    constructor(private İsim:string,private Soyİsim:string,private OkulNo:string,private Sifre:string){}

    //DAVRANISLARI

    toJSON(){
        let user_json : any = {}
        user_json["İsim"] = this.İsim
        user_json["Soyİsim"] = this.Soyİsim
        user_json["OkulNo"] = this.OkulNo
        user_json["Sifre"] = this.Sifre
        return user_json

    }
    // GETTER
    get_İsim():string{
        return this.İsim
    }

    get_Soyİsim():string{
        return this.Soyİsim
    }

    get_okulNo():string{
        return this.OkulNo
    }

    get_Sifre():string{
        return this.Sifre
    }

    // SETTER
    set_İsim(İsim : string){
        this.İsim = İsim
    }

    set_Soyİsim(Soyİsim : string){
        this.Soyİsim = Soyİsim
    }

    set_okulNo(OkulNo : string){
        this.OkulNo = OkulNo
    }

    set_Sifre(Sifre : string){
        this.Sifre = Sifre
    }



}