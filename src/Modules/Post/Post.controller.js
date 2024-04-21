import CommentModel from '../../../Module/CommentModel.js';
import PostModel from '../../../Module/PostModel.js';
import cloudinary from '../../Untils/Cloudinary.js';


export const CreatePost = async (req,res,next)=>{

    const {tilte,body} = req.body;
    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{folder:'Post'});

const Post = await PostModel.create({tilte,body,image:{secure_url,public_id},UserId:user._id});
   
if(!Post){
    return next(new Error("Can't Create Post"));
}

return res.status(201).json({message:"success",Post});
}

export const GetPost = async (req,res,next)=>{

   const Posts = await PostModel.find({}).populate([
    {
        path:'UserId',
        select:'UserName -_id'
    },
    {
        path:'like',
        select:'UserName'
    },
    {
        path:'unlike',
        select:'UserName'
    }
   ]);

   const PostsLists = [];
   for(let i of Posts) {
    const comment = await CommentModel.find({PostId:postMessage._id})
   PostsLists.push({i,comment})
}
return res.json({message:"success",Posts:PostsLists});


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

