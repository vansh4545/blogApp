import express from 'express';


import {signupUser,loginuser} from '../controller/user_controller.js';

const router = express.Router();
router.post('/signup',signupUser);
router.post('/login',loginuser);

export default router;