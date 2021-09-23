import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
console.log("🚀 ~ file: auth.js ~ line 4 ~ auth ~ req", req)
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("🚀 ~ file: auth.js ~ line 7 ~ auth ~ token", token)

        let decodedData = jwt.verify(token,'test')

        req.user_id = decodedData?._id
        req.userId = decodedData?.id

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth