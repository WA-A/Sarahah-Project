import UserModel from "../../../Module/UserModel.js";

export const getProfile = async(req,res)=>{
    const user = await UserModel.findById(req.user._id);
    
    return res.json({message:"success",user});
}