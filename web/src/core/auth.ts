import { Router } from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// database den User çağır
// siteye girmeye izin verirken kontrol edilmesi gerek
import { Kullanici } from "../db";
import {md5} from "../index"

// Router yapısı
const router = Router();
const protect = require("connect-ensure-login").ensureLoggedIn();

// username stünunu içerisinde arama yap
// username parametresi al
const findByUsername = async (email: any, fn: any) => {

	// Bulmaya Çalış
	try {
		// "findOne" ile username olan satırı bul
		const kullanici = await Kullanici.findOne({
			where: { email:email }
		});

		// Eğer bulunduysa o bilgiyi geri gönder
		if (kullanici) return fn(null, kullanici);

		// bulunamadıysa Hata ver -> No user
		return fn(new Error("Kullanıcı Bulunamadı"), null);

	// Süreçte bağlanma sorunu yaşanırsa
	} catch (error) {
		// Hatayı döndür
		return fn(error, null);
	}
};


passport.serializeUser((kullanici: any, done: any) => {
	done(null, kullanici.email);
});

passport.deserializeUser(async (email: any, done: any) => {
	try {
		await findByUsername(email, (error: any, kullanici: any) => {
			if (error) {
				done(error, null);
			} else {
				done(null, kullanici.dataValues);
			}
		});
	} catch (error) {
		done(error, null);
	}
});

passport.use(
	new LocalStrategy(async (email, password, done) => {
		try {
			
			await findByUsername(email, (error: any, kullanici: any) => {
				
				if(error){
					console.log("HATA!",error)
					return done(null, false);
				}

				if (!kullanici) {
					console.log("Kullanici Bulunamadi!")
					return done(null, false);
				}
	
				//! HIGHLY DANGEROUS
				if (kullanici.sifre !== md5(password)) {
					console.log("Kullanici Bilgileri Eşleşmedi!")
					return done(null, false);
				}
				return done(null, kullanici);
			})
				
			
		} catch (err) {
			return done(err);
		}
	})
);

router.get("/", (req, res) => {
	return res.render("login");
});

router.get("/exit", (req, res) => {
	req.logout();
	return res.redirect("/");
});


router.post("/", (req, res, next) => {
	console.log("Auth started...");
	passport.authenticate("local", (error: any, kullanici: any, info: any) => {
		if (error) {
			console.log(error)
			return res.redirect("/login");
		} else if (!kullanici) {
			console.log("kullanici yok")
			return res.redirect("/login");
		} else {
			console.log("Giriş Yapılıyor...")
			return req.login(kullanici, function (err) {
				if (err) {
					return next(err);
				}
				return res.redirect("/anasayfa");
			});
		}
	})(req, res);
});

router.post("/manual", async (req, res, next) => {
	console.log("Manual Auth started...");
	try {
		
	
		let kullanici :any = await Kullanici.findOne({where:{ email:req.body.email }})
		kullanici = kullanici.dataValues
		console.log(kullanici)

		if(kullanici != undefined || kullanici != null){
			if(kullanici.sifre == md5(req.body.sifre)){
				return req.login(kullanici, function (err) {
					if (err) {
						return next(err);
					}
					return res.redirect("/anasayfa");
				});
			}else{
				console.log("Bilgiler Uyuşmadı")
				return
			}
		}else{
			console.log("Kullanıcı yok")
		}
	}
	catch (error) {
		console.log(error)
	}
	
		
});

export default router;
export { passport, protect };