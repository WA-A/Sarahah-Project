import UserModel from './../../../Module/UserModel.js';
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
  return res.json({message:" success",newUser});
};