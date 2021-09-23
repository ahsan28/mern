

const home = async (req, res) => {
    try {
        res.status(201).json("home back")
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const functions = {
    home,
}

export default functions;