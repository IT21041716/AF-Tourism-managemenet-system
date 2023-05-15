// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Link, useParams } from "react-router-dom";
// import "./Blog.css";

// const AllBlogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const { id } = useParams();
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/Blog/viewAll")
//       .then((response) => {
//         setBlogs(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   const [likes, setLikes] = useState({});
//   const [dislikes, setDislikes] = useState({});

//   const handleLike = (id) => {
//     setLikes((prevLikes) => ({ ...prevLikes, [id]: (prevLikes[id] || 0) + 1 }));
//   };

//   const handleDislike = (id) => {
//     setDislikes((prevDislikes) => ({
//       ...prevDislikes,
//       [id]: (prevDislikes[id] || 0) + 1,
//     }));
//   };
//   return (
//     <div>
//       {blogs.map((blog) => (
//         <Card
//           key={blog._id}
//           sx={{
//             width: "800px",
//             margin: "10px",
//             height: "400px",
//           }}
//         >
//           <Link to={"/Feedback/" + blog._id}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={`http://localhost:5000/${blog.image}`}
//               alt={blog.title}
//             />
//           </Link>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {blog.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {blog.shortDescription}
//             </Typography>
//           </CardContent>
//           <div>
//             <button onClick={() => handleLike(blog._id)}>Like</button>
//             <span>{likes[blog._id] || 0}</span>
//             <button onClick={() => handleDislike(blog._id)}>Dislike</button>
//             <span>{dislikes[blog._id] || 0}</span>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default AllBlogs;
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

//import "./Blog.css";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

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

  return (
    <>
      <BlogNavbar />

      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <Grid item xs={6} key={blog._id}>
            <Card
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
                  <span className="like-count">{likes[blog._id] || 0}</span>
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllBlogs;
