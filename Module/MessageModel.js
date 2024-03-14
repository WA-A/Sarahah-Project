import { Schema,Types } from "mongoose";

const MessageSchema = new Schema({
    Content:{
        type:String,
        required:true,
    },
    receiverId:{  // Receives the message
        type:Types.ObjectId,
        required:true,
    }},
    {
        timestamps:true,
    }
);

const MessageModel = model('Message',MessageSchema); // no relation in mongodb [ no sql]
export default MessageModel