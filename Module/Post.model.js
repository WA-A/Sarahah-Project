
import { Schema, Types, model } from 'mongoose';

const PostSchema = new Schema ({
    title:{
        type:String,
        required:true,
    },
    body:{
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
   like:[ // make array to store who user to like
    {
        type:Types.ObjectId,
        ref:'User'
    }
   ],
   unlike:[
    {
    type:Types.ObjectId,
    ref:'User'
}
      ],
    },{

    timestamps:true,
});

const PostModel = model('Post',PostSchema);
export default PostModel;