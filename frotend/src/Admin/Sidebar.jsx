import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaBoxOpen,
  FaShoppingCart,
  FaArrowCircleLeft,
  FaObjectGroup,
} from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  return (
    <div
      style={{
        height: '100vh',
        minWidth: '256px',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)', // Gradient bg
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)',
        padding: '10px',
      }}
    >
      <nav style={{ flex: 1 }}>

        <SidebarLink
          to="/dashboard/galleryadmin"
          label={<><i className="bi bi-image" style={{ fontSize: '24px' }}></i> Gallery</>}
          isActive={location.pathname === '/dashboard/galleryadmin'}
        />

        <SidebarLink
          to="/dashboard/blogadmin"
          label={<><i className="bi bi-pencil-square" style={{ fontSize: '24px' }}></i> Blog</>}
          isActive={location.pathname === '/dashboard/blogadmin'}
        />

        <SidebarLink
          to="/dashboard/bookingadmin"
          label={
            <>
              <i className="bi bi-calendar-check" style={{ fontSize: '24px' }}></i> Booking
            </>
          }
          isActive={location.pathname === '/dashboard/bookingadmin'}
        />

        <SidebarLink
          to="/dashboard/contactadmin"
          label={
            <>
              <i className="bi bi-envelope" style={{ fontSize: '24px', marginRight: '8px' }}></i>
              Contact
            </>
          }
          isActive={location.pathname === '/dashboard/contactadmin'}
        />

        <SidebarLink
          to="/"
          icon={<FaArrowCircleLeft size={20} />}
          label="GO BACK"
        />
      </nav>
    </div>
  );
}

function SidebarLink({ to, icon, label, isActive }) {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    textDecoration: 'none',
    color: isActive ? '#ffcc00' : 'white', // Active link color
    backgroundColor: isActive ? '#2a5298' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
  };

  return (
    <Link to={to} style={linkStyle}>
      <span>{icon}</span>
      <span style={{ fontSize: '16px' }}>{label}</span>
    </Link>
  );
}

export default Sidebar;