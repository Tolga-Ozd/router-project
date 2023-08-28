import { Nav } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import People from "../pages/People"
import PersonelDetail from "../pages/PersonelDetail"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Footer from "../components/Footer"


function AppRouter() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/people" element={<People />} /> 
      <Route path="/people/:id" element={<PersonelDetail />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    <Footer />
  </>
  )
}

export default AppRouter