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


app.get("/",(req, res) => {
    res.render('quiz.html')
});

app.get("/anasayfa",(req, res) => {
    res.render('quiz.html')
});


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
