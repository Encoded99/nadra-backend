import { Router } from 'express'


import {getExchange,VerifyPayment} from '../controller/authentication.js'


const userRouter = Router()
userRouter.get('/get-exchange', getExchange)
userRouter.post('/verify-payment',VerifyPayment)









export default userRouter
