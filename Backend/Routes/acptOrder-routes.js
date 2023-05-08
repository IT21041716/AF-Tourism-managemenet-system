import express from 'express'
import { orderAccept ,getAcptOrder} from '../Controllers/acptOrder-controller.js';
const router = express.Router();


router.post('/orderAccept',orderAccept);
router.post('/getAcptOrder',getAcptOrder);






export default router