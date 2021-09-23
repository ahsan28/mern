import express from "express";

import Dashboard from '../controllers/dashboard.controller.js'

const router = express.Router();


router.get('/dashboard', Dashboard.getDashboard)
router.post('/dashboard/post',Dashboard.createDashboard)

router.get('/api/notes',(req, res)=>{
    res.json(notes)
})

router.get('/api/notes/:id',(req, res)=>{
    const note = find(x=>x._id===req.params.id)
    res.json(note)
})


export default router;