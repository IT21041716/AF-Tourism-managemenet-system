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
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);
router.get("/getBlogById/:id", getBlogById);

export default router;
