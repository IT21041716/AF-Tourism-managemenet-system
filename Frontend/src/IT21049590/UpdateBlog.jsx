import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { MDBCardImage } from "mdb-react-ui-kit";
const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setLongDescription] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  //const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Blog/getBlogById/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setShortDescription(response.data.shortDescription);
        setLongDescription(response.data.fullDescription);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("shortDescription", shortDescription);
    form.append("fullDescription", fullDescription);
    form.append("image", image);

    axios
      .put(`http://localhost:5000/Blog/updateBlog/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Blog updated");
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
          id="shortDescription"
          label="Short Description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          id="longDescription"
          label="Long Description"
          multiline
          rows={4}
          maxRows={4}
          value={fullDescription}
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

        {/* <MDBCardImage
          src={`http://localhost:5000/${image}`}
          alt="Avatar"
          className="my-5"
          style={{ width: "80px" }}
          fluid
        /> */}
      </div>
      <br></br>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Update
        </Button>
      </div>
      <div className="buttons">
        <Link to={"/ViewBlogs"}>
          <center>
            <button
              type="button2"
              class="btn btn-success"
              style={{ marginLeft: "-200px" }}
            >
              Back
            </button>
          </center>
        </Link>
      </div>
    </Box>
  );
};

export default UpdateBlog;
