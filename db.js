const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB(){
    try { 

      mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        serverSelectionTimeoutMS: 5000,

      })
      .then(() => console.log('MongoDB Connected Successfully'))
      .catch((err) => console.error('MongoDB Connection Error:', err));
    } catch (error) {
      console.error('Connection Error:', error);
    }
  }


connectDB()

module.exports = mongoose