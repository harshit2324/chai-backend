import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // on who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //one tp whom 'subscriber ' is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const subscription = mongoose.model("subscription", subscriptionSchema);
