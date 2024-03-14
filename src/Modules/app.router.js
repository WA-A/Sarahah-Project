import connectDB from '../../DB/Connection.js';
import MassegeRouter from './Massege/Massege.Router.js'
import AuthRouter from './Auth/Auth.Router.js'
const Appinit = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.use('/massege',MassegeRouter);
    app.use('/auth',AuthRouter);
}
export default Appinit ;