import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'



//sithanga
import SignIn from './IT21041716/scenes/signin'
import SignUp from './IT21041716/scenes/signup'
import Sample from './IT21041716/scenes/sample'


// hiruna
import AddBlog from "./IT21049590/AddBlog";
import UpdateBlog from "./IT21049590/UpdateBlog";
import ViewBlogs from "./IT21049590/ViewBlogs";
import AllBlogs from "./IT21049590/UserViewBlog";



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


              {/* sithanga */}

              <Route path='/login' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/sample' element={<Sample />} />



            </Routes>
          </BrowserRouter>
    </div>


  );
}

export default App;
