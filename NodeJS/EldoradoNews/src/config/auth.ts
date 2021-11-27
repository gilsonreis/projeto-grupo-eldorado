import 'dotenv/config'

export default {
    secret: process.env.JWT_SECRET_TOKEN,
    expiresIn: process.env.JWT_EXPIRES_IN
}