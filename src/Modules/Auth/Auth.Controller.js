import UserModel from './../../../Module/UserModel.js';
import bcrypt from'bcryptjs';
import jwt from 'jsonwebtoken';
import SendEmail from './../../Untils/SendEmail.js'

export const SignUp = async (req,res,next)=>{

    const {UserName,Email,Password} = req.body;

    const user = await UserModel.findOne({Email});
    
    if(user){
        return next(new Error ("Email already exists"));
        
    }

    const HashedPassword = await bcrypt.hash(Password,parseInt(process.env.SALTROUND));
    
    const newUser = await UserModel.create({UserName,Email,Password:HashedPassword});
  
    if(!newUser){
    return res.json({message:" error while creating user"});
  }

  const token = await jwt.sign({Email},process.env.CONFIRMEMAILTOKEN,{expiresIn:60*1});
  const refreshToken = await jwt.sign({Email},process.env.CONFIRMEMAILTOKEN,{expiresIn:60*60*24*30})

  const html = `
  <h2>Welcome ${UserName}</h2>
  <a href='http://localhost:3000/auth/confirmEmail/${token}'> click to confirm email</a>
  <a href='http://localhost:3000/auth/newconfirmEmail/${refreshToken}'> resend confirm email</a>
  `;
    SendEmail(Email,'welcome wasan',html);
  return res.status(201).json({message:"success",newUser});
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

export const confirmEmail = async(req,res)=>{
  const {Email} = req.params;
  const decoded =  jwt.verify(token,process.env.CONFIRMEMAIL);
  const user = await UserModel.findOneAndUpdate({Email:decoded.Email},{confirmEmail:true},{new:true});
   if(user.modifiedCount >0) {
 return res.redirect(process.env.FEURL);
   }
  
}