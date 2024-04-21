import { Schema, Types, model } from 'mongoose';

const CommentSchema = new Schema ({
    text:{
        type:String,
        required:true,
    },
   image:{
    type:Object,
   },
   UserId:{
    type:Types.ObjectId,
    ref:'User',
    required:true,
   },
   PostId:{
    type:Types.ObjectId,
    ref:'Post',
    required:true,
   }
    },{

    timestamps:true,
});

const CommentModel = model('Comment',CommentSchema);
export default CommentModel;