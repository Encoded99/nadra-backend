import Joi from 'joi'



const Image = Joi.object().keys({
  url: Joi.string().optional(),
  type: Joi.string().optional(),
  cloudId: Joi.string().optional(),
  
})

export const validatePoll = (data) => {
  const Schema = Joi.object({
    title: Joi.string().max(100).required(),
    question: Joi.string().max(150).required(),
    summary: Joi.string().max(550).optional(),  // Add parentheses for `optional()`
    category: Joi.string().max(50).required(),
    subCategory: Joi.string().max(50).required(),
    image: Image,
    closeDate: Joi.string().required(),
    reminderDate: Joi.string().required(),
    tags: Joi.array().items(  // Add parentheses for `array()` and `items()`
      Joi.string().required()  // Add parentheses for `required()`
    ).min(1).required(),
    options: Joi.array().items(
      Joi.object({
        title: Joi.string().max(150).required(),
        point: Joi.number().required(),
      })
    ).min(2).required(),
  });

  return Schema.validate(data);
};





export const  validateComment = (data) => {
  const Schema = Joi.object({

   
   
    text: Joi.string().max(500).required(),
    userName:Joi.string().optional(),
    userId:Joi.string().optional(),
    userImage:Joi.string().optional()
  
    
  })
  
  return Schema.validate(data)
}






export const validateEditProduct = (data) => {
  const Schema = Joi.object({

   
   
    name: Joi.string().optional(),
    category: Joi.string().optional(),
    restockLevel:Joi.number().optional(),
  sku: Joi.string().optional(),
  expiryDate:Joi.date().optional(),
    upb: Joi.number().optional(),
    currentPrice:Joi.object({
      bulkPrice:Joi.number().optional(),
      piecesPrice:Joi.number().optional(),
    
    })
    
  })
  
  return Schema.validate(data)
}





export   const validateInventory = (data) => {
  const Schema = Joi.object({
  
  
    batch:Joi.string().optional(),
    location:Joi.string().optional(),
    serialNo: Joi.string().optional(),
  expiryDate:Joi.date().optional(),
  condition:Joi.string().optional(),
    quantity:Joi.number().required(),
    costPrice:Joi.number().required(),
    transactionDate:Joi.date().optional(),
    seller:Joi.object({
      name: Joi.string().optional(),
      address: Joi.string().optional(),
      telephone: Joi.string().optional(),
      
    }),
    price:Joi.object({
      bulkPrice:Joi.number().required(),
      piecesPrice:Joi.number().optional(),
      
    })
    
  })
  
  return Schema.validate(data)
}



export   const validateSales = (data) => {
  const Schema = Joi.object({
  
  
    quantity:Joi.number().required(),
    packages:Joi.string().required(),
    cost:Joi.number().required(),
    ppu:Joi.number().required(),
    date:Joi.date().required(),
    name:Joi.string().optional(),
    id:Joi.string().optional(),
   

   
    
  })
  
  return Schema.validate(data)
}












export default validatePoll
