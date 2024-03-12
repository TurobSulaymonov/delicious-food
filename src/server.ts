import dotenv from "dotenv";
dotenv.config();


import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
console.log("MongoDB connection succeed");
const PORT = process.env.PORT ?? 3005
//app.listen(``)
})
.catch(err =>{
console.log("ERRORon connection MongoDB", err);
})