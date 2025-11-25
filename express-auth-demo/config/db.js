const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected 🚀");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;
