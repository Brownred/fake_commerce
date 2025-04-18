import NavBar from "./layouts/navBar"
import HomePage from "./pages/home"
import UsersPage from "./pages/users"
import AboutUs from "./pages/about-us.jsx"
import ProductPage from "./pages/productPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (

    
    <>
      

      <BrowserRouter>   

      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />          
          <Route path="/users" element={<UsersPage />}  />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:ID" element={<ProductPage />} />
          
        </Routes>
      </div>
        {/* <Footer /> */}
      </BrowserRouter>         
    </>
  )
}

export default App
