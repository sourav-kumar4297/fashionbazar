import React from 'react';
import "./Footer.css"
import {FaFacebook, FaTwitter, FaCartPlus, FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
<footer className='footer'>
<ul className='socials'>
<a href="https://twitter.com/K37326584Sourav"><FaTwitter  className='icons twitter'/></a>
<a href="https://github.com/sourav-kumar4297"> <FaGithub className='icons gitub'/></a>
<a href="https://www.linkedin.com/in/sourav-kumar-509ba9227/"><FaLinkedin  className='icons linkedin'/> </a>
</ul>
<p className='copyright'>© No Copyright, Feel free to replicate.</p>
</footer>
        </div>
  )
}
