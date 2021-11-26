

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
const findByOkulNo = async (okul_no: any, fn: any) => {
	// Bulmaya Çalış
	try {
		// "findOne" ile username olan satırı bul
		const kullanici = await Kullanici.findOne({
			where: { okul_no:okul_no },
		});

		console.log(kullanici)

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
	done(null, kullanici.okul_no);
});

passport.deserializeUser(async (okul_no: any, done: any) => {
	try {
		await findByOkulNo(okul_no, (error: any, kullanici: any) => {
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
	new LocalStrategy(async (okul_no, password, done) => {
		try {
			const kullanici: any = await Kullanici.findOne({ where: { okul_no:okul_no } });
			if (!kullanici) {
				console.log("Kullanici Bulunamadi!")
				return done(null, false);
			}

			//! HIGHLY DANGEROUS
			if (kullanici.sifre !== password) {
				console.log("Kullanici Bilgileri Eşleşmedi!")
				return done(null, false);
			}

			return done(null, kullanici);
		} catch (err) {
			return done(err);
		}
	})
);

router.get("/exit", (req, res) => {
	req.logout();
	return res.redirect("/");
});


router.post("/", (req, res, next) => {

	//console.log("Form Verileri:",req.body);

	passport.authenticate("local", (error: any, kullanici: any, info: any) => {
		if (error) {
			return res.redirect("/login");
		} else if (!kullanici) {
			return res.redirect("./login");
		} else {
			return req.login(kullanici, function (err) {
				if (err) {
					return next(err);
				}
				//console.log("Giriş Başarılı!")
				return res.redirect("/profil");
			});
		}
	})(req, res);
});

export default router;
export { passport, protect };
