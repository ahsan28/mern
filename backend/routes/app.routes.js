import express from "express";

import App from '../controllers/app.controller.js'

const router = express.Router();


router.get('login', App.login)
router.post('home', App.home)




export default router;