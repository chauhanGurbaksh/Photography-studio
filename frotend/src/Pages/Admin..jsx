import React from "react";
import './Admin.css';

const Admin = () => {
  return (
    <>
      <center><h1 style={{color:'black', marginTop:'50'}}><bold>Admin Dashboard</bold></h1></center>
      <br />
      <div className="main">
        <div className="inner">
          <p style={{ color: 'red' }}><center>View All Product</center></p>
          <div className="d-grid gap-2">
            <br />
            <button className="btn btn-primary" type="button">View</button>
          </div>
        </div>

        <div className="inner">
          <p style={{ color: 'red' }}><center>Add New Product</center></p>
          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">Add</button>
          </div>
        </div>
      </div>
<br>
</br>
<div className="main1">
<div className="inner1">
<p style={{ color: 'red' }}><center>View All User</center></p>
          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">View</button>
          </div>
        
</div>

<div className="inner1">
<p style={{ color: 'red' }}><center>View All Orders</center></p>
          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">View</button>
          </div>
        
</div>
</div>

    </>
  );
};

export default Admin;
