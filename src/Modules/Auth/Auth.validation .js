import Joi from 'joi';

export const SignupSchema = {
    body:Joi.object({
        UserName:Joi.string().alphanum().min(3).max(20).required().messages({
            "String.empty":"UserName is required ",
            "any.required":"UserName is required ",
        }),
        Email:Joi.string().email().required(),
        Password:Joi.string().min(8).max(20).required(),
        cPassword:Joi.valid(Joi.ref('Password')).required(),
        age:Joi.number().min(20).positive().integer(),
        gender:Joi.string().alphanum().valid('Male','Famale').required(),
    }),

    query:Joi.object({
        test:Joi.boolean().required()
    })
};



export const SigninSchema = {
    body:Joi.object({
    
        Email:Joi.string().email().required(),
        Password:Joi.string().min(8).max(20).required(),
        
    })
};