import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
});

router.post(
  "/",
  jwtCheck,
  upload.single("imageFile"),
  MyRestaurantController.createMyRestaurant
);

export default router;
