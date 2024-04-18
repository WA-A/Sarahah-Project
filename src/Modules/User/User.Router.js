import { Router } from "express";
import * as UserController from "./User.Controller.js";
import auth from "./../../MiddleWare/auth.MiddleWare.js"
import { asyncHandler } from "../../Untils/errorHandling.js";
import fileUpload, { FileValue } from "../../Untils/Multer.js";


const router = Router();

router.get("/profile",asyncHandler(auth),asyncHandler(UserController.getProfile));
router.patch("/profilepic",auth,fileUpload(FileValue.image).single('image'),asyncHandler(UserController.UplodeImage)); // request by form data

export default router