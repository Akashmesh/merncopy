const mongoose = require("mongoose");
const URI = "mongodb+srv://akashmeshram2486:akashiop@cluster0.s14kei5.mongodb.net/mern_app?appName=Cluster0";
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successfull to db");
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;