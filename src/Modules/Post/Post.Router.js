import { Router } from "express";
import auth from "../../MiddleWare/auth.MiddleWare.js";
import * as PostController from './Post.controller.js'
import fileUpload, { FileValue } from "../../Untils/Multer.js";
import { asyncHandler } from "../../Untils/errorHandling.js";
const router = Router();

router.post('/createpost',auth,fileUpload(FileValue.image).single('image'),asyncHandler(PostController.CreatePost));

export default router;