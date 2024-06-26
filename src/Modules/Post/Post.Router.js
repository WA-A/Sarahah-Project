import { Router } from "express";
import auth from "../../MiddleWare/auth.MiddleWare.js";
import * as PostController from './Post.controller.js'
import * as CommentController from './CommentController.js'
import fileUpload, { FileValue } from "../../Untils/Multer.js";
import { asyncHandler } from "../../Untils/errorHandling.js";
const router = Router();

router.post('/createpost',auth,fileUpload(FileValue.image).single('image'),asyncHandler(PostController.CreatePost));
router.get('/getpost',(PostController.GetPost));
router.patch('/:id/like',auth,PostController.LikePost);
router.patch('/:id/unlike',auth,PostController.UnLikePost);


router.patch('/:id/comment',auth,fileUpload(FileValue.image).single('image'),asyncHandler(CommentController.CreateComment));

export default router;