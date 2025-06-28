import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ color: 'white', minHeight: '100vh' }}>
       <img style={{height: 600, width: '100%'}} src="https://cdn.shopify.com/s/files/1/1619/4221/files/Photo_by_Ionut_Comanici_on_Unsplash.jpg?v=1656063904" className="img-fluid" alt="..." />
       <h1 style={{fontSize: 90, marginTop: '-300px', color: 'white'}} className="family-movement">ABOUT US</h1>
      
        {/* Category Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '30px 10px'
      }}>
        {[
          { to: "/Nature", label: "Nature" },
          { to: "/Wedding", label: "Wedding" },
          { to: "/product", label: "Product" },
          { to: "/event", label: "Event" },
          { to: "/portrait", label: "Portrait" }
        ].map((btn, idx) => (
          <Link
            key={idx}
            to={btn.to}
            className="neon-button"
            style={{
              fontSize: 20,
              textDecoration: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              border: '2px solid white',
              transition: 'all 0.3s ease'
            }}
          >
            {btn.label}
          </Link>
        ))}
      </div>

      <div style={{display: 'flex', flexDirection: 'row', gap: 70, fontSize: 30, textAlign: 'center', marginLeft: 90, margin: 50}} />
  <div style={{marginTop: 30}} className="text-container">
    <h1 style={{marginTop: 100}} className="family-movement ">Welcome to Gleam Photography Studio</h1>
  </div><center><p className='text-dark' style={{fontSize: 20, marginTop: 20}}>Photography is the art and process of capturing images using light,<br />typically through a camera, and it's a powerful tool for preserving memories, <br />telling stories, and documenting event</p></center>
  <div className="imes">
    <div className="imes1">
      <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hDUNReDpnaXxnasrtPywoU2i_1UBxmnZlA&s" alt="..." />
      <img className="images" src="https://media.istockphoto.com/id/133944629/photo/happy-family.jpg?s=170667a&w=0&k=20&c=bu6EXpdkrz_pkFfBkYlFSzsmg9fDhDzms69y7oPLAN8=" alt="..." />
      <img className="images" src="https://images.ctfassets.net/hrltx12pl8hq/1D85eAdM0IhXrEYsoOt7Ut/107424ea3e7e10ab3203446dae175cf7/3_jungle_animals.webp" alt="..." />
      <img className="images" src="https://i.pinimg.com/736x/9b/6b/0f/9b6b0fbc0099a4f2f63480c44f3cc640.jpg" alt="..." />
      <img className="images" src="https://t4.ftcdn.net/jpg/03/22/43/95/360_F_322439570_krFpz04v3lHIP5e1rAXGNklNbYPeJ7fu.jpg" alt="..." />
      <img className="images" src="https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=4%2C12%2C2679%2C1521&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt="..." />
      <img className="images" src="https://aquacadabra.com/cdn/shop/articles/shutterstock_335496737_9f35b96f-888b-4156-b86b-e5cc838c5859.jpg?v=1741262905" alt="..." />
      <img className="images" src="https://cdn.houseplansservices.com/content/driar5vsn9j6vdvam33js5o8bo/w991x660.jpg?v=2" alt="..." />
      <img className="images" src="https://static.vecteezy.com/system/resources/thumbnails/038/972/466/small/ai-generated-veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and-served-with-sauce-over-a-rustic-wooden-background-selective-focus-photo.jpg" alt="..." />
      <img className="images" src="https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg" alt="..." />
      <img className="images" src="https://i.pinimg.com/736x/a3/5b/45/a35b4581a38ec7359f1e273e0dc3de5a.jpg" alt="..." />
      <img className="images" src="https://d397bfy4gvgcdm.cloudfront.net/232007-RIc_0001-isMnC.jpeg" alt="..." />
      <img className="images" src="https://www.k4fashion.com/wp-content/uploads/2020/04/Bride-And-Groom-Wedding-Outfits-6.jpg" alt="..." />
      <img className="images" src="https://i.pinimg.com/736x/df/81/65/df81654bda84a4bc4512e136cdfeb0de.jpg" alt="..." />
      <img className="images" src="https://img.freepik.com/premium-photo/male-model-hd-8k-wallpaper-stock-photographic-image_890746-22075.jpg" alt="..." />
      <br />
      <h1 className="family-movement" />
    </div>
  </div>
  <br />
  <br />
  <br />


      {/* Videos Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {["vdo1", "vdo6", "vdo3", "vdo4", "vdo5"].map((vdo, idx) => (
          <video 
            key={idx}
            src={`./images/${vdo}.mp4`}
            autoPlay
            muted
            loop
            controls
            style={{
              marginTop:"40px",
              width: '100%',
              maxWidth: 400,
              height: 'auto',
              border: '2px solid #ccc',
              borderRadius: 8
            }}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className='text-dark' style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Ready to Capture Your Moments?</h2>
        <p style={{ marginBottom: "20px", color: "#ccc" }}>
          Book a session today and let us create beautiful memories for your family.
        </p>
        <Link
          to="/contact"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ff6b6b",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background 0.3s ease"
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e55b5b")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff6b6b")}
        >
          Contact Us
        </Link>
      </div>

     
    </div>
  );
};

export default About;
