import express from "express";
import notes from "./data/notes.js";
import mongoose from 'mongoose';
// import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';

import appRoutes from './routes/app.routes.js';
import taskRoutes from './routes/task.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from "./config/db.js";


const app = express()
dotenv.config()

console.log()
// const CONNECTION_URL = "mongodb+srv://ahsan_online:cqKzCodARP0DpDm4@cluster0.cursf.mongodb.net/myMongoDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
app.use('/', appRoutes);
app.use('/task', taskRoutes);
app.use('/user', userRoutes)
connectDB(app, PORT);






// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);






// app.listen(PORT, console.log("Server started on port 5000"));