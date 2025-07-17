
import axios from "axios"
import client from '../utils/redisCache.js'




export const getExchange=async(req,res)=>{

  try{




const key = `exchange`;

const cachedData = await client.get(key);
console.log(cachedData,'response cahed')
const apiKey= process.env.EXCHANGE

if (!cachedData || Object.keys(JSON.parse(cachedData)).length === 0){

 const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=NGN,GBP
`;


const  response= await axios.get(url);
 


const cachedResult=response.data


console.log(cachedResult,'cached-result')

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