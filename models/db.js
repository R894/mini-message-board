// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URL;

async function connectToDatabase() {
    try{
        await mongoose.connect(mongoDB);
        console.log("Connected to MongoDB")
    }catch(error){
        console.error("MongoDB connection error:", error);
    }
  
}
  
module.exports = connectToDatabase;