import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//   },
//   shortDescription: {
//     type: String,
//   },
//   fullDescription: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
//   like: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "",
//     },
//   ],
//   dislike: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "",
//     },
//   ],
//   blogId: {
//     type: String,
//   },
//   feedback: [{ firstName: String, lastName: String }],
// });
// export default mongoose.model("Blog", blogSchema);
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  feedbacks: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      message: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  blogId: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Blog", blogSchema);
