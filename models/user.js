import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: { type: String, required: true },
  highestPoints: { type: Number, required: true },
});

export default mongoose.models.User || mongoose.model("User", userModel);
