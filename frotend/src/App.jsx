import React from "react";
import {  Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Galleries from "./Pages/Galleries";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Nature from "./Pages/Nature";
import Event from "./Pages/Event";
import Wedding from "./Pages/Wedding";
import Booking from "./Pages/Booking";
import Dashbord from "./Admin/Dashborad";
import RegisterForm from "./Pages/RegisterForm";
import LoginPage from "./Pages/LoginPage";
import Product from "./Pages/Product";
import Portrait from "./Pages/Portrait";

const App = () => {
  const location = useLocation();
  let isDashboard = location.pathname.startsWith("/dashboard");
  const auth = localStorage.getItem("email")

  return (
        
      <>
        {!isDashboard && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/event" element={<Event />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/portrait" element={<Portrait/>}/>
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard/*" element={auth ? <Dashbord/>:<LoginPage/>} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {!isDashboard && <Footer />}
      </>
    
  );
};

export default App;
