// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from "react-router-dom";
// import { Typography, Card, CardContent, CardMedia } from "@mui/material";

// const Feedback = ({ match }) => {
//   const [blog, setBlog] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/Blog/getBlogById/${id}`
//         );
//         setBlog(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   return (
// <Card sx={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
//   <CardMedia
//     component="img"
//     height="250"
//     image={`http://localhost:5000/${blog.image}`}
//     alt={blog.title}
//   />
//   <CardContent sx={{ flexGrow: 1 }}>
//     <Typography gutterBottom variant="h4" component="h2">
//       {blog.title}
//     </Typography>
//     <Typography variant="body1">{blog.shortDescription}</Typography>
//     <Typography variant="body1">{blog.fullDescription}</Typography>
//   </CardContent>
// </Card>
//   );
// };
// export default Feedback;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useParams, Link } from "react-router-dom";
const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 3,
});

const Field = styled(TextField)({
  marginBottom: 2,
});

const SubmitButton = styled(Button)({
  marginTop: 2,
});

const Feedback = ({ blogId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/Blog/getBlogById/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    try {
      const response = await axios.post(
        `http://localhost:5000/Blog/addFeedback/${id}`,
        {
          firstName,
          lastName,
          rating,
          comment,
        }
      );
      console.log(response.data);
      setFirstName("");
      setLastName("");
      setRating("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card sx={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
        <CardMedia
          component="img"
          height="250"
          image={`http://localhost:5000/${blog.image}`}
          alt={blog.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h4" component="h2">
            {blog.title}
          </Typography>
          <Typography variant="body1">{blog.shortDescription}</Typography>
          <Typography variant="body1">{blog.fullDescription}</Typography>
        </CardContent>
      </Card>

      <Form onSubmit={handleSubmit}>
        <Field
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Field
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Field
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Field
          label="comment"
          variant="outlined"
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <SubmitButton variant="contained" color="primary" type="submit">
          Submit Feedback
        </SubmitButton>
      </Form>
    </div>
  );
};

export default Feedback;
