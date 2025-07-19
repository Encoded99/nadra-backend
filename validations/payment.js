import Joi from 'joi'





export const validatePayment = (data) => {
  const Schema = Joi.object({
    
    email: Joi.string().required(),
      duration: Joi.string().required(),
        plan: Joi.string().required(),
    currency: Joi.string().max(5).min(3).required(),
    transactionId: Joi.number().required(),
    amount: Joi.number().required(),

  });

  return Schema.validate(data);
};

























export default validatePayment
