import CommentModel from "../../../Module/CommentModel.js";
import cloudinary from '../../Untils/Cloudinary.js';
export const CreateComment = async (req,res,next)=>{
    req.UserId = req.user._id;
    req.body.PostId = req.params.id;

    if(req.file){
        const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{folder:'Comment'});
     req.body.image = {secure_url,public_id}
    }

    const comment = await CommentModel.create(req.body);
    return res.json({message:"success",comment})
}