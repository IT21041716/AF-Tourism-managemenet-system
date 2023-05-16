<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
=======
<<<<<<< HEAD
import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
=======
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


>>>>>>> 140ab44b249e2af716bd93cb3055b92a0ac76c08
>>>>>>> a50e7986d47a5ed37e9771b6ac6edd29cbec88a7

//sithanga
import SignIn from "./IT21041716/scenes/signin";
import SignUp from "./IT21041716/scenes/signup";
<<<<<<< HEAD
//import Sample from "./IT21041716/scenes/sample";
=======
import Sample from "./IT21041716/scenes/sample";
import Layout from './IT21041716/scenes/Cpanel/index'
import Dashboard from './IT21041716/scenes/Cpanel/dashboard'
import AddTrip from './IT21041716/scenes/Cpanel/Addtrip'
import TripPlans from './IT21041716/scenes/Cpanel/TripPlans'
import Revords from './IT21041716/scenes/Cpanel/RevOrders'
import Acpords from './IT21041716/scenes/Cpanel/AcpOrders'
import History from './IT21041716/scenes/Cpanel/OrderHistory'
import Checkout from './IT21041716/scenes/checkout/index'
import Test from './IT21041716/scenes/Cpanel/test'
>>>>>>> a50e7986d47a5ed37e9771b6ac6edd29cbec88a7

// hiruna
import AddBlog from "./IT21049590/AddBlog";
import UpdateBlog from "./IT21049590/UpdateBlog";
import ViewBlogs from "./IT21049590/ViewBlogs";
import AllBlogs from "./IT21049590/UserViewBlog";
import Feedback from "./IT21049590/Feedback";
import BlogFeedbacks from "./IT21049590/getFeedback";
import FeedbackItem from "./IT21049590/FeedbackItem";
import BlogNavbar from "./IT21049590/BlogNavbar";

<<<<<<< HEAD
// sajindu
import Header from "./IT21042560/header";
import Login from "./IT21042560/login";
import AddPost from "./IT21042560/Add-Post";
import UserProfile from "./IT21042560/User-Prifile";
import Certificate from "./IT21042560/User-Certificate";
import Test from "./IT21042560/sample";
=======
//import Header from "./IT21042560/header";
>>>>>>> 140ab44b249e2af716bd93cb3055b92a0ac76c08

function App() {
  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
        <Routes>
          {/* hiruna */}

          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/UpdateBlog/:id" element={<UpdateBlog />} />
          <Route path="/ViewBlogs" element={<ViewBlogs />} />
          <Route path="/AllBlogs" element={<AllBlogs />} />
          <Route path="/Feedback/:id" element={<Feedback />} />
          <Route path="/BlogFeedbacks/:id" element={<BlogFeedbacks />} />
          <Route path="/FeedbackItem" element={<FeedbackItem />} />
          <Route path="/BlogNavbar" element={<BlogNavbar />} />

          {/* sithanga */}

<<<<<<< HEAD
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path='/sample' element={<Sample />} /> */}
=======
<<<<<<< HEAD
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

=======
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sample' element={<Sample />} />
          <Route path='/dash' element={<Layout />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/test' element={<Test />} />
          {/* seller controll panel */}
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/New Trips' element={<AddTrip />} />
            <Route path='/Trip Plans' element={<TripPlans />} />
            <Route path='/Received Orders' element={<Revords />} />
            <Route path='/Accepted Orders' element={<Acpords />} />
            <Route path='/Trip Histories' element={<History />} />

          </Route>
>>>>>>> 140ab44b249e2af716bd93cb3055b92a0ac76c08
>>>>>>> a50e7986d47a5ed37e9771b6ac6edd29cbec88a7
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
