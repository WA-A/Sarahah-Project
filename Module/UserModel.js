import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    UserName:{
       type:String,
       required:true
    },
    Email:{
        type:String,
        required:true
     },
     
     Password:{
        type:String,
        required:true
     },
     age:{
      type:Number
  },
     ConfirmEmail:{
        type:Boolean,
        default:false
     },
     gender:{
        type:String,
        enum:['Male','Female'],
       
     }
    },
    {
     timestamps:true,
    }  
);
 // ID IS DEFAULT

const UserModel = model('User',UserSchema); // no relation in mongodb [ no sql]
export default UserModel;