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
  },
  { timestamps: true }
);
export const Fundrise = mongoose.model("fundrise", FindreseSchems);
