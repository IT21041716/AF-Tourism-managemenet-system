import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'



//sithanga
import SignIn from "./IT21041716/scenes/signin";
import SignUp from "./IT21041716/scenes/signup";
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

// hiruna
import AddBlog from "./IT21049590/AddBlog";
import UpdateBlog from "./IT21049590/UpdateBlog";
import ViewBlogs from "./IT21049590/ViewBlogs";
import AllBlogs from "./IT21049590/UserViewBlog";
import Feedback from "./IT21049590/Feedback";

// import Header from "./IT21042560/header";

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

          {/* sithanga */}

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
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
