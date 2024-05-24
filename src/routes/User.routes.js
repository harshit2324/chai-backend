import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registeruser,
} from "../controllers/User.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registeruser
);

router.route("/login").post(loginUser);

//secured routres

router.route("/logout").post(verifyjwt, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

export default router;
