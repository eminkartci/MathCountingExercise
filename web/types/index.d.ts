declare namespace Express {
	export interface Request {
		user: {
			kullanici_id: number;
			isim: string;
			soyisim: string;
			email: string;
			sifre: string;
			sirket_id: string;
			rol: string;
		};
		sirket: {
			sirket_id: number;
			sirket_isim: string;
		};
		session: any;
		files: any;
	}
}
