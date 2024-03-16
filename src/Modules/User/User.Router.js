import { Router } from "express";
import * as UserController from "./User.Controller.js";
import auth from "./../../MiddleWare/auth.MiddleWare.js"

const router = Router();

router.get("/profile",auth,UserController.getProfile);


export default router;