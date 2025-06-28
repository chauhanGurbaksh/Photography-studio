import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Dashboardadmin from '../Pages/Dashboardadmin'
import Blogadmin from '../Pages/Blogadmin'
import Galleryadmin from '../Pages/Galleryadmin';
import Bookingadmin from '../Pages/Bookingadmin';
import Contactadmin from '../Pages/Contactadmin';
function Dashbord() {
  return (
    <>
      <Navbar />
      <div style={{display:'flex'}}>
        <Sidebar />
        <main className="flex-1   min-h-screen">
          {/* Nested Routes */}
          <Routes>
            <Route path=''element={<Blogadmin />} />
            <Route path="/blogadmin" element={<Blogadmin />} />
            <Route path="/galleryadmin" element={<Galleryadmin />} />
            <Route path='/bookingadmin'element={<Bookingadmin/>}/>
            <Route path='/contactadmin' element={<Contactadmin/>}/>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Dashbord;