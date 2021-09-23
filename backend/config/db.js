import mongoose from 'mongoose';


const connectDB = (app, PORT) => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            // useCreateIndex: true
        })
        .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
        .catch((error) => console.log(`${error} did not connect`));
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export default connectDB;