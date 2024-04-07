import { Router } from "express";
import * as MassegeController from './Massege.Controller.js';
import auth from "./../../MiddleWare/auth.MiddleWare.js"

const router = Router();

router.get('/',auth,(MassegeController.getMessage));
router.post('/sendMessage/:receiverId',(MassegeController.SendMessage));

 export default router