import  Nav from "../components/Nav"
import { Route, Routes } from "react-router-dom"
import People from "../pages/People"
import PersonelDetail from "../pages/PersonelDetail"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Footer from "../components/Footer"
import Paths from "../pages/Paths"
import FullStack from "../pages/FullStack"
import Aws from "../pages/Aws"
import Next from "../pages/Next"
import Reactt from "../pages/Reactt"


function AppRouter() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/people" element={<People />} /> 
      <Route path="/people/:id" element={<PersonelDetail />} />
      <Route path="/paths" element={ <Paths />}>
        <Route index element = {<FullStack />}>
            <Route path="reactt" element={<Reactt />} />
            <Route path="next" element={<Next />} />
        </Route>
        <Route path="fullstack" element = {<FullStack />}></Route>
        <Route path="aws" element= {<Aws />}>Aws</Route>
     </ Route>
      <Route path="/contact" element={<Contact />} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    <Footer />
  </>
  )
}

export default AppRouter