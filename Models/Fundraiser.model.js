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
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true, // Ensure every document has an associated user
    },
  },
  { timestamps: true }
);
export const CreateFundrise = mongoose.model("createfundrise", FindreseSchems);
