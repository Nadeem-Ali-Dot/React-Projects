
import './Computer.css'
import React, { useState, useEffect, useRef } from "react";
function Computer() {

  const [showBenefits, setShowBenefits] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState({});
  const [accordion1Open, setAccordion1Open] = useState({});
  const benefitsRef = useRef(null);

  // Toggle the "Benefits" section
  const toggleBenefits = () => {
    setShowBenefits((prev) => !prev);
  };

  // Toggle the first accordion group
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Toggle the second accordion group
  const toggleAccordion1 = (index) => {
    setAccordion1Open((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Scroll into view if a hash exists in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);




  return (
  <>
  <link rel="stylesheet" href="~/Css/computer.css" />
  {/* hero section  */}
  <section className="heroen">
    <div className="hero-contenten">
      <h1>
        Master <span>Computer Skills</span> &amp; Build your future!
      </h1>
      <p>
        Join our industry-focused courses in Computer Basics, Advanced Software,
        and IT Skills. gain hands-on training &amp; boost your career today!
      </p>
    </div>
    {/* Floating Words */}
    <div className="floating-words-container">
      <span className="floating-word word1">File &amp; Folder</span>
      <span className="floating-word word2">CPU</span>
      <span className="floating-word word3">Internet</span>
      <span className="floating-word word4">Software</span>
      <span className="floating-word word5">MS Office</span>
      <span className="floating-word word6">Browser</span>
      <span className="floating-word word7">Operating System</span>
      <span className="floating-word word8">Networking</span>
    </div>
  </section>
  {/* Why Choose Skillam Section */}
  <section className="why-skillam">
    <h2>
      Why Choose <span style={{ color: "#0096FF" }}>Skillam?</span>
    </h2>
    <p>
      We provide the best Computer Training with Industry Experts &amp; Hands-on
      Learning.
    </p>
    <div className="grid-container">
      <div className="grid-item">
        <h3>Certified Trainers</h3>
        <p>
          Learn from highly experienced instructors with industry expertise.
        </p>
      </div>
      <div className="grid-item">
        <h3>Practical Learning</h3>
        <p>
          Hands-on projects and real-world case studies for better
          understanding.
        </p>
      </div>
      <div className="grid-item">
        <h3>Placement Assistance</h3>
        <p>
          Job-ready training with resume building &amp; interview preparation.
        </p>
      </div>
      <div className="grid-item">
        <h3>Modern Labs</h3>
        <p>State-of-the-art computer labs with high-end technology.</p>
      </div>
    </div>
    {/* Exclusive Benefits Dropdown */}
    <div className="benefits-container">
      <div className="benefits-title" onclick="toggleBenefits()">
        Exclusive Benefits ▼
      </div>
      <div className="benefits-content" id="benefitsContent">
        <ul>
          <li>✅ 1-on-1 Career Guidance</li>
          <li>✅ Live Projects &amp; Real-world Simulations</li>
          <li>✅ Flexible Batch Timings</li>
          <li>✅ Free Study Material &amp; E-books</li>
          <li>✅ 100% Practical Sessions</li>
          <li>✅ Industry-recognized Certifications</li>
        </ul>
      </div>
    </div>
  </section>
  {/* basic computer  */}
  <div id="basic" className="container">
    {/* Title & Subtitle */}
    <h2 className="section-title">Basic Computer Training</h2>
    <p className="section-subtitle">
      Master the fundamental computer skills to kickstart your career
    </p>
    {/* Course Curriculum */}
    <div className="curriculum">
      <h3>Course Curriculum</h3>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(0)">
          Module 1: Introduction to Computers <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ Basics of Computer Hardware &amp; Software</p>
          <p>✔ Operating Systems (Windows, macOS, Linux)</p>
          <p>✔ File Management &amp; System Navigation</p>
          <p>✔ Input &amp; Output Devices</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(1)">
          Module 2: Microsoft Office &amp; Productivity Tools <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ MS Word – Document Formatting &amp; Editing</p>
          <p>✔ MS Excel – Data Entry, Formulas, &amp; Pivot Tables</p>
          <p>✔ MS PowerPoint – Presentation Design &amp; Animations</p>
          <p>✔ Google Docs, Sheets &amp; Drive Usage</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(2)">
          Module 3: Internet &amp; Digital Literacy <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ Introduction to Coding (Python, C, Java)</p>
          <p>✔ Email Writing &amp; Professional Communication</p>
          <p>✔ Online Safety &amp; Cybersecurity Basics</p>
          <p>✔ Cloud Computing &amp; File Storage</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(3)">
          Module 4: Programming Fundamentals (Optional – For IT Students){" "}
          <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ Web Browsing &amp; Search Techniques</p>
          <p>✔ Writing &amp; Executing Simple Programs</p>
          <p>✔ Online Safety &amp; Cybersecurity Basics</p>
          <p>✔ Debugging &amp; Error Handling</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(4)">
          Module 5: Web Development Basics (Optional – For Web Learners){" "}
          <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ HTML &amp; CSS Fundamentals</p>
          <p>✔ Introduction to JavaScript</p>
          <p>✔ Responsive Design Basics</p>
          <p>✔ Building a Simple Webpage</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(5)">
          Module 6: Computer Networking &amp; Security <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ Basics of Networking (LAN, WAN, WiFi)</p>
          <p>✔ IP Addressing &amp; DNS Basics</p>
          <p>✔ Cybersecurity &amp; Online Threats</p>
          <p>✔ Data Protection &amp; Privacy</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header" onclick="toggleAccordion(6)">
          Module 7: Career Readiness &amp; Practical Applications <span>+</span>
        </div>
        <div className="accordion-content">
          <p>✔ Resume Writing &amp; Job Interview Preparation</p>
          <p>✔ Freelancing &amp; Earning Online with Computer Skills</p>
          <p>✔ Freelancing &amp; Earning Online with Computer Skills</p>
          <p>✔ Real-World Projects &amp; Hands-on Assignments</p>
        </div>
      </div>
    </div>
    {/* Course Fees */}
    {/* <div class="fees">
  <h3>Course Fees</h3>
  <p><span class="original-price">₹12,000</span> → <span class="discounted-price">₹8,999</span></p>
  <p>No Hidden Charges, Limited Offer!</p>
  <a href="index.html#contact"><button class="enroll-btn">Enroll Now</button></a>
    </div> */}
    {/* Job Opportunities */}
    <div className="job-opportunities">
      <h3>Job Opportunities</h3>
      <ul>
        <li>Data Entry Operator</li>
        <li>Office Assistant</li>
        <li>Customer Support Executive</li>
        <li>Computer Lab Assistant</li>
        <li>Clerical Jobs in Government Sectors</li>
      </ul>
    </div>
    {/* Eligibility & Duration */}
    <div className="details">
      <h3>Minimum Eligibility &amp; Course Duration</h3>
      <p>
        <strong>Eligibility:</strong> 10th Pass / Basic English Knowledge
      </p>
      <p>
        <strong>Duration:</strong> 3 Months (Weekend &amp; Weekday Batches
        Available)
      </p>
    </div>
  </div>
  {/* advanced computer  */}
  <div id="advanced" className="container">
    {/* Title & Subtitle */}
    <h2 className="section-title">Advanced Computer Training</h2>
    <p className="section-subtitle">
      Master the fundamental computer skills to kickstart your career
    </p>
    {/* Course Curriculum */}
    <div className="curriculum">
      <h3>Course Curriculum</h3>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(0)">
          Module 1: Advanced Operating Systems &amp; System Administration{" "}
          <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ Deep Dive into Windows, macOS, &amp; Linux</p>
          <p>✔ Command Line &amp; Terminal Operations</p>
          <p>✔ System Performance Optimization</p>
          <p>✔ Virtualization &amp; Cloud Computing Basics</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(1)">
          Module 2: Advanced Microsoft Office &amp; Data Management{" "}
          <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ Excel Advanced Functions (Macros, VBA, Data Analysis)</p>
          <p>✔ PowerPoint Professional Presentations</p>
          <p>✔ MS Access – Database Creation &amp; Management</p>
          <p>✔ Google Workspace Advanced Features</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(2)">
          Module 3: Advanced Programming &amp; Software Development{" "}
          <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ Object-Oriented Programming (OOP) in Python, Java, or C++</p>
          <p>✔ Data Structures &amp; Algorithms</p>
          <p>✔ API Development &amp; Integration</p>
          <p>✔ Debugging &amp; Performance Optimization</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(3)">
          Module 4: Web &amp; App Development <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ Advanced HTML, CSS, JavaScript (ES6+)</p>
          <p>✔ Frontend Frameworks (React, Angular, or Vue.js)</p>
          <p>✔ Backend Development (Node.js, Django, or Flask)</p>
          <p>✔ Mobile App Development (Flutter or Android Studio)</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(4)">
          Module 5: Advanced Networking &amp; Cybersecurity <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ Network Protocols &amp; Architecture</p>
          <p>✔ Firewall &amp; Security Configurations</p>
          <p>✔ Ethical Hacking &amp; Penetration Testing</p>
          <p>✔ Cloud Security &amp; Data Protection</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(5)">
          Module 6: Database Management &amp; Big Data <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ SQL &amp; NoSQL Databases (MySQL, MongoDB)</p>
          <p>✔ Data Warehousing &amp; ETL Processes</p>
          <p>✔ Introduction to Big Data &amp; Hadoop</p>
          <p>✔ Data Security &amp; Backup Strategies</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(6)">
          Module 7: Artificial Intelligence &amp; Machine Learning{" "}
          <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ Basics of AI &amp; ML Algorithms</p>
          <p>✔ Python Libraries for AI (TensorFlow, Scikit-Learn)</p>
          <p>✔ AI Chatbots &amp; Automation</p>
          <p>✔ Practical AI Project</p>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-header1" onclick="toggleAccordion1(7)">
          Module 8: Career Development &amp; Real-World Projects <span>+</span>
        </div>
        <div className="accordion-content1">
          <p>✔ IT Certifications Guidance (AWS, Cisco, Microsoft)</p>
          <p>✔ Resume Building &amp; Technical Interviews</p>
          <p>✔ Freelancing &amp; Earning from IT Skills</p>
          <p>✔ Hands-on Capstone Project</p>
        </div>
      </div>
    </div>
    {/* Course Fees */}
    {/* <div class="fees">
  <h3>Course Fees</h3>
  <p><span class="original-price">₹12,000</span> → <span class="discounted-price">₹8,999</span></p>
  <p>No Hidden Charges, Limited Offer!</p>
  <a href="index.html#contact"><button class="enroll-btn">Enroll Now</button></a>
    </div> */}
    {/* Job Opportunities */}
    <div className="job-opportunities">
      <h3>Job Opportunities</h3>
      <ul>
        <li>Data Entry Operator</li>
        <li>Computer Operator</li>
        <li>IT Support Executive</li>
        <li>Office Administrator</li>
        <li>Freelancer</li>
      </ul>
    </div>
    {/* Eligibility & Duration */}
    <div className="details">
      <h3>Minimum Eligibility &amp; Course Duration</h3>
      <p>
        <strong>Eligibility:</strong> 10th Pass / Basic English Knowledge
      </p>
      <p>
        <strong>Duration:</strong> 3 Months (Weekend &amp; Weekday Batches
        Available)
      </p>
    </div>
  </div>
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
            What will I learn in Skillam’s computer courses?
          </button>
          <div className="faq-answer">
            <p>
              You’ll learn computer basics, programming, networking,
              cybersecurity, and software skills.
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div className="faq-item">
          <button className="faq-question">
            Are these courses suitable for beginners?
          </button>
          <div className="faq-answer">
            <p>
              Yes, we have courses for beginners, intermediate learners, and
              professionals.
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div className="faq-item">
          <button className="faq-question">
            Do you offer programming courses?
          </button>
          <div className="faq-answer">
            <p>
              Yes, we offer courses in Python, Java, C++, Web Development, and
              more.
            </p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div className="faq-item">
          <button className="faq-question">
            Will I get hands-on practice?
          </button>
          <div className="faq-answer">
            <p>
              Yes, our courses include practical exercises, projects, and
              real-world applications.
            </p>
          </div>
        </div>
        {/* FAQ 5 */}
        <div className="faq-item">
          <button className="faq-question">
            Are the courses live or recorded?
          </button>
          <div className="faq-answer">
            <p>
              We offer both live classes and recorded lessons for flexible
              learning.
            </p>
          </div>
        </div>
        {/* FAQ 6 */}
        <div className="faq-item">
          <button className="faq-question">
            Do I get a certificate after completing the course?
          </button>
          <div className="faq-answer">
            <p>
              Yes, you’ll receive a certificate upon successful course
              completion.
            </p>
          </div>
        </div>
        {/* FAQ 7 */}
        <div className="faq-item">
          <button className="faq-question">
            Can I access the courses on mobile?
          </button>
          <div className="faq-answer">
            <p>
              Yes, our platform is mobile-friendly, allowing you to learn
              anytime, anywhere.
            </p>
          </div>
        </div>
        {/* FAQ 8 */}
        <div className="faq-item">
          <button className="faq-question">
            How do I enroll in a computer course?
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
  {/* testimonials  */}
  {/* <section class="testimonialsen">
    <div class="container">
  <h2 class="section-title2en">What Our <span>Students Say</span></h2>
  <p class="section-subtitle3en">Real experiences from our learners.</p>

  <div class="testimonial-slider">
      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client1-optimized.webp" alt="Student 1" class="student-photo" loading="lazy">
              <h3>Rahul Sharma</h3>
              <p class="courseen">Computer Training</p>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-message">"Best place to learn coputers - simple, structured, and effective!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client2-optimized.webp" alt="Student 2" class="student-photo" loading="lazy">
              <h3>Priya Verma</h3>
              <p class="courseen">Computer Training</p>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-message">"I never thought I would enjoy learning computers this much!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client3-optimized.webp" alt="Student 3" class="student-photo" loading="lazy">
              <h3>Arjun Singh</h3>
              <p class="courseen">Computer Training</p>
              <div class="rating">⭐⭐⭐⭐</div>
              <p class="testimonial-message">"I gained hands-on experience in computers. Very happy with the training!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client4-optimized.webp" alt="Student 4" class="student-photo" loading="lazy">
              <h3>Anjali Gupta</h3>
              <p class="courseen">Computer Training</p>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-message">"Skillam's training boosted my career opportunities!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/Sids.webp" alt="Student 5" class="student-photo" loading="lazy">
              <h3>Siddharth Singh</h3>
              <p class="courseen">Computer Training</p>
              <div class="rating">⭐⭐⭐⭐</div>
              <p class="testimonial-message">"I went from beginner to confident in just a few months!"</p>
          </div>
      </div>
  </div> */}
  {/* Navigation Buttons */}
  {/* <button class="prev-btn" onclick="prevSlide()">&#10094;</button>
  <button class="next-btn" onclick="nextSlide()">&#10095;</button>
    </div>
</section> */}
  {/* cta section  */}
  <section className="cta-section">
    <h2>
      Unlock Your Career with <span>Computer Training!</span>
    </h2>
    <p>
      Boost your career with in-demand computer skills. Join Skillam and take
      the first step towards success!
    </p>
    <div className="cta-buttons">
      <a href="~/Home/Index#contact">
        <button className="cta-btn secondary">Contact Us</button>
      </a>
    </div>
  </section>
</>

  )
}

export default Computer