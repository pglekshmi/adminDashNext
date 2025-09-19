import mongoose from "mongoose";

const cashed = await mongoose.connect("mongodb://localhost:27017/demoDB").then(() => {
    console.log(" MongoDB connected successfully to demoDB");})
    .catch((error) => {
        console.error(" MongoDB connection failed:", error);})

export default cashed;