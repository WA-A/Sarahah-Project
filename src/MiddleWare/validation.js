import joi from 'joi';
const dataMethods = ['body','query','params','headers'];

export const GeneralFields ={
  email:joi.string().min(5).max(30).email().required(),
}

const validation = (schema)=>{
    
    return (res,req,next)=>{
      const validationArray = [];
      dataMethods.forEach(key=>{
        if(schema[key]){
          const validationResult = schema[key].validate(req[key],{abortEarly:false});
        if(validationResult.error){
          validationArray.push(validationResult.error);
        }
        }
      });
        if(validationArray.length>0){
          return res.status(400).json({message:"validation error",validationArray});
        }
        
        next(); // no error move to next
    }
}

export default validation;