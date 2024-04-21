import PostModel from '../../../Module/Post.model.js';
import cloudinary from './../../Untils/Cloudinary.js';


export const CreatePost = async (req,res,next)=>{

    const {tilte,body} = req.body;
    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{folder:'Post'});

const Post = await PostModel.create({tilte,body,image:{secure_url,public_id},UserId:user._id});
   
if(!Post){
    return next(new Error("Can't Create Post"));
}

return res.status(201).json({message:"success",Post});
}