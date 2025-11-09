import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
    <>
  {/* Navbar Section */}
  {/* Navbar for Mobile*/}
  <nav className="navbar">
    <NavLink className="anav" to="/">
      <div className="logo">Skillam</div>
    </NavLink>
    <div className="hamburger" onclick="toggleMenu()" id="hamburger">
      <span />
      <span />
      <span />
    </div>
  </nav>
  <div className="mobile-menu" id="mobileMenu">
    <div className="close-menu" onclick="toggleMenu()">
      '
    </div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to="/AboutUs">About Us</NavLink>
    {/* Courses Dropdown */}
    <div className="expandable" onclick="toggleDropdown('coursesDropdown')">
      Courses <span>▶</span>
    </div>
    <div className="mobile-dropdown" id="coursesDropdown">
      <a href="/English">English</a>
      {/* Aviation Subcategories */}
      <div className="expandable" onclick="toggleDropdown('aviationDropdown')">
        Aviation <span>▶</span>
      </div>
      <div className="mobile-dropdown" id="aviationDropdown">
        <a href="/Aviation#cabin">Cabin Crew</a>
        <a href="/Aviation#ground">Ground Staff</a>
        <a href="/Aviation#aocs">AO Course</a>
      </div>
      {/* Computer Subcategories */}
      <div className="expandable" onclick="toggleDropdown('computerDropdown')">
        Computer <span>▶</span>
      </div>
      <div className="mobile-dropdown" id="computerDropdown">
        <a href="/Computer#basic">Basic Computer</a>
        <a href="/Computer#advanced">Advanced Computer</a>
      </div>
      {/* CAD Course Subcategories */}
      <div className="expandable" onclick="toggleDropdown('cadDropdown')">
        CAD Course <span>▶</span>
      </div>
      <div className="mobile-dropdown" id="cadDropdown">
        <a href="~/Home/Index#">1 Course</a>
        <a href="~/Home/Index#">2 Course</a>
        <a href="~/Home/Index#">3 Course</a>
        <a href="~/Home/Index#">4 Course</a>
      </div>
    </div>
    <a href="https://skillamedtech.in/gallery.html">Gallery</a>
    <a href="~/Home/Index#contact">Contact Us</a>
    <a href="tel:+918130846706" className="phone-btn">
      📞 +91 81308 46706
    </a>
  </div>
  {/* Navbar for Desktop */}
  <nav className="navbard">
    <NavLink className="anavd" href="/">
      <div className="logod">Skillam</div>
    </NavLink>
    <ul className="nav-linksd" id="nav-linksd">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About-Us">About Us</NavLink>
      </li>
      <li className="dropdownd">
        <a href="~/Home/Index">Courses ▼</a>
        <ul className="dropdown-menud">
          <li>
            <a href="/English">English Language</a>
          </li>
          <li className="dropdownd">
            <a href="">Aviation Training ▶</a>
            <ul className="dropdown-menud">
              <li>
                <a href="/Aviation#cabin">Cabin Crew Training</a>
              </li>
              <li>
                <a href="/Aviation#ground">Ground Staff Training</a>
              </li>
              <li>
                <a href="/Aviation#aocs">AO/CS Training</a>
              </li>
            </ul>
          </li>
          <li className="dropdownd">
            <a href="/">Computer Training ▶</a>
            <ul className="dropdown-menud">
              <li>
                <a href="/Computer#basic">Basic Computer</a>
              </li>
              <li>
                <a href="/Computer#advanced">Advance Computer</a>
              </li>
            </ul>
          </li>
          <li className="dropdownd">
            <a href="/#">CAD Course ▶</a>
            <ul className="dropdown-menud">
              <li>
                <a href="/Home/#">1st Course</a>
              </li>
              <li>
                <a href="/Home#">2nd Course</a>
              </li>
              <li>
                <a href="/Home#">3rd Course</a>
              </li>
              <li>
                <a href="#">4th Course</a>
              </li>
              <li>
                <a href="#">5th Course</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://skillamedtech.in/gallery.html">Gallery</a>
      </li>
      <li>
        <NavLink to="/#contact">Contact Us</NavLink>
      </li>
      <li>
        <a href="~/Student/Login">Student Login</a>
      </li>
    </ul>
  </nav>
</>

    </>
  )
}

export default Header