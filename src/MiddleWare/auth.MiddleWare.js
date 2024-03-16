import  jwt  from "jsonwebtoken";
import UserModel from "../../Module/UserModel.js";
const auth = async (req,res,next)=>{
    const {authorization} = req.headers;
    
    if(!authorization.startsWith(process.env.BEARERKEY)){ // bearer token the before is named basic token
        return res.json({message:"Invalid Authorization"}); 
    }

    const token = authorization.split(process.env.BERERTOKEN)[1];
    
    const decoded = await jwt.verify(token,process.env.LOGINSIG);
    const authUser = await UserModel.findById(decoded.id).select('UserName');
    req.user=authUser;
    next();
}
export default auth;