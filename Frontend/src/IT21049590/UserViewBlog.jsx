import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogNavbar from "./BlogNavbar";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./Blog1.css";
import { styled } from "@mui/system";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const [serQuery, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/Blog/viewAll")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const MyCard = styled(Card)(({ theme }) => ({
    width: "700px",
    margin: "10px",
    height: "400px",
    alignItems: "center",
    marginLeft: "150px",
    marginTop: "50px",
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }));

  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => ({ ...prevLikes, [id]: (prevLikes[id] || 0) + 1 }));
  };

  const handleDislike = (id) => {
    setDislikes((prevDislikes) => ({
      ...prevDislikes,
      [id]: (prevDislikes[id] || 0) + 1,
    }));
  };
  function searchfun(e) {
    setQuery(e.target.value);
  }

  return (
    <div >
      <BlogNavbar />
      <div className="container1">
        <input
          onChange={searchfun}
          placeholder="                                         Search Blogs"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "500px",
            fontSize: "16px",
            marginLeft: "150px",
            marginTop: "20px",
          }}
        />

        <Grid container spacing={2}>
          {blogs &&
            blogs
              .filter(
                (e) =>
                  e.title.toLowerCase().includes(serQuery) ||
                  e.title.includes(serQuery)
              )
              .map((blog) => (
                <Grid item xs={6} key={blog._id}>
                  <MyCard
                    sx={{
                      width: "700px",
                      margin: "10px",
                      height: "400px",
                      alignItems: "center",
                      marginLeft: "150px",
                      marginTop: "50px",
                    }}
                  >
                    <Link to={"/Feedback/" + blog._id}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`http://localhost:5000/${blog.image}`}
                        alt={blog.title}
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.shortDescription}
                      </Typography>
                    </CardContent>
                    <center>
                      <div className="like-dislike-container">
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleLike(blog._id)}
                          sx={{ marginRight: "10px" }}
                        >
                          Like
                        </Button>
                        <span className="like-count">
                          {likes[blog._id] || 0}
                        </span>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDislike(blog._id)}
                          sx={{ marginLeft: "15px" }}
                        >
                          Dislike
                        </Button>
                        <span className="dislike-count">
                          {dislikes[blog._id] || 0}
                        </span>
                      </div>
                    </center>
                  </MyCard>
                </Grid>
              ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllBlogs;
