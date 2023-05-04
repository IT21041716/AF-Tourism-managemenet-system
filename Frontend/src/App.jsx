import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddBlog from "./IT21049590/AddBlog";
import UpdateBlog from "./IT21049590/UpdateBlog";
import ViewBlogs from "./IT21049590/ViewBlogs";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllBlogs from "./IT21049590/UserViewBlog";

import Header from "./IT21042560/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/UpdateBlog/:id" element={<UpdateBlog />} />
          <Route path="/ViewBlogs" element={<ViewBlogs />} />
          <Route path="/AllBlogs" element={<AllBlogs />} />


          <Route path="/user" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
