import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'




import SignIn from './IT21041716/scenes/signin'
import SignUp from './IT21041716/scenes/signup'
import Sample from  './IT21041716/scenes/sample'

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
        <Routes>









        {/* sithanga */}

          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sample' element={<Sample />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
