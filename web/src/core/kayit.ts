import { Router } from "express";

// Router yapısı
const router = Router();



router.get("/", (req, res) => {
	return res.render("kayit_ol");
});


export default router;
