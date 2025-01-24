import mongoose from "mongoose";

export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://hindu052816:hindu052816@cluster1.dxv3gjk.mongodb.net/food-del').then(()=>console.log("DB connected"));
}