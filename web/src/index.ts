//* Necessary imports
import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import redis from "redis";
import fs from "fs";

import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import session from "express-session";

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

import * as Main from './SoruHazirlama/Main'
import {Soru} from './SoruHazirlama/Soru'

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
app.engine('html', engines.mustache);
app.set('view engine', 'html');
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
import sequelize from "./db";
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
    res.render('login')
});

app.get("/register",(req, res) => {
    res.render('register')
});

app.get("/profil",(req, res) => {
    res.render('profil')
});

app.get("/quiz",(req, res) => {
    res.render('quiz')
});

app.get("/soru/matematik",(req, res) => {
    res.render('soru')
});

app.post('/danisan/ekle', urlencodedParser, function (req, res) {
	let new_user_data = req.query

	let isim_index = 0;
	let soyisim_index = 0;
	let okul_no_index = 0;
	let sifre_index = 0;
	let danisanlar : any[] = csv_to_array("/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")
	for(let i = 0;i< danisanlar[0].length ;i++){
		if(danisanlar[0][i] == "isim"){
			isim_index = i
		}else if(danisanlar[0][i] == "soyisim"){
			soyisim_index = i
		}else if(danisanlar[0][i] == "okul_no"){
			okul_no_index = i
		}else if(danisanlar[0][i] == "sifre"){
			sifre_index = i
		}
	}

	for(let i =0;i<danisanlar.length;i++){
		if(danisanlar[i][okul_no_index] == new_user_data.okul_no){
			console.log("\nKullanıcı zaten mevcut...")
			return
		}
	}
		let new_user_csv_data : any []= []
		new_user_csv_data[isim_index] = new_user_data.isim
		new_user_csv_data[soyisim_index] = new_user_data.soyisim
		new_user_csv_data[okul_no_index] = new_user_data.okul_no
		new_user_csv_data[sifre_index] = new_user_data.sifre

		danisanlar[danisanlar.length] = new_user_csv_data

		array_to_csv(danisanlar,"/Users/durmuskartci/Desktop/Softwares/MathCountingExercise/web/src/SoruHazirlama/danisanlar.csv")

		console.log("NEW USER    : ",new_user_csv_data)
	
})

app.post('/danisan/bul', urlencodedParser, function (req, res) {
	console.log(req.query)
	res.send({user:req.body})
})



  for(let i = 0;i<Main.dersler.length;i++){
	for(let j = 0;j<Main.dersler[i].get_Konular().length;j++){
		app.get('/'+Main.dersler[i].get_DersAdi()+"/"+Main.dersler[i].get_Konular()[j].get_KonuAdi(), function (req, res) {
			let temp_soru    = new Soru(Main.dersler[i],Main.dersler[i].get_Konular()[j])
		   res.send(temp_soru.toJSON())
	 })
	}
  }

//   app.get('/matematik', function (req, res) {
// 	 	let matematik_sorusu    = new Soru(Main.matematik,Main.yas_problemi)
// 	  	// console.log(matematik_sorusu.toHTML())
// 		res.send(matematik_sorusu.toHTML())
//   })

//   app.get('/fizik', function (req, res) {
// 	let fizik_sorusu    = new Soru(Main.fizik,Main.hareket_hiz)
// 	// console.log(matematik_sorusu.toHTML())
// 	res.send(res.send(fizik_sorusu.toHTML())
// 	)
//   })

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

