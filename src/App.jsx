import HomePage from "./pages/home"
import UsersPage from "./pages/users"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />          
          <Route path="/users" element={<UsersPage />}  />   
          <Route path="/about" element={<AboutPAge />}  />   
          <Route path="/contact-us" element={<Contact />}  />
        </Routes>
      </BrowserRouter>         
    </>
  )
}

export default App
