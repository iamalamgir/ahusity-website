import React, { useEffect, useState } from "react";
import './Navbar.css';
import cap from '../../assets/cap.png';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <div className="logo">
            <img src={cap} atl="" className="cap" />
            <h2>AHUSity</h2>
        </div>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="btn">Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
