const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log("Attempt 1 connect to Mongo".cyan)
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(error) {
        console.log("Failed Attempt 1 to connect to mongo DB".red)
        console.log(error)

        try {
            console.log("Attempt 2 connect to Mongo".cyan)
            conn = await mongoose.connect(process.env.MONGO_URI)
        }
        catch(error2) {
            console.log("Failed Attempt 2 to connect to mongo DB".red)
            console.log(error2)
            
            try {
                console.log("Attempt 3 connect to Mongo".cyan)
                conn = await mongoose.connect(process.env.MONGO_URI)
            }
            catch(error3) {
                console.log("Failed Attempt 3 to connect to mongo DB".red)
                console.log(error3)
                process.exit(1)
            }
        }
    }
}

module.exports = connectDB