

import { Router } from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// database den User çağır
	// siteye girmeye izin verirken kontrol edilmesi gerek
import { Kullanici } from "../db";

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
			where: { email:email },
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
				//console.log("Kullanici Verileri: ",kullanici.dataValues);
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
			const kullanici: any = await Kullanici.findOne({ where: { email:email } });

			if (!kullanici) {
				//console.log("Kullanici Bulunamadi!")
				return done(null, false);
			}

			//! HIGHLY DANGEROUS
			if (kullanici.sifre !== password) {
				//console.log("Kullanici Bilgileri Eşleşmedi!")
				return done(null, false);
			}

			return done(null, kullanici);
		} catch (err) {
			return done(err);
		}
	})
);

router.get("/", (req, res) => {
	return res.render("anasayfa");
});

router.get("/exit", (req, res) => {
	req.logout();
	return res.redirect("/");
});


router.post("/", (req, res, next) => {

	//console.log("Form Verileri:",req.body);

	passport.authenticate("local", (error: any, kullanici: any, info: any) => {
		if (error) {
			return res.redirect("/hata");
		} else if (!kullanici) {
			return res.redirect("./anasayfa");
		} else {
			return req.login(kullanici, function (err) {
				if (err) {
					return next(err);
				}
				//console.log("Giriş Başarılı!")
				return res.redirect("/ogrenci_paneli");
			});
		}
	})(req, res);
});

export default router;
export { passport, protect };