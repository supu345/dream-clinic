import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import Services from "./pages/ServicesPage";
import Footer from "./components/Footer";
import SpecialitiesPage from "./pages/specialitiesPage";
import SpecialitiesDetailsPage from "./pages/SpecialitiesDetailsPage";
import DoctorsProfile from "./pages/DoctorsProfile";
import AppointmentPage from "./pages/AppointmentPage";
import BlogPage from "./pages/BlogPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specialities" element={<SpecialitiesPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/specialities/:id" element={<SpecialitiesDetailsPage />} />
        <Route path="/doctors/:id" element={<DoctorsProfile />} />
        {/* <Route path="/appointment/:id" element={<AppointmentPage />} /> */}
        <Route path="/appointment/:doctorId" element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
