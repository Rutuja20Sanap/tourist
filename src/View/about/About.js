import React from 'react';
import Navbar from '../../Components/Navbar';
import img from "./about.jpg"
const imgSize={
  height:"100%",
  width:"100%"
  }
function About() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 style={{
        color:"white",
        fontSize:"40px",
        fontStyle:"italic",
        position:"absolute",
        top:"300px",
        left:"700px"
      }}>About Us</h1>
    <img src={img} style={imgSize}></img>
    </div>
    </>
  )
}

export default About