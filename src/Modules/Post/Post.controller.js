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


export const LikePost = async (req,res,next)=>{

    const UserId = req.user._id;
    const {id} = req.params; //postId
    

const Post = await PostModel.findOneAndUpdate({_id:id},
{
    $addToSet:{
        Like:UserId,
    },
    $pull:{unLike:UserId},
},
{
    new:true
}
);
   
if(!Post){
    return next(new Error("Can't Create Post"));
}

return res.status(201).json({message:"success",Post});
}

export const UnLikePost = async (req,res,next)=>{

    const UserId = req.user._id;
    const {id} = req.params; //postId
    

const Post = await PostModel.findOneAndUpdate({_id:id},
{
    $addToSet:{
       unLike:UserId,
    },
    $pull:{Like:UserId},
},
{
    new:true
});
   
if(!Post){
    return next(new Error("Can't Create Post"));
}

return res.status(201).json({message:"success",Post});
}