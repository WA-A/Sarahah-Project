import UserModel from "../../../Module/UserModel.js";

export const getProfile = async(req,res,next)=>{
    const user = await UserModel.findById(req.user._id);
    
    return res.json({message:"success",user});
}

export const UplodeImage = async(req,res,next)=>{
    
    return res.json(req.file);
}