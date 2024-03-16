import Joi from 'joi';

export const SignupSchema = Joi.object({
    UserName:Joi.string().min(3).max(20).required().messages({
        "String.empty":"User Name is required ",
        "any.required":"User Name is required ",
    }),
    Email:Joi.string().email().required(),
    Password:Joi.string().min(8).max(20).required(),
    cPassword:Joi.valid(Joi.ref('Password')).required(),
    age:Joi.number().min(20).positive().integer(),
    gender:Joi.string().alphanum().valid('Male','Famale').required(),
});


export const SigninSchema = Joi.object({
    
    Email:Joi.string().email().required(),
    Password:Joi.string().min(8).max(20).required(),
    
});