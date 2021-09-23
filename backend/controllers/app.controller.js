
const login = async (req, res) => {
    try {

        res.status(200).json("Login backend")
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const home = async (req, res) => {
    try {
        res.status(201).json("home back")
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const functions = {
    login,
    home
}

export default functions;