

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

// Export
//https://www.npmjs.com/package/sequelize-views-support
export default sequelize;
export { User,Kullanici};
