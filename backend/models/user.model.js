import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String
});

const User = mongoose.model('User', UserSchema);

export default User;