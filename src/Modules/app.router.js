import connectDB from '../../DB/Connection.js';
import MassegeRouter from './Massege/Massege.Router.js'
import AuthRouter from './Auth/Auth.Router.js'
import UserRouter from './User/User.Router.js'
import cors from 'cors';
const Appinit = (app,express)=>{
    app.use(express.json());
    app.use(cors());
    connectDB();
    app.use('/message',MassegeRouter);
    app.use('/auth',AuthRouter);
    app.use('/user',UserRouter);
}
export default Appinit ;