import React from 'react';
import '../styles/Footer.css';
import { NavLink } from "react-router-dom";
import location from '../assets/footer-icons/location.png';
import email from '../assets/footer-icons/email.png';
import meta from '../assets/footer-icons/meta.png';
import instagram from '../assets/footer-icons/instagram.png';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='logo'>
            <h1>Leaflet</h1>
            <h4>Start your plant journey today</h4>
        </div>
        <div className="footer-links">
                <img id='location-icon' src={location} alt='location'/>
                <p>Park Avenue,<br/>Cake Baker Street,<br/>Hogwarts, New York,<br/>121101</p>
            
            
            <img src={email} alt='email'/>
            <NavLink to="/">Email Us</NavLink>
            
            
            <img src={meta} alt='meta'/>
            <NavLink to="/">Meta</NavLink>
            
            
            <img src={instagram} alt='instagram'/>
            <NavLink to="/">Instagram</NavLink>
            
        </div>
        <div className='author'>
            <p>Created with &#9829; by Arundhati.</p>
        </div>
    </div>
  )
}
