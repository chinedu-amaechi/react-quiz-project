import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}
