import Joi from 'joi'



export   const validateOutrightOrder = (data) => {
 const Schema = Joi.object({
 
 
   coupon:Joi.string().optional(),
   reason:Joi.string().optional(),
   name:Joi.string().required(),
   email:Joi.string().required(),
   telephone:Joi.string().required(),
   businessName:Joi.string().required(),
 })
 
 return Schema.validate(data)
}


export   const validateReferral= (data) => {
  const Schema = Joi.object({
  
  
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),

    email:Joi.string().required(),
    telephone:Joi.string().required(),
   
  })
  
  return Schema.validate(data)
 }
 