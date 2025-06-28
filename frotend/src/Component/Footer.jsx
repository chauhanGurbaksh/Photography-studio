import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 0',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        {/* Newsletter Section */}
        <div style={{
          paddingBottom: '30px'
        }}>
          <h4 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px'
          }}>Sign Up for Our Newsletter</h4>
          <p style={{
            fontSize: '1rem',
            color: '#bdc3c7',
            marginBottom: '20px'
          }}>Stay updated with the latest photography trends and news.</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
           
          </div>
        </div>

        {/* Social Media Links */}
        <div style={{
          paddingBottom: '30px'
        }}>
          <h4 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px'
          }}>Follow Us</h4>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{
              color: 'white',
              fontSize: '1.5rem',
              textDecoration: 'none'
            }}>
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{
              color: 'white',
              fontSize: '1.5rem',
              textDecoration: 'none'
            }}>
              <i className="fab fa-facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
              color: 'white',
              fontSize: '1.5rem',
              textDecoration: 'none'
            }}>
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>

        {/* Footer Information */}
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '20px',
          fontSize: '1rem',
          color: '#bdc3c7'
        }}>
          <p>&copy; 2025 StudioX Photography. All Rights Reserved.</p>
          <p>
            Designed by <a href="https://yourportfolio.com" style={{
              color: '#e67e22',
              textDecoration: 'none'
            }}>YourName</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
