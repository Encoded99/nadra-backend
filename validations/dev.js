import Joi from 'joi'














export const adminRegisterValidation = (data) => {
 const schema = Joi.object({
   
   
   password: Joi.string().min(8).max(1024).required(),
   telephone: Joi.string().min(11).max(14).required(),
   
   email: Joi.string().required(),
  
   firstName: Joi.string().min(3).max(255).required(),
   lastName: Joi.string().min(3).max(255).required(),
  
  
   
  
 })
 return schema.validate(data)
}

export const adminLoginValidation = (data) => {
 const schema = Joi.object({
   
   email:Joi.string(),
   password: Joi.string().min(8).max(1024).required(),
 })
 return schema.validate(data)
}