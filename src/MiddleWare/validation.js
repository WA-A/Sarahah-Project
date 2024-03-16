

const validation = (schema)=>{
    
    return (res,req,next)=>{
        const validationResult = schema.validate(req.body,{abortEarly:false});
        if(validationResult.error){
          return res.json({message:"validation error",error:validationResult.error});
        }
        next(); // no error move to next
    }
}

export default validation;