import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
<><>
  <section className="hero">
    <div className="hero-content">
      <h1>
        Master English with Confidence at <span>Skillam!</span>
      </h1>
      <p>Join our expert-led courses and improve your English fluency today.</p>
      <div className="hero-buttons">
        <a href="/Home#course" className="btn1 primary-btn1">
          Explore Courses
        </a>
        <a href="/#contact" className="btn1 secondary-btn">
          CONTACT US
        </a>
      </div>
    </div>
    <div className="hero-image">
      <img src="/Images/Hero img.webp" alt="Learn English at Skillam" />
    </div>
  </section>
  {/* about section  */}
  <section className="about">
    <div className="about-container">
      <div className="about-content">
        <h2>
          About <span>Skillam</span>
        </h2>
        <p>
          At Skillam, we empower students with expert-led English courses
          designed to enhance fluency, confidence, and communication skills. Our
          interactive learning methods, experienced trainers, and structured
          curriculum ensure your success.
        </p>
        <ul className="about-features">
          <li>✔ Interactive Learning Experience</li>
          <li>✔ Expert &amp; Certified Trainers</li>
          <li>✔ Personalized Coaching</li>
          <li>✔ Practical &amp; Real-Life Communication Skills</li>
        </ul>
        <NavLink to="/About-Us" className="btn2 primary-btn">
          Know More
        </NavLink>
      </div>
      <div className="about-image">
        <video controls="" unmuted="" loop="">
          <source src="/Videos/about us video.mp4" type="video/mp4" />
        </video>
        {/* <img src="images/picture11.webp" alt="About Skillam - English Institute"> */}
      </div>
    </div>
  </section>
  {/* courses section  */}
  <section id="course" className="courses">
    <div className="container">
      <h2 className="section-title1">
        Our <span>Courses</span>
      </h2>
      <p className="section-subtitle1">
        Enhance your skills with our expert-led training programs.
      </p>
      <div className="courses-grid">
        {/* English Language Course */}
        <div className="course-card">
          <img
            src="/Images/english.webp"
            alt="English Language Course"
            loading="lazy"
          />
          <h3>English Language</h3>
          <p>Master English communication skills with expert-led training.</p>
          <a href="/English" className="btn">
            Read More
          </a>
        </div>
        {/* Aviation Training Course */}
        <div className="course-card">
          <img
            src="/Images/aviation.webp"
            alt="Aviation Training"
            loading="lazy"
          />
          <h3>Aviation Training</h3>
          <p>Build a strong career in aviation with our specialized courses.</p>
          <a href="~/Home/Aviation" className="btn">
            Read More
          </a>
        </div>
        {/* Computer Training Course */}
        <div className="course-card">
          <img
            src="/Images/computer.webp"
            alt="Computer Training"
            loading="lazy"
          />
          <h3>Computer Training</h3>
          <p>Learn essential computer skills for a competitive edge.</p>
          <a href="/Home/Computer" className="btn">
            Read More
          </a>
        </div>
        {/* CAD Course */}
        <div className="course-card">
          <img src="/Images/cad.webp" alt="CAD Course" loading="lazy" />
          <h3>CAD Course</h3>
          <p>Become a CAD expert with practical, hands-on training.</p>
          <a href="/Home/Index#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* testimonials section  */}
  <section className="testimonials">
    <div className="container">
      <h2 className="section-title2">
        What Our <span>Students Say</span>
      </h2>
      <p className="section-subtitle3">Real experiences from our learners.</p>
      <div className="testimonial-slider">
        <div
          className="testimonial-slide"
          style={{ transform: "translateX(-200%)" }}
        >
          <div className="testimonial-content">
            <img
              src="/Images/stu1.jpg"
              alt="Student 1"
              className="student-photo"
              loading="lazy"
            />
            <h3>Bhumika</h3>
            <p className="course">Skillam Student</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-message">
              "Skillam helped me improve my English skills. The trainers are
              excellent!"
            </p>
          </div>
        </div>
        <div
          className="testimonial-slide"
          style={{ transform: "translateX(-200%)" }}
        >
          <div className="testimonial-content">
            <img
              src="/Images/stu2.jpg"
              alt="Student 2"
              className="student-photo"
              loading="lazy"
            />
            <h3>Kashish</h3>
            <p className="course">Skillam Student</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-message">
              "The aviation training at Skillam is world-class. Highly recommend
              it!"
            </p>
          </div>
        </div>
        <div
          className="testimonial-slide"
          style={{ transform: "translateX(-200%)" }}
        >
          <div className="testimonial-content">
            <img
              src="/Images/Sids.webp"
              alt="Student 3"
              className="student-photo"
              loading="lazy"
            />
            <h3>Siddharth Singh</h3>
            <p className="course">Skillam Student</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-message">
              "I gained hands-on experience in computers. Very happy with the
              training!"
            </p>
          </div>
        </div>
        <div
          className="testimonial-slide"
          style={{ transform: "translateX(-200%)" }}
        >
          <div className="testimonial-content">
            <img
              src="/Images/stu3.png"
              alt="Student 4"
              className="student-photo"
              loading="lazy"
            />
            <h3>Muskan Nain</h3>
            <p className="course">Skillam Student</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-message">
              "The CAD course is well-structured and practical. Great learning
              environment!"
            </p>
          </div>
        </div>
        <div
          className="testimonial-slide"
          style={{ transform: "translateX(-200%)" }}
        >
          <div className="testimonial-content">
            <img
              src="/Images/stu4.png"
              alt="Student 5"
              className="student-photo"
              loading="lazy"
            />
            <h3>N. Ashish</h3>
            <p className="course">Skillam Student</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-message">
              "My confidence in speaking English has improved a lot. Thanks to
              Skillam!"
            </p>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <button className="prev-btn" onclick="prevSlide()">
        ❮
      </button>
      <button className="next-btn" onclick="nextSlide()">
        ❯
      </button>
    </div>
  </section>
  {/* faq section  */}
  <section id="faqs" className="faqs-section">
    <div className="container">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">
        Find answers to common questions about Skillam courses &amp; programs.
      </p>
      <div className="faq-container">
        {/* FAQ 1 */}
        <div className="faq-item">
          <button className="faq-question">
            What courses does Skillam offer for English learning?
          </button>
          <div className="faq-answer">
            <p>
              Skillam provides Spoken English, Business English, IELTS
              Preparation, and Personality Development courses.
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div className="faq-item">
          <button className="faq-question">
            How long does it take to become fluent in English?
          </button>
          <div className="faq-answer">
            <p>
              It depends on your current level, but with regular practice and
              our structured courses, you can see improvement within 3-6 months.
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div className="faq-item">
          <button className="faq-question">
            Do you offer online classes as well?
          </button>
          <div className="faq-answer">
            <p>
              Yes, we offer both online and offline classes, making it easy for
              students to learn from anywhere.
            </p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div className="faq-item">
          <button className="faq-question">
            What teaching methods does Skillam use?
          </button>
          <div className="faq-answer">
            <p>
              We use interactive learning techniques, role-playing, real-life
              conversations, and personalized coaching to enhance your English
              skills.
            </p>
          </div>
        </div>
        {/* FAQ 5 */}
        <div className="faq-item">
          <button className="faq-question">Who can join Skillam??</button>
          <div className="faq-answer">
            <p>
              Anyone! Our courses are designed for beginners, professionals, and
              students looking to upskill.
            </p>
          </div>
        </div>
        {/* FAQ 6 */}
        <div className="faq-item">
          <button className="faq-question">
            {" "}
            Are the courses live or recorded??
          </button>
          <div className="faq-answer">
            <p>
              We offer both live and pre-recorded courses, so you can learn at
              your own pace.
            </p>
          </div>
        </div>
        {/* FAQ 7 */}
        <div className="faq-item">
          <button className="faq-question">
            Do I get a certificate after completion??
          </button>
          <div className="faq-answer">
            <p>
              Yes! All Skillam courses come with a verified certificate upon
              successful completion.
            </p>
          </div>
        </div>
        {/* FAQ 8 */}
        <div className="faq-item">
          <button className="faq-question">
            How can I enroll in a course at Skillam?
          </button>
          <div className="faq-answer">
            <p>
              You can visit our institute, call us, or enroll directly through
              our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact  */}
  <section id="contact" className="contact-section">
    <div className="container">
      <h2 className="section-title">Get in Touch with Us</h2>
      <p className="section-subtitle">
        Have any questions? Fill out the form below and we will get back to you
        soon.
      </p>
      <div className="contact-wrapper">
        {/* Contact Form */}
        <div className="contact-form">
          <form id="contact-form" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required=""
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required=""
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required=""
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Select Course</label>
              <select id="course" name="course" required="">
                <option value="">-- Select a Course --</option>
                <option value="English Language">English Language</option>
                <option value="Aviation Training">Aviation Training</option>
                <option value="Computer Training">Computer Training</option>
                <option value="CAD Course">CAD Course</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                required=""
                placeholder="Write your query here..."
                defaultValue={""}
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit Query
            </button>
            <div id="success-message" className="success-message">
              Sent successfully!
            </div>
          </form>
        </div>
        {/* Contact Information */}
        <div className="contact-info">
          <iframe
            src="/Skillam_files/embed.html"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <h3>Contact Information</h3>
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
    </div>
  </section>
</>
</>
  )
}

export default Home