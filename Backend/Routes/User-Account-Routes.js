import  express  from 'express';
import {UserRegister, Signin, Signout, tokenRefresh, getAllUsers,getOneUser } from '../Controllers/User-Account-Controller.js'
import multer from 'multer';
import path from 'path';
const router = express.Router();



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'UploadUserProfileImages')
    },
    filename: function(req, file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage});



router.post('/usersignup',upload.single('ProfilePicture'), UserRegister);
router.post('/usersignin',Signin);
router.delete('/usersignout',Signout);
router.post('/Token',tokenRefresh);
router.get("/allusers", getAllUsers);
router.get("/user/:userid", getOneUser);

export default router;