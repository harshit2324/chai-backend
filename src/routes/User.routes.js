import { Router } from "express";
import { registeruser } from "../controllers/User.controller.js";

const router = Router();

router.route("/register").post(registeruser);

export default router;
