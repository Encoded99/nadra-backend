
import axios from "axios"
import client from '../utils/redisCache.js'
import DemoPayment from '../database/models/demo-payment.js'
import validatePayment from "../validations/payment.js"


export const getExchange=async(req,res)=>{

  try{




const key = `exchange`;

const cachedData = await client.get(key);

const apiKey= process.env.EXCHANGE

if (!cachedData || Object.keys(JSON.parse(cachedData)).length === 0){

 const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=NGN,GBP
`;


const  response= await axios.get(url);
 


const cachedResult=response.data




    const value = JSON.stringify(cachedResult); 

     await client.set(key, value, {
    EX: 86400, // expire time in seconds
  });

return res.status(200).send(cachedResult)

}

else{

  console.log()
 
  const cachedResult=JSON.parse(cachedData);
  
  return res.status(200).send(cachedResult)

}









  
   
    
   
  }


  catch(err){
    console.log(err,'errror sent')
    return res.status(500).send('internal server error')
  }

}


export const VerifyPayment=async(req,res)=>{

  const {email,currency,amount,transactionId,subData}=req.body

const data=req.body

const { error } = validatePayment(data);
  if (error) {
      console.log(error,'error postng details')

    return res.status(400).send(error.details[0].message);
  }
  


try {
	const response= axios.get(`https://api.flutterwave.com/v3/transactions/${transactionId}/verify`, {
  headers: {
    Authorization: `Bearer ${process.env.FLW_KEY}`,
  }
})

const paymentData={
	email,
	transactionId,
	currency,
	amount,
	plan:subData.name,
	duration:subData.instance,
}


const	paymentInstance= new DemoPayment ({...paymentData})

await paymentInstance.save()

    return res.status(200).send('success')
   
  }


  catch(err){
    console.log(err,'errror sent')
    return res.status(500).send('internal server error')
  }

}