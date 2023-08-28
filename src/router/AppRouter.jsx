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
import React from "../pages/React"
import PraviteRouter from "./PraviteRouter"
import Login from "../pages/Login"
import { useState } from "react"



function AppRouter() {

  const [user , setUser] = useState("")

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route element= {<PraviteRouter user = {user} />}>
        <Route path="/people" element={<People />} /> 
        <Route path="/people/:id" element={<PersonelDetail />} />
      </Route>
      <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
            <Route path="fullstack" element={<FullStack />} >
              <Route index element={<React />} />
              <Route path="react" element={<React />} />
              <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
      </Route>
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/login" element={<Login setUser={setUser} />} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    <Footer />
  </>
  )
}

export default AppRouter