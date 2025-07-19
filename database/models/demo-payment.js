import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const Schema = new mongoose.Schema({

  
  
  transactionId:{
  
   type: Number,

  required: true,
  },


  email:{
  
   type: String,
 
  required: true,
  },

  currency:{
  
   type: String,
 
  required: true,
  },

   amount:{
  
   type: Number,

  required: true,
  },
duration:{
   type: String,
 
  required: true,
},

  
plan:{
   type: String,
 
  required: true,
},




  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
} ,{
 timestamps: true, 
},
);




const DemoPayment = mongoose.model('demo-payments', Schema)

export default DemoPayment
