import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import axios from "axios";
import { MDBCardImage } from "mdb-react-ui-kit";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Button } from "@mui/material";

export default function ViewBlogs() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  //const image = Product[0].image;
  console.log(blog);

  useEffect(() => {
    function getBlog() {
      axois
        .get(`http://localhost:5000/Blog/viewAll`)
        .then((res) => {
          console.log(res.data);
          setBlog(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBlog();
  }, []);
  const deleteData = (e) => {
    var result = window.confirm("Are you sure?");

    if (result == true) {
      axois
        .delete(`http://localhost:5000/Blog/deleteBlog/${e._id}`)
        .then((res) => {})
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="icc">
      <br></br>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-9 mt-2 mb-2"
          style={{ marginTop: "40px", width: "1300px", marginLeft: "300px" }}
        ></div>
      </div>

      <table
        className="table"
        style={{ marginTop: "40px", width: "1200px", marginLeft: "200px" }}
      >
        <thead class="thead-dark">
          {blog && (
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Short Description </th>
              <th scope="col">Long Description</th>
              <th scope="col">Image</th>
              <th></th>
              <th></th>
            </tr>
          )}
        </thead>

        <tbody>
          {blog &&
            blog.map((e, i) => (
              <tr>
                <td>{e.title}</td>
                <td>{e.shortDescription}</td>
                <td>{e.fullDescription}</td>
                {/* <td><Card sx={{height: "50%"}}>
                  <CardMedia component="img" height="auto" image={e.images[0].url}></CardMedia></Card></td> */}
                <td>
                  <MDBCardImage
                    src={`http://localhost:5000/${e.image}`}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                </td>
                {/* <td className="middle">
                                    <button className="up_pur" >Update</button> */}
                <td>
                  <Link to={"/UpdateBlog/" + e._id}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() => {
                      deleteData(e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="buttons">
        <Link to={"/AddBlog"}>
          <center>
            <button
              type="button2"
              class="btn btn-success"
              style={{ marginLeft: "-200px" }}
            >
              Add Blog
            </button>
          </center>
        </Link>
      </div>
    </div>
  );
}
