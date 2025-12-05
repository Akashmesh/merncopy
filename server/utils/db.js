const mongoose= require("mongoose");
const URI= process.env.MONGODB_URI;

const connectDB = async function () {
    try {
            await mongoose.connect(URI);
    console.log("Connection Created Successfully");
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }

}

module.exports = connectDB;