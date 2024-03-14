import express from'express';
import dotenv from 'dotenv';
import Appinit from './src/Modules/app.router.js';
dotenv.config();
const app = express()
const PORT = process.env.PORT;

Appinit(app,express);

app.listen(PORT,()=>{
    console.log(`server is running ..... ${PORT}`);
    });