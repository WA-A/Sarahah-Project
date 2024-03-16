import { Router } from "express";
import * as AuthController from "./Auth.Controller.js";
import { asyncHandler } from "../../Untils/errorHandling.js";

const router = Router();

router.post("/signup",asyncHandler(AuthController.SignUp));
router.post("/signin",asyncHandler(AuthController.SignIn));



export default router;