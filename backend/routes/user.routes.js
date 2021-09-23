import express from "express";

import UserController from '../controllers/user.controller.js'

const router = express.Router();


router.get('/', UserController.getUser)
router.post('/add',UserController.createUser)


export default router;