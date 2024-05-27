import { Router } from "express";
import {
  changecurruntuserpassword,
  getCurrentUser,
  getUserChannelProfile,
  getWachHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registeruser,
  updateAccountDetails,
  updateCoverImage,
  updateUserAvtar,
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

router.route("/change-password").post(verifyjwt, changecurruntuserpassword);

router.route("/current-user").get(verifyjwt, getCurrentUser);

router.route("update-account").patch(verifyjwt, updateAccountDetails);

router
  .route("/avtar")
  .patch(verifyjwt, upload.single("avatar"), updateUserAvtar);

router
  .route("/cover-image")
  .patch(verifyjwt, upload.single("/coverImage"), updateCoverImage);

router.route("/c/:username").get(verifyjwt, getUserChannelProfile);

router.route("/history").get(verifyjwt, getWachHistory);

export default router;
