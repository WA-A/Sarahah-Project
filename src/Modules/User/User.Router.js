import { Router } from "express";
import * as UserController from "./User.Controller.js";
import auth from "./../../MiddleWare/auth.MiddleWare.js"
import { asyncHandler } from "../../Untils/errorHandling.js";


const router = Router();

router.get("/profile",asyncHandler(auth),asyncHandler(UserController.getProfile));


export default router;