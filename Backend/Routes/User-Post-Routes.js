import  express  from 'express';
import {addPost, getAllPost, getOnePost, updatePost, deletePost } from '../Controllers/User-Post-Controller.js'
import multer from 'multer';
import path from 'path';
const router = express.Router();



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'UploadUserPostImages')
    },
    filename: function(req, file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage});



router.post('/postadd',upload.single('post'), addPost);
router.delete('/postdelete/:id',deletePost);
router.get("/allpost", getAllPost);
router.get("/post/:id", getOnePost);
router.put("/postupdate/:id", updatePost);

export default router;