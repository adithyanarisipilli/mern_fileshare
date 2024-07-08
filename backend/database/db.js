import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBConnection= async ()=>{
    const MONGODB_URI=process.env.MONGODB_URI
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DBconnection established!");
  } catch (error) {
    console.error("Error connecting to MongoDB:",error);
  }
};

export default DBConnection;