import connectDB from '../../DB/Connection.js';
import MassegeRouter from './Massege/Massege.Router.js'
const Appinit = (app,express)=>{
    app.use(express.json());
    connectDB
    app.use('/massege',MassegeRouter);
}
export default Appinit ;