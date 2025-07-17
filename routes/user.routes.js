import { Router } from 'express'


import {

  getExchange,

  




} from '../controller/authentication.js'


const userRouter = Router()
userRouter.get('/get-exchange', getExchange)








export default userRouter
