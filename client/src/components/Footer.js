import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {BsTwitterX} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap30 align-items-center">
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='text-white mb-0'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
  <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2">Subscribe</span>
</div>
            </div>
          </div>
        </div>
    </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className="text-white">
                  5, Agunbiade Street, Ikorodu <br />
                  Lagos State.<br />
                  Postal Code: 110404
                </address>
                <a href="tel:+2349053644527" className='text-white mt-4 d-block mb-2'>+234 9053 644 527</a>
                <a href="mailto:kingscrown@gmail.com" className='text-white mt-4 d-block mb-2'>kingscrown@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap15">
                  <a href=""><BsLinkedin className='text-white'/></a><a href=""><BsFacebook className='text-white'/></a><a href=""><BsInstagram className='text-white'/></a><a href=""><BsTwitterX className='text-white'/></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by King's Crown</p>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}

export default Footer