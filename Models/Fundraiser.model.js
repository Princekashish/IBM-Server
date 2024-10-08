import mongoose, { Schema } from "mongoose";
const FindreseSchems = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true, 
    },
  },
  { timestamps: true }
);
export const CreateFundrise = mongoose.model("createfundrise", FindreseSchems);
