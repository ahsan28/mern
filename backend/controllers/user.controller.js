import User from '../models/user.model.js';
import jwt  from 'jsonwebtoken';

const login = async (req, res) => {
    const {id,name} = req.body
    try {
        const user = User.findOne({id, name})
        const token = jwt.sign({id: user.id, name: user.name},'test',{expiresIn: "1h"})
        res.status(200).json({user,token})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const signup = async (req, res) => {
    const {id,name,image} = req.body

    try {
        const existingUser = await User.findOne({id, name})
        if(existingUser) res.status(400).json({message: "User already exists!"}) 
        // const hashedPassword = await bcrypt.hash(password,12)

        const user = await User.create({id,name})
        const token = jwt.sign({id: user.id, name: user.name},'test',{expiresIn: "1h"})
        res.status(200).json({user,token})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const comboLogin = (req, res) => {
    const {id,name} = req.body
    console.log("🚀 ~ file: user.controller.js ~ line 33 ~ comboLogin ~ req.body", req.body)

    try {
        let token
        User.findOne({id, name},
            (err, user)=>{
                if (err) res.status(500).send({ message: err });
                else if (!user) {
                    const newUser = new User({id, name})
                    newUser.save((err,newUser1)=>{
                        console.log("🚀 ~ file: user.controller.js ~ line 42 ~ newUser.save ~ newUser1", newUser1)
                        token = jwt.sign({id: newUser1.id, name: newUser1.name},'test',{expiresIn: "1h"})
                        res.status(200).json({user:newUser1,token})

                    })
                }
                else {
                    token = jwt.sign({id: user.id, name: user.name},'test',{expiresIn: "1h"})
                    res.status(200).json({user,token})
                }
            })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const logout = async (req, res) => {
    try {

        res.status(200).json("Logout backend")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.find(res.params.id)

        res.status(200).json(user)
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
    login,
    comboLogin,
    signup,
    logout,
    getUser,
    createUser
}

export default functions;