

import { Router } from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as crypto from 'crypto';

// database den User çağır
	// siteye girmeye izin verirken kontrol edilmesi gerek
import { Kullanici } from "../db";
const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

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

router.get("/", (req, res) => {
	return res.render("login");
});

router.get("/exit", (req, res) => {
	req.logout();
	res.redirect("/")
});


router.post("/", (req, res, next) => {
	console.log("Authantication is started!!");
	passport.authenticate("local", (error: any, kullanici: any, info: any) => {
		if (error) {
			console.log("Error on auth: ", error)
			return res.redirect("/login");
		} else if (!kullanici) {
			console.log("No user!")
			return res.redirect("/login");
		} else {
			console.log("Login...")
			return req.login(kullanici, function (err) {
				if (err) {
					console.log("Error on auth: ", err)
					return next(err);
				}
				req.session.save(function(){
					return res.redirect("/soru-takvimi");
				});

			});
		}
	})(req, res);
});

export default router;
export { passport, protect };
