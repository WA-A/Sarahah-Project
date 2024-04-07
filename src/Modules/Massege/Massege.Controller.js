import UserModel from "../../../Module/UserModel.js";
import MessageModel from "../../../Module/MessageModel.js";

export const getMessage = async (req,res)=>{
    const messageList = await MessageModel.find({receiverId:req.user._id})
    .select('Content createdAt');

    return res.json({message:"sucess",messageList});
}

export const SendMessage = async (req,res)=>{
    const {receiverId} = req.params;
    const {message} = req.body;

    const user = await UserModel.findById(receiverId);
 if(!user){
    return res.status(404).json({message:"user not found"});
 }
  const createMessage = await MessageModel.create({Content:message,receiverId});
  return res.status(201).json({message:"success",createMessage});
};