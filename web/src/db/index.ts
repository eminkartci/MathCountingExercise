

import { Sequelize, DataTypes } from "sequelize";
let sequelize: Sequelize;


// Veri Tabani Bağlantı

if (process.env.NODE_ENV == "production") {
	if (process.env.DATABASE_URL == undefined) {
		throw new Error("DATABASE_URL is not available");
	} else {

		sequelize = new Sequelize(process.env.DATABASE_URL, {
			dialect: "postgres",
			dialectOptions: {
				ssl: {
					rejectUnauthorized: false
				}
			}
		});
	}
} else {
	sequelize = new Sequelize("postgres://admin:root@localhost:5432/ameanacademy", {
		dialect: "postgres",
	});
}

// Ana Tablolar

const User = sequelize.define(
	"user",
	{
		uid: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
		createdAt: false,
		updatedAt: false,
	}
);

const Kullanici = sequelize.define(
	"kullanici",
	{
		kullanici_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		isim: {
			type: DataTypes.STRING,
		},
		soyisim: {
			type: DataTypes.STRING,
		},
		okul_no: {
			type: DataTypes.STRING,
		},
		sifre: {
			type: DataTypes.STRING,
		},rol: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
		createdAt: false,
		updatedAt: false,
	}
);

const SoruTakvimi = sequelize.define(
	"soru_takvimi",
	{
		sorucozumu_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		kullanici_id: {
			type: DataTypes.INTEGER,
		},
		tarih: {
			type: DataTypes.STRING,
		},
		ders_id: {
			type: DataTypes.INTEGER,
		},
		konu_id: {
			type: DataTypes.INTEGER,
		},
		toplam_soru_sayisi: {
			type: DataTypes.INTEGER,
		},
		dogru_soru_sayisi: {
			type: DataTypes.INTEGER,
		},
		yanlis_soru_sayisi: {
			type: DataTypes.INTEGER,
		},
		kisisel_degerlendirme: {
			type: DataTypes.INTEGER,
		}
	},
	{
		freezeTableName: true,
		createdAt: false,
		updatedAt: false,
	}
);

const Dersler = sequelize.define(
	"dersler",
	{
		ders_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		// kullanici_adi: {
		// 	type: DataTypes.STRING,
		// },
		kategori: {
			type: DataTypes.STRING,
		},

		// Ders ismi javascript değişken formatında tutulan dersin ismi
		ders_ismi : {
			type : DataTypes.STRING,
		},

		// Ders yazısı türkçe formatında tutlan ders ismi
		ders_yazisi : {
			type : DataTypes.STRING,
		}
	},
	{
		freezeTableName: true,
		createdAt: false,
		updatedAt: false,
	}
);

const SoruTipleri = sequelize.define(
	"soru_tipleri",
	{
		soru_tipi_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		// kullanici_adi: {
		// 	type: DataTypes.STRING,
		// },
		ders_id: {
			type: DataTypes.STRING,
		},

		konu_id: {
			type: DataTypes.STRING,
		},

		// Soru Yazısını tutan değişken
		soru_yazisi: {
			type: DataTypes.STRING,
		},

		// Soru Değişkenlerinin tutan değişken
		soru_degiskenleri: {
			type: DataTypes.STRING,
		},

		// Soru şıklarına yerleştirmek istenilen değişkenleriykonuşar tutan değişken
		soru_siklari: {
			type: DataTypes.STRING,
		},

		// Soru cevabının veya cevap formülünü tutan değişken
		cevap: {
			type: DataTypes.STRING,
		}
	},
	{
		freezeTableName: true,
		createdAt: false,
		updatedAt: false,
	}
);

const Konular = sequelize.define(
	"konular",
	{
		konu_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		ders_id: {
			type: DataTypes.STRING,
		},
		// Konu ismi javascript değişken formatında tutulan konunun ismi
		konu_ismi : {
			type : DataTypes.STRING,
		},

		// Konu ismi javascript değişken formatında tutulan konunun ismi
		konu_yazisi : {
			type : DataTypes.STRING,
		},

		// Ders ismi javascript değişken formatında tutulan dersin ismi
		ders_ismi : {
			type : DataTypes.STRING,
		},

		// Ders yazısı türkçe formatında tutlan ders ismi
		ders_yazisi : {
			type : DataTypes.STRING,
		}
	},
	{
		freezeTableName: true,
		createdAt: false,
		updatedAt: false,
	}
);

// Export
//https://www.npmjs.com/package/sequelize-views-support
export default sequelize;
export { User,Kullanici,SoruTakvimi,Dersler,Konular,SoruTipleri};
