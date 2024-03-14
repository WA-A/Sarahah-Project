import mongoose from'mongoose';

const connectDB = ()=>{

     mongoose.connect(`${process.env.DB}`) // url/name database
    // get url from cmd and write mongosh
     .then( result=>{ // the way same async & await
console.log(`connected`);
     })
     .catch(err=>{
        console.log(`not connected ${err}`);
     })
     
}

export default connectDB;