import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  fullDescription: {
    type: String,
  },
  image: {
    type: String,
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
  ],
  dislike: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
  ],
});
