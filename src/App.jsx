import './App.css'
import ContactUs from './Components/ContactUs'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Home from './Components/Home'
import How from './Components/How'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar'
import Reviews from './Components/Reviews'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <div>
     <Navbar />
     <Home />
     <How />
     <Features />
     <Reviews />
     <ContactUs />
     <Footer />
    </div>}>
     
      </Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
 
  )
}

export default App
