import { Router } from "express";
import * as AuthController from "./Auth.Controller.js";
import { asyncHandler } from "../../Untils/errorHandling.js";
import validation from "../../MiddleWare/validation.js";
import { SigninSchema, SignupSchema } from "./Auth.validation .js";




const router = Router();

router.post("/signup",validation(SignupSchema),asyncHandler(AuthController.SignUp) );
router.post("/signin",validation(SigninSchema),asyncHandler(AuthController.SignIn) );



export default router;