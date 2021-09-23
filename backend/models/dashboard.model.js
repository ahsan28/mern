import mongoose from "mongoose";

const dashboardSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: String,
        default: new Date()
    },
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

export default Dashboard;