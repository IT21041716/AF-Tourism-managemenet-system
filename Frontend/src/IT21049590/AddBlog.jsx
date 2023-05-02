import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("shortDescription", shortDescription);
    form.append("fullDescription", longDescription);
    form.append("image", image);

    axios
      .post(`http://localhost:5000/Blog/addBlog`, form)
      .then(() => {
        alert("Blog added");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleCatImg = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          id="description"
          label="Short Description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          id="description"
          label="Long Description"
          multiline
          rows={4}
          maxRows={4}
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          accept="image/*"
          id="image"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            handleCatImg(e);
          }}
        />
        <label htmlFor="image">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
          </Button>
        </label>
      </div>
      <br></br>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default AddBlog;
