import User from '../models/user.model.js';


const getUser = async (req, res) => {
    try {
        const postMessage = await User.find()

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const createUser = async (req, res) => {
    
    const newUser = new User({
        id: 2,
        name: "Tasneeem Khan Inna",
        image: '../../frontend/public/propic.jpg'
    })
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const functions = {
    getUser,
    createUser
}

export default functions;