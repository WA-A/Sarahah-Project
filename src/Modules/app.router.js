import MassegeRouter from './Massege/Massege.Router.js'
const Appinit = (app,express)=>{
    app.use(express.json());
    app.use('/massege',MassegeRouter);
}
export default Appinit ;