import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom/dist";
import PersonelDetail from "./pages/PersonelDetail";

function App() {
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
  );
}

export default App;
