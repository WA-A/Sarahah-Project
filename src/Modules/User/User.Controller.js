import UserModel from "../../../Module/UserModel.js";

export const getProfile = async(req,res,next)=>{
    const user = await UserModel.findById(req.user._id);
    
    return res.json({message:"success",user});
}

export const UplodeImage = async(req,res,next)=>{
    const imgUrl = req.file.destination +'/'+ req.file.filename;
    const user = await UserModel.findByIdAndUpdate(req.user._id,
    {ProfilePic:imgUrl},{new:true})
    return res.json({message:"success",imgUrl});
}