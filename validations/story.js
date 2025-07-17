import Joi from 'joi'



const Image = Joi.object().keys({
  url: Joi.string().optional(),
  type: Joi.string().optional(),
  cloudId: Joi.string().optional(),
  
})

export const validateStory = (data) => {
  const Schema = Joi.object({
    title: Joi.string().max(100).min(10).required(),
    content: Joi.string().max(5000).min(500).required(),
    genre: Joi.string().required(),
    postType: Joi.string().required(),
    commentType: Joi.string().required(),

  });

  return Schema.validate(data);
};





export const  validateComment = (data) => {
  const Schema = Joi.object({

    parent:Joi.string().optional(),
    replyingTo:Joi.string().optional(),
    text: Joi.string().max(500).required(),
   
  
    
  })
  
  return Schema.validate(data)
}






















export default validateStory
