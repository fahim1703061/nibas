import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <footer class="footer-48201">
      
      <div class="container">
        <div class="row">
          <div class="col-md-4 pr-md-5">
            <a href="/" class="footer-site-logo d-block mb-4">Nibas</a>
            <p>A web platform to buy, sell, rent homes in Bangladesh</p>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <li><a href="/">Clients</a></li>
              <li><a href="/">Team</a></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms &amp; Conditions</a></li>
              <li><a href="/">Partners</a></li>
            </ul>
          </div>
          <div class="col-md text-md-center">
            <ul class="social list-unstyled">
              <li><a href="/"><span className="fa fa-instagram icon-instagram"></span></a></li>
              <li><a href="/"><span class="fa fa-twitter icon-twitter"></span></a></li>
              <li><a href="/"><span class="fa fa-facebook-f icon-facebook"></span></a></li>
              <li><a href="https://github.com/fahim1703061/nibas"><span class="fa fa-github"></span></a></li>
              {/* <li><a href="/"><span class="icon-dribbble"></span></a></li> */}
            </ul>
            <p class=""><a href="/contact" class="btn btn-tertiary">Contact Us</a></p>
          </div>
        </div> 

        <div class="row ">
          <div class="col-12 text-center">
            <div class="copyright mt-5 pt-5">
              <p><small>&copy; 2022 All Rights Reserved.</small></p>
            </div>
          </div>
        </div> 
      </div>
      
    </footer>
  )
}

export default Footer;