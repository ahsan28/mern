import express from "express";
import auth from "../middleware/auth.js";
import UserController from '../controllers/user.controller.js'


const router = express.Router();


router.post('/login', UserController.login)
router.post('/combo-login', UserController.comboLogin)
router.post('/signup', UserController.signup)
router.post('/logout', UserController.logout)
router.get('/read/:id', auth, UserController.getUser)
router.post('/add', auth, UserController.createUser)


export default router;