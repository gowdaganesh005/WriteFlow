import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/signup' Component={SignUp}/>
    <Route path='/signin' Component={SignIn}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
