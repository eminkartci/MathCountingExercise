//* Necessary imports
import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import redis from "redis";
import fs from "fs";
import chalk from "chalk"

import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "express-flash"

var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

import * as Main from './SoruHazirlama/Main'
import {Soru} from './SoruHazirlama/Soru'
import {Test} from './SoruHazirlama/Test'
import {User} from './SoruHazirlama/User'
import {Konu} from './SoruHazirlama/Konu'
import {Ders} from './SoruHazirlama/Ders'
import * as crypto from 'crypto';
try {
	require("dotenv").config();
} catch (_) {}

//* CONSTANTS
const PORT = process.env.PORT || 5006;
const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

export {md5} 
//* APP
const app = express();
var engines = require('consolidate');

app.set("views", path.join(__dirname, "views"));
// app.engine('html', engines.mustache);
app.set('view engine', 'ejs');
app.use("/assets", express.static(path.join(__dirname, "assets")));

//* Basic protection
app.use(helmet({
    contentSecurityPolicy: false,
  }));
app.use(cors());

//* Reqeust parsing
app.use(methodOverride());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false,limit: '50mb'}))

app.use(express.json({limit: '50mb'}));

const dev = process.env.NODE_ENV !== "production";

app.use(flash())
//* Manage Session
if (dev) {
	app.use(
		session({
			secret: process.env.SESSION_KEY || "",
			resave: false,
			saveUninitialized: false,
			cookie: {
				secure: false,
				sameSite: "lax",
			},
		})
	);
} else {
	const RedisStore = require("connect-redis")(session);
	const redisClient = redis.createClient(process.env.REDIS_URL || "");
	app.use(
		session({
			store: new RedisStore({ client: redisClient, ttl: 1000 * 60 * 15 }),
			secret: process.env.SESSION_KEY || "",
			resave: false,
			saveUninitialized: false,
			cookie: {
				secure: true,
				sameSite: "none",
			},
		})
	);
}

//* App Start
import sequelize, { Dersler, Konular, Kullanici,SoruTakvimi, SoruTipleri } from "./db";
import authRouter, { passport, protect } from "./core/auth";
import kayitRouter from "./core/kayit"
import apiRouter from "./core/api";
import ogrenciPaneliRouter from "./core/ogrenci_paneli";
import adminPaneliRouter from "./core/admin_paneli";
import { DATE } from "sequelize/types";
import { urlencoded } from "body-parser";

app.use(passport.initialize());
app.use(passport.session());



app.use("/giris_yap", express.urlencoded({ extended: true }), authRouter);
app.use("/kayit_ol",express.urlencoded({ extended: true }), kayitRouter);
app.use("/api",express.urlencoded({ extended: true }), apiRouter);
app.use("/ogrenci_paneli",express.urlencoded({ extended: true }), ogrenciPaneliRouter);
app.use("/admin",express.urlencoded({ extended: true }), adminPaneliRouter);

app.use(authRouter)

app.get("/",protect,(req, res) => {
    res.redirect("danisan.ejs")
});


app.get("/soru-coz",protect,(req, res) => {
    res.render('index.ejs')
});

app.get("/kayit_ol",(req, res) => {
    res.render('register.ejs')
});

app.get("/blank",(req, res) => {
    res.render('blank-page.ejs')
});

app.get("/anasayfa",protect,(req,res)=>{
	res.render("danisan.ejs")
})

app.get("/soru-takvimi",protect,(req,res)=>{
	res.render("soru-takvimi.ejs")
})


app.post("/soru-takvimi/ekle",urlencodedParser, async (req,res)=>{
	let yeni_veri : any = req.query
	SoruTakvimi.create({
		// kullanici_id      		: yeni_veri.kullanici_id,
		kullanici_id      		: req.user.kullanici_id ? req.user.kullanici_id : 1,
		tarih 					: yeni_veri.tarih,
		ders_id					: yeni_veri.ders_id,
		konu_id					: yeni_veri.konu_id,
		toplam_soru_sayisi		: yeni_veri.toplam_soru_sayisi,
		dogru_soru_sayisi		: yeni_veri.dogru_soru_sayisi,
		yanlis_soru_sayisi		: yeni_veri.yanlis_soru_sayisi,
		dakika					: yeni_veri.dakika,
		kisisel_degerlendirme	: yeni_veri.kisisel_degerlendirme
	})

	res.end()
})

app.post("/soru-takvimi/guncelle",urlencodedParser, async (req,res)=>{
	let yeni_veri : any = req.query
	let guncellenecek_soru_takvimi = await SoruTakvimi.findOne({
		 where: {
			  tarih: yeni_veri.tarih, konu_id:yeni_veri.konu_id 
			} 
		})
		
		guncellenecek_soru_takvimi?.setDataValue("toplam_soru_sayisi",yeni_veri.toplam_soru_sayisi)
		guncellenecek_soru_takvimi?.setDataValue("dogru_soru_sayisi",yeni_veri.dogru_soru_sayisi)
		guncellenecek_soru_takvimi?.setDataValue("yanlis_soru_sayisi",yeni_veri.yanlis_soru_sayisi)
		guncellenecek_soru_takvimi?.setDataValue("dakika",yeni_veri.dakika)
		guncellenecek_soru_takvimi?.setDataValue("kisisel_degerlendirme",yeni_veri.kisisel_degerlendirme)

		guncellenecek_soru_takvimi?.save()

	console.log(chalk.red("Soru takvimi güncellendi")+chalk.yellow(yeni_veri.tarih))
	console.log(yeni_veri)
	res.end()
})

app.post("/soru-takvimi/sil",urlencodedParser, async (req,res)=>{
	let yeni_veri : any = req.query
	let silinecek_soru_takvimi = await SoruTakvimi.findOne({
		 where: {
			  tarih: yeni_veri.tarih, konu_id:yeni_veri.konu_id 
			} 
		})
		
	silinecek_soru_takvimi?.destroy()
	res.end()
})

app.get("/soru-takvimi/getir/:tarih" , async(req,res) => {
	let tarih = req.params.tarih;

	//tarih formatını düzeltiyoruz
	tarih = tarih.split("-").join("/")

	let soruKTakvimiKayitlarDatatableArray : any = await SoruTakvimi.findAll({
		where: {
			tarih: tarih,
			kullanici_id: req.user.kullanici_id
		}
	})
	let soruKTakvimiKayitlar :any = {}
	for(let i = 0 ;i < soruKTakvimiKayitlarDatatableArray.length;i++){
		soruKTakvimiKayitlar[i] = soruKTakvimiKayitlarDatatableArray[i]
	}

	console.log(soruKTakvimiKayitlar)
	res.json(soruKTakvimiKayitlar)
})




app.get("/profil",(req, res) => {
    res.render('profil.ejs')
});



app.post('/danisan/ekle', urlencodedParser, async function (req, res) {
	let new_user_data : any= req.query

	let kullanici_var_mi = await Kullanici.findOne({ where: { okul_no: new_user_data.okul_no } })

	if(kullanici_var_mi == undefined){
		let temp_user = new User(new_user_data.isim,new_user_data.soyisim,new_user_data.okul_no,new_user_data.sifre)
		console.log(chalk.hex('#FFF01F').bold.underline("\nEKLENEN KULLANICI:\n"),temp_user)
		Kullanici.create({
			isim: temp_user.get_İsim(),
			soyisim: temp_user.get_Soyİsim(),
			okul_no: temp_user.get_okulNo(),
			sifre: md5(temp_user.get_Sifre()),
			rol: "danisan"
		})

	}
	else{
		console.log(chalk.hex('#FF3131').bold.underline("\nKullanıcı zaten mevcut...\n"))
	}


	
})

app.get('/danisan/bul', urlencodedParser, async function (req, res) {
	let alinan_user = req.query

	let kullanici = await Kullanici.findOne({ where: { okul_no: alinan_user.okul_no } })
	
	if(kullanici != undefined){
		if(kullanici?.getDataValue("sifre")==alinan_user.sifre){
			let temp_user = new User(kullanici.getDataValue("isim"),kullanici.getDataValue("soyisim"),kullanici.getDataValue("okul_no"),kullanici.getDataValue("sifre"))
			res.send(temp_user.toJSON())
			console.log(chalk.hex('#FFF01F').bold.underline("\nBULUNAN KULLANICI:\n"),temp_user)
			return
		}else{
			console.log(chalk.hex('#FF3131').bold.underline("Kullanıcı şifresi yanlış."))
			res.send("Kullanıcı şifresi yanlış")
		}
		
	}else{
		console.log(chalk.hex('#FF3131').bold.underline("Okul numarası veya şifre yanlış."))
		res.send("Kullanıcı Bulunamadı")
	}

	
})





for(let i = 0;i<Main.dersler.length;i++){
	for(let j = 0;j<Main.dersler[i].get_Konular().length;j++){ 
		let Ders : Ders = Main.dersler[i] 
		let Konu : Konu = Main.dersler[i].get_Konular()[j]
		app.get('/'+Ders.get_DersAdi()+"/"+Konu.get_KonuAdi(), function (req, res) {
			let temp_soru    = new Soru("0",Ders,Konu)
			res.send(temp_soru.toJSON())
			console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN SORU :\n"),temp_soru)
		})
		app.get('/'+Ders.get_DersID()+"/"+Konu.get_KonuID()+"/:soru_sayisi", function (req, res) {
			let soru_sayisi = parseInt(req.params.soru_sayisi)
			let temp_test    = new Test(Main.dersler[i].get_DersAdi() + "/"+Main.dersler[i].get_Konular()[j].get_KonuAdi())
			for(let i =0;i<soru_sayisi;i++){
				let temp_soru    = new Soru(i.toString(),Ders,Konu)
				temp_test.soru_ekle(temp_soru)
			}
			res.send(temp_test.toJSON())
			console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN TEST :\n"),temp_test)
		})

		app.get('/soru/'+Ders.get_DersAdi()+"/"+Konu.get_KonuAdi(), function (req, res) {
			let temp_soru    = new Soru("0",Ders,Konu)
			res.send(temp_soru.toHTML(true))
			console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN SORU :\n"),temp_soru)
		})
		app.get('/test/'+Ders.get_DersID()+"/"+Konu.get_KonuID()+"/:soru_sayisi", function (req, res) {
			let soru_sayisi = parseInt(req.params.soru_sayisi)
			let temp_test    = new Test(Main.dersler[i].get_DersAdi() + "/"+Main.dersler[i].get_Konular()[j].get_KonuAdi())
			for(let i =0;i<soru_sayisi;i++){
				let temp_soru    = new Soru(i.toString(),Ders,Konu)
				temp_test.soru_ekle(temp_soru)
			}
			res.send(temp_test.toHTML())
			console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN TEST :\n"),temp_test)
		})
	}
}


app.get("/testHTML/:test_icerigi",(req,res) =>{
	console.log(chalk.green.bold("Welcome to the testHTML \n"))
	let test_icerigi_string : any = req.params.test_icerigi
	let test_icerigi_json : any = JSON.parse(test_icerigi_string)
	let DersID_Array = test_icerigi_json.DersID_Array
	let KonuID_Array = test_icerigi_json.KonuID_Array
	let SoruSayisi_Array = test_icerigi_json.SoruSayisi_Array

	console.log(chalk.yellow("DERS IDLERİ  :"),DersID_Array)
	console.log(chalk.yellow("KONU IDLERİ  :"),KonuID_Array)
	console.log(chalk.yellow("SORU SAYILARI:"),SoruSayisi_Array)
	res.render("quiz.ejs",{test:test_icerigi_string})
})

app.get("/testJSON/:test_icerigi",(req,res) =>{

	// Test içeriğini alıp arraylere parçalıyoruz
	let test_icerigi_string : any = req.params.test_icerigi
	let test_icerigi_json : any = JSON.parse(test_icerigi_string)
	let DersID_Array = test_icerigi_json.DersID_Array
	let KonuID_Array = test_icerigi_json.KonuID_Array
	let SoruSayisi_Array = test_icerigi_json.SoruSayisi_Array
	let temp_test    = new Test("-")

	let toplam_soru_sayisi = 0

	// Test içeriğindeki dersleri döndürüyoruz
	for(let i = 0;i<DersID_Array.length;i++){
		// Dersleri Döndürüyoruz
		for(let j = 0;j< Main.dersler.length;j++){
			if(Main.dersler[j].get_DersID() == DersID_Array[i]){
				let current_Ders = Main.dersler[j]
				// Dersin Konularını Döndürüyoruz
				for(let x = 0;x<current_Ders.get_Konular().length;x++){
					// Test içeriğindeki konular döndürüyoruz
					for(let k = 0;k<KonuID_Array.length;k++){
						if(current_Ders.get_Konular()[x].get_KonuID() == KonuID_Array[k]){
							let current_Konu = current_Ders.get_Konular()[x]
							// Konunun Soru Sayısını Döndürüyoruz
							for(let k = 0;k < SoruSayisi_Array[i];k++){
								toplam_soru_sayisi += 1;
								temp_test.soru_ekle(new Soru(toplam_soru_sayisi.toString(),current_Ders,current_Konu))
							}	
							break				
						}
					}
				}
				break
			}
		}
	}

	console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN TEST :\n"),temp_test)
	res.send(temp_test.toJSON())
})

app.get("/html/testJSON/:test_icerigi",(req,res) =>{

	
	// Test içeriğini alıp arraylere parçalıyoruz
	let test_icerigi_string : any = req.params.test_icerigi
	let test_icerigi_json : any = JSON.parse(test_icerigi_string)
	let DersID_Array = test_icerigi_json.DersID_Array
	let KonuID_Array = test_icerigi_json.KonuID_Array
	let SoruSayisi_Array = test_icerigi_json.SoruSayisi_Array
	let temp_test    = new Test("-")

	let toplam_soru_sayisi = 0

	// Test içeriğindeki dersleri döndürüyoruz
	for(let i = 0;i<DersID_Array.length;i++){
		// Dersleri Döndürüyoruz
		for(let j = 0;j< Main.dersler.length;j++){
			if(Main.dersler[j].get_DersID() == DersID_Array[i]){
				let current_Ders = Main.dersler[j]
				// Dersin Konularını Döndürüyoruz
				for(let x = 0;x<current_Ders.get_Konular().length;x++){
					if(current_Ders.get_Konular()[x].get_KonuID() == KonuID_Array[i]){
						let current_Konu = current_Ders.get_Konular()[x]
						// Konunun Soru Sayısını Döndürüyoruz
						for(let k = 0;k < SoruSayisi_Array[i];k++){
							toplam_soru_sayisi += 1;
							temp_test.soru_ekle(new Soru(toplam_soru_sayisi.toString(),current_Ders,current_Konu))
						}	
						break				
					}
				}
				break
			}
		}
	}

	console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN TEST :\n"),temp_test)
	res.send(temp_test.toHTML())
})


app.get("/dersler",async (req,res)=>{
	let dersler_json :any = {}

	
	let dersler_value :any = await Dersler.findAll(
		{
			where:{ kategori:"tyt"}
		})
	let dersler_array :any = [];
	for(let i = 0 ; i < dersler_value.length;i++){
		dersler_array.push(new Ders((dersler_value[i].dataValues.ders_id).toString(),dersler_value[i].dataValues.ders_ismi,dersler_value[i].dataValues.ders_yazisi))
	}

	let konular_value :any = await Konular.findAll()
	let konular_array :any = [];
	for(let i = 0 ; i < konular_value.length;i++){		
		let current_konu_dersi :any = null ;
		let current_konu_ders_indexi : any = null;
		for(let j = 0 ;j < dersler_array.length;j++){
			if(dersler_array[j].get_DersID() == konular_value[i].dataValues.ders_id){
				current_konu_dersi = dersler_array[j]
				current_konu_ders_indexi=j
			}
		}
		let current_konu : Konu =new Konu((konular_value[i].dataValues.konu_id).toString(),current_konu_dersi,konular_value[i].dataValues.konu_ismi,konular_value[i].dataValues.konu_yazisi)
		konular_array.push(current_konu)
		dersler_array[current_konu_ders_indexi].add_Konu(current_konu)
		
	}

	console.log("KONULAR",konular_array)


	// let soru_tipleri_data_valuse_array :any = []
	// let soru_tipleri_value :any = await SoruTipleri.findAll()
	// let soru_tipleri_array :any = []
	// for(let i = 0;i< soru_tipleri_value.length;i++){
	// 	soru_tipleri_array.push(soru_tipleri_value[i].dataValues)

	// }
	
	for(let ders of dersler_array){
		let current_dersID = ders.get_DersID()
		dersler_json[current_dersID] = ders.toJSON()
	}
	res.json(dersler_json)
})


// Bütün danışanları idlerine göre json olarak döndürür
app.get('/danisan/:danisan_id', async (req, res) => {

	let danisan_id = req.params.danisan_id;
	let kullaniciDB = await Kullanici.findOne({
		where: {
			kullanici_id: danisan_id,
		}
	})
	let tempUser = new User(kullaniciDB?.getDataValue("isim"),kullaniciDB?.getDataValue("soyisim"),kullaniciDB?.getDataValue("okul_no"),kullaniciDB?.getDataValue("sifre"))
	res.send(tempUser.toJSON())
	console.log(chalk.hex('#FFF01F').bold.underline("\nID : "),danisan_id,chalk.hex('#FFF01F').bold.underline(" DANIŞAN :\n"),tempUser)
	
})

app.get("/user/infos",protect,async (req, res)=>{
	let user = req.user
	res.send(user)
})



app.use((err: Error, req: any, res: any, next: any) => {
	console.error(err);
	return res.status(500).json({
		code: "INTERNAL_ERROR",
		msg: err,
	});
});

sequelize.sync({ force: process.env.NODE_ENV != "production" && false })
	.then(async () => {
		app.listen(PORT, () => console.log(`Listening on ${PORT}`));
	});
