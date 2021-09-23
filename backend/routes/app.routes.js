import express from "express";
import auth from "../middleware/auth.js";
import App from '../controllers/app.controller.js'

const router = express.Router();


router.post('home', auth, App.home)




export default router;