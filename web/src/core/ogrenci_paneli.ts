import { Router } from "express";

// Router yapısı
const router = Router();



router.get("/", (req, res) => {
	return res.render("ogrenci_paneli");
});

router.get("/:ogrenci_id", (req, res) => {
	return res.render("ogrenci_paneli");
});


export default router;
