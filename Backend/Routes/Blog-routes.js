import express from "express";
const router = express.Router();
import multer from "multer";

import {
  addBlog,
  viewBlogs,
  viewAll,
  updateBlog,
  deleteBlog,
  getBlogById,
  addRating,
  addFeedback,
} from "../Controllers/Blog-Controller.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/addBlog", upload.single("image"), addBlog);
router.get("/viewBlogs", viewBlogs);
router.get("/viewAll", viewAll);
router.put("/updateBlog/:id", upload.single("image"), updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);
router.get("/getBlogById/:id", getBlogById);

router.post("/addFeedback/:id", addFeedback);
router.post("/addRating/:id", addRating);

export default router;
