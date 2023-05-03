import express from "express";
import BlogModel from "../Models/Blog-model.js";

export const addBlog = async (req, res) => {
  //let userId = req.params.id;
  let file = "N/A";
  if (req.file) {
    file = req.file.filename;
  }
  const prefix = "BID";
  const B_ID = prefix + Date.now();
  const title = req.body.title;
  const shortDescription = req.body.shortDescription;
  const fullDescription = req.body.fullDescription;
  const blogId = B_ID;
  console.log(req.body);

  const newBlog = new BlogModel({
    title,
    shortDescription,
    fullDescription,
    image: file,
    blogId,
  });
  console.log(newBlog);
  newBlog
    .save()
    .then(() => {
      res.json("Blog Added");
    })
    .catch((err) => {
      console.log(err);
    });
};
export const viewBlogs = async (req, res, next) => {
  let userId1 = req.params.id;
  await BlogModel.find({ SellerId: userId1 })
    .then((BlogModel) => {
      res.json(BlogModel);
      //console.log(x);
      //res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const viewAll = async (req, res, next) => {
  await BlogModel.find()
    .then((BlogModel) => {
      res.json(BlogModel);
      //console.log(x);
      //res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updateBlog = async (req, res) => {
  let userId = req.params.id;
  const { title, shortDescription, fullDescription } = req.body;

  const updateBlog = {
    title,
    shortDescription,
    fullDescription,
  };
  if (req.file) {
    updateBlog.image = req.file.filename;
  }
  const update = await BlogModel.findByIdAndUpdate(userId, updateBlog)
    .then(() => {
      res.status(200).send({ status: "Blog updated " });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
};
export const deleteBlog = async (req, res) => {
  let userId = req.params.id;
  await BlogModel.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Product deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete Product", error: err.message });
    });
};

export const getBlogById = async (req, res) => {
  let id = req.params.id;
  await BlogModel.findById(id)
    .then((response) => {
      res.status(200).json(response);
      console.log(res);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get product", error: err.message });
    });
};
