
// Veri Tabanından tabloları çağır
import { User,Kullanici} from "./index";



// EKLE BOLUMU
const kullanici_ekle = async (kullanici:any, fn:any) => {

    try{
        const eski_kullanici = await Kullanici.findOne({
            where: { 
                email: kullanici.email,
            },
        });
        
        if (eski_kullanici){
            return fn(new Error("Kullanıcı Mevcut !!"), null);
        }else{
            const yeni_danisan = await Kullanici.create(kullanici);

            // Eğer bulunduysa o bilgiyi geri gönder
            if (yeni_danisan) return fn(null, yeni_danisan);

            // eklenemediyse hata dondur
            return fn(new Error("Kullanıcı Eklenemedi !!"), null);
        }
        

    }// Süreçte bağlanma sorunu yaşanırsa
    catch (error) {
        // Hatayı döndür
        return fn(error, null);
    }

}


export {kullanici_ekle};
