import React from 'react'
import './About.css'
function AboutUs() {
  return (
   <>
  <link rel="stylesheet" href="~/Css/about.css" />
  {/* hero section  */}
  <section className="hero-gallery">
    <h1 className="hero-gallery-title-gallery">
      Empowering <span>Learners</span>, Shaping <span>Careers!</span>
    </h1>
    <p className="hero-gallery-subtitle-gallery">
      At Skillam, we provide world-class training to help students achieve their
      dreams with industry-relevant skills.
    </p>
  </section>
  {/* vision and mission  */}
  <section className="vision-mission-section">
    {/* Left Side: Vision & Mission */}
    <div className="vision-mission-text">
      <h2 className="vision-mission-title">Our Vision &amp; Mission</h2>
      <p className="vision-mission-subtitle">
        At Skillam, we are committed to empowering students with practical
        skills and industry-focused training to shape their future.
      </p>
      <div className="vision-mission-content">
        {/* Vision */}
        <div className="vision-box">
          <i>🚀</i>
          <p>
            <strong>Vision:</strong> To become a leading education institute
            that transforms careers through innovative, practical, and
            high-quality training.
          </p>
        </div>
        {/* Mission */}
        <div className="mission-box">
          <i>🎯</i>
          <p>
            <strong>Mission:</strong> Providing industry-relevant courses,
            hands-on training, affordable education, and job placement support.
          </p>
        </div>
      </div>
    </div>
    {/* Right Side: Additional Information */}
    <div className="vision-mission-extra">
      <h3>Why Skillam Stands Out?</h3>
      <p>
        - Cutting-edge curriculum designed with industry experts.
        <br />
        - Real-world project-based learning approach.
        <br />
        - Experienced mentors providing one-on-one guidance.
        <br />
        - Strong industry connections ensuring job placements.
        <br />
        - Continuous skill development &amp; certification programs.
        <br />
      </p>
    </div>
  </section>
  {/* Why Choose Skillam Section */}
  <section className="why-skillam">
    <h2>Why Choose Skillam?</h2>
    <p>
      Your Future Starts Here – Discover Why Skillam is the Right Choice for
      You!
    </p>
    {/* Key Benefits */}
    <div className="benefits-grid">
      <div className="benefit-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Industry-Oriented"
        />
        <h3>Industry-Oriented Courses</h3>
        <p>Our courses are designed to meet the latest industry standards.</p>
      </div>
      <div className="benefit-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995576.png"
          alt="Expert Mentors"
        />
        <h3>Expert Mentors &amp; Trainers</h3>
        <p>Learn from experienced professionals in the field.</p>
      </div>
      <div className="benefit-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135765.png"
          alt="Hands-on Training"
        />
        <h3>Practical Hands-on Training</h3>
        <p>Gain real-world skills through practical learning.</p>
      </div>
      <div className="benefit-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
          alt="Placement Assistance"
        />
        <h3>100% Placement Assistance</h3>
        <p>We guide you to secure the best job opportunities.</p>
      </div>
      <div className="benefit-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1794/1794329.png"
          alt="Affordable Fees"
        />
        <h3>Affordable Fee &amp; EMI Options</h3>
        <p>Flexible payment plans available for students.</p>
      </div>
      <div className="benefit-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/862/862869.png"
          alt="Certification"
        />
        <h3>Recognized Certification</h3>
        <p>Earn industry-recognized certificates after course completion.</p>
      </div>
    </div>
    {/* Exclusive Benefits */}
    <div className="exclusive-benefits">
      <h3>Exclusive Benefits</h3>
      <div className="dropdown" onclick="toggleDropdown1(this)">
        1️⃣ Free Career Guidance <span>▶</span>
      </div>
      <div className="dropdown-content">
        Get personalized career counseling from our experts.
      </div>
      <div className="dropdown" onclick="toggleDropdown1(this)">
        2️⃣ Scholarships Available <span>▶</span>
      </div>
      <div className="dropdown-content">
        Eligible students can apply for scholarships and financial aid.
      </div>
      <div className="dropdown" onclick="toggleDropdown1(this)">
        3️⃣ Internship Opportunities <span>▶</span>
      </div>
      <div className="dropdown-content">
        Gain real-world experience with our internship programs.
      </div>
    </div>
  </section>
  {/* meet our teacher  */}
  {/* <div class="teachers-container">
    <h2 class="teachers-title">Meet Our <span>Expert Teachers</span></h2>
    <p class="teachers-subtitle">Our highly qualified instructors are dedicated to helping you succeed.</p>

    <div class="teachers-grid">
  <div class="teacher-card">
      <img src="images/Sids.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Siddharth</h3>
      <p class="teacher-role">English Trainer</p>
      <p class="teacher-description">Expert in spoken English, IELTS, and communication skills.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client2-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Aditya</h3>
      <p class="teacher-role">GD Trainer</p>
      <p class="teacher-description">Trains students for group discussions & interview skills.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client3-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Sagar</h3>
      <p class="teacher-role">Computer Instructor</p>
      <p class="teacher-description">Teaches basic to advanced computer skills & coding.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client4-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Sachin</h3>
      <p class="teacher-role">Aviation Trainer</p>
      <p class="teacher-description">Cabin crew & ground staff training expert.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client1-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Ankur</h3>
      <p class="teacher-role">Director</p>
      <p class="teacher-description">Founder & head of Skillam Institute.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client2-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Vishal</h3>
      <p class="teacher-role">CAD Course Instructor</p>
      <p class="teacher-description">Expert in AutoCAD, 3D modeling, and design software.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client3-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Ansul</h3>
      <p class="teacher-role">Personality Development Trainer</p>
      <p class="teacher-description">Focuses on confidence building & leadership skills.</p>
  </div>

  <div class="teacher-card">
      <img src="images/client4-optimized.webp" alt="Teacher" class="teacher-img" loading="lazy">
      <h3 class="teacher-name">Rohan</h3>
      <p class="teacher-role">Soft Skills Coach</p>
      <p class="teacher-description">Teaches etiquette, communication & business skills.</p>
  </div>
    </div>
</div> */}
  {/* Our Achievements */}
  <div className="achievements-container">
    <h2 className="achievements-title">Our Achievements</h2>
    <p className="achievements-subtitle">
      Celebrating milestones &amp; success stories
    </p>
    <div className="achievements-grid">
      <div className="achievement-box">
        <i className="fas fa-award achievement-icon" />
        <p className="achievement-text">Recognized Excellence</p>
        <p className="achievement-description">
          Honored with multiple industry awards for outstanding education &amp;
          training.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-user-graduate achievement-icon" />
        <p className="achievement-text">Empowering Students</p>
        <p className="achievement-description">
          Thousands of students successfully trained &amp; equipped with
          essential skills.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-briefcase achievement-icon" />
        <p className="achievement-text">Career Transformations</p>
        <p className="achievement-description">
          Many of our students have secured top positions in reputed
          organizations.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-book-open achievement-icon" />
        <p className="achievement-text">Innovative Learning</p>
        <p className="achievement-description">
          We utilize the latest technology &amp; methodologies for an advanced
          learning.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-users achievement-icon" />
        <p className="achievement-text">Strong Community</p>
        <p className="achievement-description">
          A growing network of alumni, industry experts, and passionate mentors.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-globe achievement-icon" />
        <p className="achievement-text">Global Recognition</p>
        <p className="achievement-description">
          Skillam graduates are making an impact worldwide with their knowledge
          &amp; skills.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-globe achievement-icon" />
        <p className="achievement-text">Global Recognition</p>
        <p className="achievement-description">
          Skillam graduates are making an impact worldwide with their knowledge
          &amp; skills.
        </p>
      </div>
      <div className="achievement-box">
        <i className="fas fa-globe achievement-icon" />
        <p className="achievement-text">Global Recognition</p>
        <p className="achievement-description">
          Skillam graduates are making an impact worldwide with their knowledge
          &amp; skills.
        </p>
      </div>
    </div>
  </div>
</>

  )
}

export default AboutUs