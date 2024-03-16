import { Router } from "express";
import * as MassegeController from './Massege.Controller.js';
import { asyncHandler } from "../../Untils/errorHandling.js";

const router = Router();

router.get('/',asyncHandler(MassegeController.getMessage));

 export default router