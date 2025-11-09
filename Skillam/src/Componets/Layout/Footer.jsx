import React from 'react'

function Footer() {
  return (
   <>
   <>
  {/* footer  */}
  <footer className="footer">
    <div className="container">
      <div className="footer-wrapper">
        {/* Footer Logo & About */}
        <div className="footer-about">
          <img
            src="/Images/skillam logo.png"
            alt="Skillam Logo"
            className="footer-logo"
            loading="lazy"
          />
          <p>Your trusted English learning institute for a brighter future.</p>
        </div>
        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="~/Home/Index">Home</a>
            </li>
            <li>
              <a href="~/Home/AboutUs">About Us</a>
            </li>
            <li>
              <a href="https://skillamedtech.in/gallery.html">Gallery</a>
            </li>
            <li>
              <a href="~/Home/Index#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Our Courses */}
        <div className="footer-courses">
          <h3>Our Courses</h3>
          <ul>
            <li>
              <a href="~/Home/English">English Language</a>
            </li>
            <li>
              <a href="~/Home/Aviation">Aviation Training</a>
            </li>
            <li>
              <a href="~/Home/Computer">Computer Training</a>
            </li>
            <li>
              <a href="~/Home/Index#">CAD Course</a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> Metro Pillar No. 796, Dwarka Mor, Plot No.
            456 1st Floor, New Delhi, Delhi 110078
          </p>
          <p>
            <strong>Email:</strong> Info@skillamedtech.in
          </p>
          <p>
            <strong>Phone:</strong> 011-4506 6413
          </p>
        </div>
      </div>
      {/* Social Media & Copyright */}
      <div className="footer-bottom">
        <div className="social-links">
          <a href="/Home/Index#">
            <img src="/Images/facebook.webp" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/skillam_edtech/">
            <img src="/Images/instagram.webp" alt="Instagram" />
          </a>
          <a href="/Home/Index#">
            <img src="/Images/youtube.webp" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/company/skillam-education-technology/">
            <img src="/Images/linkedin.webp" alt="LinkedIn" />
          </a>
        </div>
        <p>© 2025 Skillam. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.siddharthsingh10x.com/"
            target="_blank"
            className="siddharth-link"
          >
            Siddharth Singh
          </a>
        </p>
      </div>
    </div>
  </footer>
  {/* WhatsApp Floating Button */}
  <a
    href="https://wa.me/918130846706"
    className="whatsapp-button"
    target="_blank"
  >
    <img src="/Images/whatsapp.webp" alt="WhatsApp" />
  </a>
</>

   </>
  )
}

export default Footer