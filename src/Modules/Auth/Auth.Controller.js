import UserModel from './../../../Module/UserModel.js';
import bcrypt from'bcryptjs';
import jwt from 'jsonwebtoken';

export const SignUp = async (req,res)=>{

    const {UserName,Email,Password} = req.body;
    const user = await UserModel.findOne({Email});
    
    
    if(user){
        return res.json({message:"Email already exists"});
        
    }

    const HashedPassword = await bcrypt.hash(Password,parseInt(process.env.SALTROUND));
    
    const newUser = await UserModel.create({UserName,Email,Password:HashedPassword});
  
    if(!newUser){
    return res.json({message:" error while creating user"});
  }
    
  return res.json({message:"success",newUser});
};


export const SignIn = async (req,res)=>{

  const {Email,Password} = req.body;
  const user = await UserModel.findOne({Email}).select('UserName Password');
  if(!user){
      return res.json({message:"Email not exists"});
      
  }

  const Match = await bcrypt.compare(Password,user.Password);
  
  if(!Match){
  return res.json({message:" Invalid Password"});
}

const token = jwt.sign({id:user._id},process.env.LOGINSIG)
return res.json({message:" success",token});
};