import { Router } from "express";
import * as AuthController from "./Auth.Controller.js";

const router = Router();

router.post("/signup",AuthController.SignUp);


export default router;