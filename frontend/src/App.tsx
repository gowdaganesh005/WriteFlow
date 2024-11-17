import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import { Blogs } from './Pages/Blogs'
import { Blog } from './Pages/Blog'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/signup' Component={SignUp}/>
    <Route path='/signin' Component={SignIn}/>
    <Route path='/blogs' Component={Blogs}/>
    <Route path='/blog/:id' Component={Blog}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
