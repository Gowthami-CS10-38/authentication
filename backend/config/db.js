const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Mongo DB connected : ${con.connection.host}`.blue.underline)
    } catch (error) {
        console.log(error + 'MongoDB connection error')
        process.exit(1)
    }
}

module.exports = connectDB
