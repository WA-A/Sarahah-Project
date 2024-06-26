import connectDB from '../../DB/Connection.js';
import MassegeRouter from './Massege/Massege.Router.js'
import AuthRouter from './Auth/Auth.Router.js'
import UserRouter from './User/User.Router.js'
import PostRouter from './Post/Post.Router.js'
import cors from 'cors';
import { GlobalErrorHandling } from '../Untils/errorHandling.js';
const Appinit = (app,express)=>{
    app.use(express.json());
    app.use(cors());
    connectDB();
    app.use('/message',MassegeRouter);
    app.use('/auth',AuthRouter);
    app.use('/user',UserRouter);
    app.use('/post',PostRouter);


    app.use(GlobalErrorHandling);

    
}
export default Appinit ;