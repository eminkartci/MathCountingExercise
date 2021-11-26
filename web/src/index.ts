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

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

import * as Main from './SoruHazirlama/Main'
import {Soru} from './SoruHazirlama/Soru'
import {User} from './SoruHazirlama/User'

try {
	require("dotenv").config();
} catch (_) {}

//* CONSTANTS
const PORT = process.env.PORT || 5006;

//* APP
const app = express();
var engines = require('consolidate');

app.set("trust proxy", 1);
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

const dev = process.env.NODE_ENV !== "production";

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
import sequelize, { Kullanici } from "./db";
import authRouter, { passport, protect } from "./core/auth";
import kayitRouter from "./core/kayit"
import apiRouter from "./core/api";
import ogrenciPaneliRouter from "./core/ogrenci_paneli";
import adminPaneliRouter from "./core/admin_paneli";
import { DATE } from "sequelize/types";

app.use(passport.initialize());
app.use(passport.session());

app.use("/giris_yap", express.urlencoded({ extended: true }), authRouter);
app.use("/kayit_ol",express.urlencoded({ extended: true }), kayitRouter);
app.use("/api",express.urlencoded({ extended: true }), apiRouter);
app.use("/ogrenci_paneli",express.urlencoded({ extended: true }), ogrenciPaneliRouter);
app.use("/admin",express.urlencoded({ extended: true }), adminPaneliRouter);


app.get("/login",(req, res) => {
    res.render('login.ejs')
});

app.get("/register",(req, res) => {
    res.render('register.ejs')
});

app.get("/profil",(req, res) => {
	console.log(chalk.blue("PROFIL REQUEST\n"),req.query)
    res.render('profil.ejs')
});

app.get("/quiz",(req, res) => {
    res.render('quiz.ejs')
});

app.get("/soru/matematik",(req, res) => {
    res.render('soru.ejs')
});

app.get("/re",(req, res) => {
    res.redirect('/login.ejs')
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
			sifre: temp_user.get_Sifre(),
			rol: "danisan"
		})
	}
	else{
		console.log(chalk.hex('#FF3131').bold.underline("\nKullanıcı zaten mevcut...\n"))
	}


	// let id_index = 0;
	// let isim_index = 0;
	// let soyisim_index = 0;
	// let okul_no_index = 0;
	// let sifre_index = 0;
	// let danisanlar : any[] = csv_to_array("/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")
	// for(let i = 0;i< danisanlar[0].length ;i++){
	// 	if(danisanlar[0][i] == "id"){
	// 		id_index = i
	// 	}else if(danisanlar[0][i] == "isim"){
	// 		isim_index = i
	// 	}else if(danisanlar[0][i] == "soyisim"){
	// 		soyisim_index = i
	// 	}else if(danisanlar[0][i] == "okul_no"){
	// 		okul_no_index = i
	// 	}else if(danisanlar[0][i] == "sifre"){
	// 		sifre_index = i
	// 	}
	// }

	// for(let i =0;i<danisanlar.length;i++){
	// 	if(danisanlar[i][okul_no_index] == new_user_data.okul_no){
	// 		console.log(chalk.hex('#FF3131').bold.underline("\nKullanıcı zaten mevcut...\n"))
	// 		return
	// 	}
	// }
	// 	let new_user_csv_data : any []= []
	// 	let new_user_id = danisanlar.length
	// 	new_user_csv_data[id_index] = new_user_id.toString()
	// 	new_user_csv_data[isim_index] = new_user_data.isim
	// 	new_user_csv_data[soyisim_index] = new_user_data.soyisim
	// 	new_user_csv_data[okul_no_index] = new_user_data.okul_no
	// 	new_user_csv_data[sifre_index] = new_user_data.sifre

	// 	danisanlar[danisanlar.length] = new_user_csv_data
	// 	let temp_user = new User(new_user_data.isim,new_user_data.soyisim,new_user_data.okul_no,new_user_data.sifre)
	// 	console.log(chalk.hex('#FFF01F').bold.underline("\nEKLENEN KULLANICI:\n"),temp_user)
	// 	array_to_csv(danisanlar,"/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")
})

app.get('/danisan/bul', urlencodedParser, async function (req, res) {
	let alinan_user  : any= req.query

	let kullanici = await Kullanici.findOne({ where: { okul_no: alinan_user.okul_no } })
	
	if(kullanici != undefined){
		if(kullanici?.getDataValue("sifre")==alinan_user.sifre){
			let temp_user = new User(kullanici.getDataValue("isim"),kullanici.getDataValue("soyisim"),kullanici.getDataValue("okul_no"),kullanici.getDataValue("sifre"))
			res.send(temp_user.toJSON())
			console.log(chalk.hex('#FFF01F').bold.underline("\nBULUNAN KULLANICI:\n"),temp_user)
			return
		}else{
			console.log(chalk.hex('#FF3131').bold.underline("Kullanıcı şifresi yanlış"))
			res.send(null)
		}
		
	}else{
		console.log(chalk.hex('#FF3131').bold.underline("Kullanıcı bulunamadı"))
		res.send(null)
	}

	//ESKİ YONTEM
	// let id_index = 0;
	// let isim_index = 0;
	// let soyisim_index = 0;
	// let okul_no_index = 0;
	// let sifre_index = 0;
	// let danisanlar : any[] = csv_to_array("/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")
	// for(let i = 0;i< danisanlar[0].length ;i++){
	// 	if(danisanlar[0][i] == "id"){
	// 		id_index = i
	// 	}else if(danisanlar[0][i] == "isim"){
	// 		isim_index = i
	// 	}else if(danisanlar[0][i] == "soyisim"){
	// 		soyisim_index = i
	// 	}else if(danisanlar[0][i] == "okul_no"){
	// 		okul_no_index = i
	// 	}else if(danisanlar[0][i] == "sifre"){
	// 		sifre_index = i
	// 	}
	// }

	// for(let i =0;i<danisanlar.length;i++){
		
	// 	if(danisanlar[i][okul_no_index] == alinan_user.okul_no && danisanlar[i][sifre_index] == alinan_user.sifre){
	// 		let temp_user = new User(danisanlar[i][isim_index],danisanlar[i][soyisim_index],danisanlar[i][okul_no_index],danisanlar[i][sifre_index])
	// 		res.send(temp_user.toJSON())
	// 		console.log(chalk.hex('#FFF01F').bold.underline("\nBULUNAN KULLANICI:\n"),temp_user)
	// 		return
	// 	}
	// }	
	
})



for(let i = 0;i<Main.dersler.length;i++){
	for(let j = 0;j<Main.dersler[i].get_Konular().length;j++){
		app.get('/'+Main.dersler[i].get_DersAdi()+"/"+Main.dersler[i].get_Konular()[j].get_KonuAdi(), function (req, res) {
			let temp_soru    = new Soru(Main.dersler[i],Main.dersler[i].get_Konular()[j])
			res.send(temp_soru.toJSON())
			console.log(chalk.hex('#FFF01F').bold.underline("\nOLUŞTURULAN SORU :\n"),temp_soru)
		})
	}
}

// Bütün danışanları idlerine göre json olarak döndürür
{
	let id_index = 0;
	let isim_index = 0;
	let soyisim_index = 0;
	let okul_no_index = 0;
	let sifre_index = 0;
	let danisanlar = csv_to_array("/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")
	for(let i = 0;i< danisanlar[0].length;i++){
		
		if(danisanlar[0][i] == "id"){
			id_index = i
		}else if(danisanlar[0][i] == "isim"){
			isim_index = i
		}else if(danisanlar[0][i] == "soyisim"){
			soyisim_index = i
		}else if(danisanlar[0][i] == "okul_no"){
			okul_no_index = i
		}else if(danisanlar[0][i] == "sifre"){
			sifre_index = i
		}
	}


	for(let i = 1;i<danisanlar.length;i++){
		let danisan = danisanlar[i]
		app.get('/danisan/'+danisan[id_index], function (req, res) {
			let temp_user = new User(danisan[isim_index],danisan[soyisim_index],danisan[okul_no_index],danisan[sifre_index])
			res.send(temp_user.toJSON())
			console.log(chalk.hex('#FFF01F').bold.underline("\nID : ",danisan[id_index]," GÖRE DANIŞAN :\n"),temp_user)
			
		})
	
	}

}

// Bütün dabışanları json olarak döndürür
app.get("/danisanlar",(req,res)=>{
	let danisanlar = csv_to_array("/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")
	let id_index = 0;
	let isim_index = 0;
	let soyisim_index = 0;
	let okul_no_index = 0;
	let sifre_index = 0;
	for(let i = 0;i< danisanlar[0].length;i++){
		
		if(danisanlar[0][i] == "id"){
			id_index = i
		}else if(danisanlar[0][i] == "isim"){
			isim_index = i
		}else if(danisanlar[0][i] == "soyisim"){
			soyisim_index = i
		}else if(danisanlar[0][i] == "okul_no"){
			okul_no_index = i
		}else if(danisanlar[0][i] == "sifre"){
			sifre_index = i
		}
	}
	let danisanlar_json : any= {}
	for(let i = 1;i<danisanlar.length;i++){
		let temp_user = new User(danisanlar[i][isim_index],danisanlar[i][soyisim_index],danisanlar[i][okul_no_index],danisanlar[i][sifre_index])
		danisanlar_json[i-1] = temp_user.toJSON()
	}
	console.log(chalk.hex('#FFF01F').bold.underline("\nDANIŞANLAR :\n"),danisanlar_json)
	res.send(danisanlar_json)	
})

app.use((err: Error, req: any, res: any, next: any) => {
	console.error(err);
	return res.status(500).json({
		code: "INTERNAL_ERROR",
		msg: err,
	});
});

sequelize
.sync({ force: process.env.NODE_ENV != "production" && false })
	.then(async () => {
		app.listen(PORT, () => console.log(`Listening on ${PORT}`));
	});

function csv_to_array(file_path:string){
	var data:any = fs.readFileSync(file_path, "utf8")
	data = data.split("\n")
	for (let i = 0;i<data.length;i++){
		data[i] = data[i].split(",") 
	}
	return data
}

function array_to_csv(array:any,file_path:string){
	let csv_content = ""
	for(let i = 0;i<array.length;i++){
		if(i == array.length-1){
			csv_content += array[i].join()
			break
		}
		csv_content += array[i].join()+"\n"
	}
    fs.writeFileSync(file_path, csv_content);
}

