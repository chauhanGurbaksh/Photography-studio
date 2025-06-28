import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

const Home=()=>{
    return(
        <>
       <div className="image-container">
  <img src="https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-3-01.jpg" alt="Photography Studio" className="background-image" />
</div>

<div>
  <div className="container mt-5">
    <div className="ww" />
    <h1>Welcome to StudioX Photography</h1>
    <p>We capture moments that last a lifetime.</p>
  </div>
  <div className="next">
    <p /><center><h1 className>We're Gleam, a small and enthusiastic<br />photography studio based in New <br />York</h1></center><p />
    <br />
    <p /><center>We love photography and travel for meeting new beautiful people all over the world. Propriae <br />voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. <br />Ancillae torquatos in nec, impetus nostrum ea eos. </center><p />
  </div>
  <div className="next1">
    <img className="imges" src="https://todaysbride.com/wp-content/uploads/2019/02/00291-Ariel-International-Wedding-Photos.jpg" alt="..." />
    <img className="imges1" src="https://img.freepik.com/premium-photo/international-wedding-couple-european-bride-asian-groom-walk-around-city-together_1429-7933.jpg" alt="..." />
    <img className="image2" src="https://i.pinimg.com/736x/4d/ed/be/4dedbe1b247458b9b1c360973b2a9da1.jpg" alt="..." />
    <img style={{marginTop:"90px",height:"600px"}} className="image3" src="https://m.media-amazon.com/images/I/71ZNbdDQZOL._SL1280_.jpg" alt="..." />
    <img style={{marginTop:90,height:"600px"}} className="image4" src="https://www.wed2b.com/media/catalog/product/p/r/prue-sheath-wedding-dress-front-aaliyah-quinn.jpg?optimize=high&fit=bounds&height=476&width=370&canvas=370:476" alt="..." />
    <img style={{marginLeft:"-50px", height:"600px",marginTop:"-600px" , marginLeft:"10px"}} className="image4" src="https://i.pinimg.com/736x/bc/16/3d/bc163d70251b7f5bc18b097b73d90a17.jpg" alt="..." />

  </div>
  <div className="next2" style={{ backgroundColor: "#f7f7f7", padding: "50px 20px" }}>
  <div className="ROB" style={{ textAlign: "center", fontSize: "2.5rem", color: "#2c3e50", fontWeight: "bold", marginBottom: "30px" }}>
    Our Latest Work
  </div>
  
  <div className="cardsm" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
    {/* Card 1 */}
    <div className="card" style={{ width: '18rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease' }} 
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
      <img src="https://media.weddingz.in/images/20230103123319/red-lehenga-8.jpg" className="card-img-top" alt="Wedding Portrait" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div className="card-body" style={{ padding: "15px", backgroundColor: "#fff" }}>
        <p className="card-text" style={{ fontSize: "1rem", color: "#444", lineHeight: "1.4" }}>
          Lovely Wedding<br />
          <span style={{ fontWeight: "bold", color: "#e74c3c" }}>January 18, 2024</span> <span style={{ fontStyle: "italic" }}>NEW PORTRAITS</span>
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card" style={{ width: '18rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease' }} 
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQie39hrLdQok00NvC7k2URi3jXAsMVnmeX8w&s" 
        className="card-img-top" alt="Family Portrait" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
      <div className="card-body" style={{ padding: "15px", backgroundColor: "#fff" }}>
        <p className="card-text" style={{ fontSize: "1rem", color: "#444", lineHeight: "1.4" }}>
          Family Movement<br />
          <span style={{ fontWeight: "bold", color: "#e74c3c" }}>January 15, 2024</span> <span style={{ fontStyle: "italic" }}>Fashion News</span>
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card" style={{ width: '18rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease' }} 
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
      <img src="https://models.bestmodelsagency.com/recursos/clientes/6AB4B0AA-08FF-4003-A265-7ED9F85B4467/list.jpg?v1667494702?202410081559" 
        className="card-img-top" alt="Ball Gown" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
      <div className="card-body" style={{ padding: "15px", backgroundColor: "#fff" }}>
        <p className="card-text" style={{ fontSize: "1rem", color: "#444", lineHeight: "1.4" }}>
Models <br>
</br>
          <span style={{ fontWeight: "bold", color: "#e74c3c" }}>January 15, 2024</span> <span style={{ fontStyle: "italic" }}>Fashion News</span>

        </p>
      </div>
    </div>
  </div>
</div>

  <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Ready to Capture Your Moments?</h2>
        <p style={{ marginBottom: "20px", color: "#555" }}>
          Book a session today and let us create beautiful memories for your family.
        </p>
        </div>
  <center><Link to='/Booking'><button style={{color:'white',backgroundColor:'red', }}> Booking Now</button></Link></center>
  
<br>
</br>
  <div  style = {{backgroundColor:"darkgray"}}className="icons">
    <div style ={{backgroundColor:"darkgray"}}className="icons1">
      <div className="icon-item">
        <i className="fas fa-trophy" style={{fontSize: 48, color: 'darkred'}} /><br />
        <br />
        <p className="th1">7</p>
        <p className="th">Awards</p>
      </div>
      <div className="icon-item">
        <i className="fas fa-ring" style={{fontSize: 48, color: 'darkred'}} />
        <br />
        <br />
        <p className="th1">52</p>
        <p className="th">Weddings</p>
      </div>
      <div className="icon-item">
        <i className="fas fa-camera" style={{fontSize: 48, color: 'darkred'}} />
        <br />
        <br />
        <p className="th1">250k</p>
        <p className="th">Photo</p>
      </div>
      <div className="icon-item">
        <i className="fas fa-clock" style={{fontSize: 48, color: 'darkred'}} />
        <br />
        <br />
        <p className="th1"><bold>610</bold></p>
        <p className="th">Happy hours</p>
      </div>
    </div>
  </div>
</div>



        </>
    )
}

export default Home;