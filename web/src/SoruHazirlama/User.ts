
export class User{

    constructor(private İsim:string,private Soyİsim:string,private Email:string,private Sifre:string){}

    //DAVRANISLARI

    toJSON(){
        let user_json : any = {}
        user_json["isim"] = this.İsim
        user_json["soyisim"] = this.Soyİsim
        user_json["email"] = this.Email
        user_json["sifre"] = this.Sifre
        return user_json

    }
    // GETTER
    get_İsim():string{
        return this.İsim
    }

    get_Soyİsim():string{
        return this.Soyİsim
    }

    get_Email():string{
        return this.Email
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

    set_Email(Email : string){
        this.Email = Email
    }

    set_Sifre(Sifre : string){
        this.Sifre = Sifre
    }



}