import Joi from 'joi'

// validate users info








export const registerValidation = (data) => {
  const schema = Joi.object({
   
    userName: Joi.string().min(3).max(15).required(),
    telephone: Joi.string().min(10).max(16).optional(),
    role: Joi.string().optional(),
    email: Joi.string().required(),
    password: Joi.string().min(8).max(1024).required(),
    prefix: Joi.string().optional(),
    countryCode: Joi.string().required(),
    country: Joi.string().required(),
   
  })
  return schema.validate(data)
}
// validate login details info
export const LoginValidation = (data) => {
  const schema = Joi.object({
    
    userName:Joi.string(),
    password: Joi.string().min(8).max(1024).required(),
  })
  return schema.validate(data)
}

export const EmailValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
  })
  return schema.validate(data)
}
