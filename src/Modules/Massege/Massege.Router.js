import { Router } from "express";
import * as MassegeController from './Massege.Controller.js';
const router = Router();

router.get('/',MassegeController.getMessage);

 export default router