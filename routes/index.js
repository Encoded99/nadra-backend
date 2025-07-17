import { Router } from 'express'
import HomePage from '../controller/homepage.js'
import RequestIp from '../middleware/request-ip.js'

import userRouter from './user.routes.js'



const router = Router()

// router.use(RequestIp)

router.get('/', HomePage)
router.use('/users', userRouter)





export default router
