import { Router } from "express";
import { kullanici_ekle } from "../db/api";

// Router yapısı
const router = Router();



router.get("/", (req, res) => {
	return res.render("api");
});

router.post("/ogrenci_kayit", async(req, res) => {

    let formVerileri = req.body;
	//console.log("Form İçerikleri: ", formVerileri);

    let yeniKullanici = {
        isim: formVerileri.isim,
        soyisim: formVerileri.soyisim,
        email: formVerileri.email,
        sifre: formVerileri.sifre,
        rol: 'öğrenci',
    }
    await kullanici_ekle(yeniKullanici, (error:any , yeniKullanici:any) => {
        
        if(error){
            console.log("Kullanıcı Eklerken Hata: ",error);
        }else{
            console.log("Yeni Kullanici: ",yeniKullanici);
            res.redirect("/soru-takvimi");
        }
        
    });

});

router.get("/user", async(req, res) => {

    let user = {
        "name": "Emin"
    }
   res.send(user)

});



export default router;
