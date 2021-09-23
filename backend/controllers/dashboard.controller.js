import DashboardModel from '../models/dashboard.model.js';


const getDashboard = async (req, res) => {
    try {
        const postMessage = await DashboardModel.find()

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createDashboard = async (req, res) => {
    const newDashboard = new DashboardModel(req.body)
    try {
        await newDashboard.save()
        res.status(201).json(newDashboard)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const functions = {
    getDashboard,
    createDashboard
}

export default functions;