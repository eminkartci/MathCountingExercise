import { Router } from "express";

// Router yapısı
const router = Router();



router.get("/", (req, res) => {
	return res.render("admin_paneli");
});

router.get("/ogrenciler", (req, res) => {
	return res.render("admin_ogrenciler");
});

export default router;
