import UserModel from "../../../Module/UserModel.js";
import cloudinary from "../../Untils/Cloudinary.js";


export const getProfile = async(req,res,next)=>{
    const user = await UserModel.findById(req.user._id);
    
    return res.json({message:"success",user});
}


export const UplodeImage = async(req,res,next)=>{
   //const imgUrl = req.file.destination +'/'+ req.file.filename;
    if(!req.file){
        return res.json({message:"error"});
  }
    const {secure_url} = await cloudinary.uploader.upload(req.file.path,
        {folder:`${process.env.APP_NAME}/users`});
        
    const user = await UserModel.findByIdAndUpdate(req.user._id,
    {ProfilePic:secure_url},{new:true})
    return res.json({message:"success",user});
}

