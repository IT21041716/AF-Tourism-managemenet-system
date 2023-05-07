import express from 'express'
import { newOrder,getOrder,deleteOrder} from '../Controllers/Order-controller.js';
const router = express.Router();


router.post('/addorder',newOrder);
router.post('/getOrder',getOrder);
router.post('/deleteOrder',deleteOrder);






export default router