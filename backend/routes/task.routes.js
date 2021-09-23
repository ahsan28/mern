import express from "express";
import auth from "../middleware/auth.js";
import Task from '../controllers/task.controller.js'

const router = express.Router();


router.get('/read/:id', Task.read)
router.delete('/remove/:id', Task.remove)
router.put('/update', Task.update)
router.get('/readAll', Task.readAll)
router.post('/add', Task.add)

router.get('/api/notes', (req, res)=>{
    res.json(notes)
})

router.get('/api/notes/:id', (req, res)=>{
    const note = find(x=>x._id===req.params.id)
    res.json(note)
})


export default router;