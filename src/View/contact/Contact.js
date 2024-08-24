import React from 'react';
import Navbar from '../../Components/Navbar';
import img from "./contact.png";
const imgSize={
  height:"100%",
  width:"100%"
  }
function Contact() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 style={{
        color:"grey",
        fontSize:"40px",
        fontStyle:"italic",
        position:"absolute",
        top:"300px",
        left:"700px"
      }}>Contact Us</h1>
    <img src={img} style={imgSize}></img>
    </div>
    </>
  )
}

export default Contact