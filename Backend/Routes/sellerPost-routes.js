import express from 'express'
import { addNewPost,uploadImages } from '../Controllers/Sellerpost-controller.js';
import multer from 'multer'

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null , 'Images_multer')
    },
    filename: function(re,file,cb){
        cb(null, Date.now() + '_' + file.originalname);
    },
})
const upload = multer({storage});

router.post('/AddnewPost', upload.single('Thumbnail'), addNewPost);
router.post('/updateImages', upload.array('Images'), uploadImages);





export default router