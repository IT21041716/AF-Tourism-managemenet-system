import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//sithanga
import SignIn from "./IT21041716/scenes/signin";
import SignUp from "./IT21041716/scenes/signup";
import Sample from "./IT21041716/scenes/sample";

// hiruna
import AddBlog from "./IT21049590/AddBlog";
import UpdateBlog from "./IT21049590/UpdateBlog";
import ViewBlogs from "./IT21049590/ViewBlogs";
import AllBlogs from "./IT21049590/UserViewBlog";
import Feedback from "./IT21049590/Feedback";

// sajindu
import Header from "./IT21042560/header";
import Login from "./IT21042560/login";
import AddPost from "./IT21042560/Add-Post";
import UserProfile from "./IT21042560/User-Prifile";
import Certificate from "./IT21042560/User-Certificate";
import Test from "./IT21042560/sample";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
        <Routes>
          {/* hiruna */}

          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/UpdateBlog/:id" element={<UpdateBlog />} />
          <Route path="/ViewBlogs" element={<ViewBlogs />} />
          <Route path="/AllBlogs" element={<AllBlogs />} />
          <Route path="/Feedback/:id" element={<Feedback />} />

          {/* sithanga */}

          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sample" element={<Sample />} />

          {/* sajindu */}
          <Route path="/user" element={<Header />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/user/post/add/:id" element={<AddPost />} />
          <Route path="/user/profile/:id" element={<UserProfile />} />
          <Route path="/user/profile/certificate/:id" element={<Certificate />} />
          <Route path="/user/profile/test/:id" element={<Test />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
