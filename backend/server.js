const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")


const PORT = process.env.PORT || 5000
const app = express()


app.get('/',(req,res)=>{
    res.send("My API is running. . .")
})

app.post('/login',(req, res)=>{
    res.json(req)
})

app.get('/api/notes',(req, res)=>{
    res.json(notes)
})

app.get('/api/notes/:id',(req, res)=>{
    const note = notes.find(x=>x._id===req.params.id)
    res.json(note)
})

app.listen(PORT, console.log("Server started on port 5000"));