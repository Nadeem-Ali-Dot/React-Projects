import React from 'react'
import './Aviation.css'
function Aviation() {
  return (
   <>

  <section className="heroen">
    <div className="hero-contenten">
      <h1>
        YOUR <span>AVIATION DREAM</span> STARTS HERE!
      </h1>
      <p>
        Skillam prepares you for a high-flying career in the airline industry.
      </p>
    </div>
    {/* Floating Words */}
    <div className="floating-words-container">
      <span className="floating-word word1">Cabin Crew</span>
      <span className="floating-word word2">Airport Operations</span>
      <span className="floating-word word3">Flight Services</span>
      <span className="floating-word word4">Ground Handling</span>
      <span className="floating-word word5">Aviation Management</span>
      <span className="floating-word word6">Aviation Training</span>
      <span className="floating-word word7">Air Hostess</span>
      <span className="floating-word word8">Aviation Career</span>
    </div>
  </section>
  {/* aviation industry  */}
  <section className="aviation-booming">
    <img
      src="/Images/Aviation/airplane.webp"
      alt="Flying Airplane"
      className="floating-plane"
    />
    <h2>
      Why is the <span>Aviation Industry</span> Growing Rapidly?
    </h2>
    <p>
      Discover the key factors driving massive global demand for aviation
      professionals.
    </p>
    <div className="growth-container">
      <div className="growth-card">
        <i>📈</i>
        <h3>Increasing Global Travel</h3>
        <p>More flights, more passengers, more airline staff required.</p>
      </div>
      <div className="growth-card">
        <i>🌍</i>
        <h3>Expanding Airport Infrastructure</h3>
        <p>New airports &amp; airlines increasing job opportunities.</p>
      </div>
      <div className="growth-card">
        <i>🛫</i>
        <h3>Rising Demand for Aviation Professionals</h3>
        <p>
          Cabin crew, ground staff &amp; airport operations jobs growing
          rapidly.
        </p>
      </div>
      <div className="growth-card">
        <i>📊</i>
        <h3>Growing Economy &amp; Business Travel</h3>
        <p>More executives traveling globally, boosting the aviation sector.</p>
      </div>
      <div className="growth-card">
        <i>🛩️</i>
        <h3>Growth in Low-Cost Airlines</h3>
        <p>Affordable air travel creating millions of new customers.</p>
      </div>
    </div>
  </section>
  {/* aviation overview  */}
  <section className="aviation-overview">
    <h2>
      Explore Our <span>Aviation Training Programs</span>
    </h2>
    <p>
      Gain the skills needed to launch a successful career in the booming
      aviation industry.
    </p>
    <div className="course-container">
      <div className="course-box">
        <div className="course-icon">🛫</div>
        <div className="course-content">
          <h3>Cabin Crew Training</h3>
          <p>
            Prepare for in-flight services, safety procedures &amp; passenger
            management.
          </p>
          <p>
            <strong>Duration:</strong> 6-12 Months |{" "}
            <strong>Eligibility:</strong> 10+2 (Any Stream)
          </p>
          <a href="/Aviation#cabin" className="learn-more">
            ✈ Learn More
          </a>
        </div>
      </div>
      <div className="course-box">
        <div className="course-icon">🏢</div>
        <div className="course-content">
          <h3>Ground Staff Training</h3>
          <p>
            Master airport operations, baggage handling &amp; airline
            coordination.
          </p>
          <p>
            <strong>Duration:</strong> 6-12 Months |{" "}
            <strong>Eligibility:</strong> 10+2 (Any Stream)
          </p>
          <a href="/Aviation#ground" className="learn-more">
            ✈ Learn More
          </a>
        </div>
      </div>
      <div className="course-box">
        <div className="course-icon">🛂</div>
        <div className="course-content">
          <h3>AO/CS (Airport Operations &amp; Customer Service) Training</h3>
          <p>
            Get trained in airport security, ticketing &amp; customer service.
          </p>
          <p>
            <strong>Duration:</strong> 6-12 Months |{" "}
            <strong>Eligibility:</strong> 10+2 (Any Stream)
          </p>
          <a href="~/Home/Aviation#aocs" className="learn-more">
            ✈ Learn More
          </a>
        </div>
      </div>
    </div>
    <div className="career-section">
      <h3>Career Opportunities After Completion</h3>
      <div className="career-list">
        <div>✈ Cabin Crew</div>
        <div>🛩 Ground Staff</div>
        <div>🛂 Airport Manager</div>
        <div>🏢 Ticketing Executive</div>
        {/* <div>🛄 Baggage Handling Staff</div> */}
      </div>
    </div>
  </section>
  {/* cabin crew course  */}
  <section id="cabin" className="cabin-crew-section">
    <h2>
      Cabin Crew Training - <span>Your Gateway to the Skies</span>
    </h2>
    <p>
      Master in-flight service, safety, and customer care with expert-led
      training.
    </p>
    {/* Course Highlights */}
    <div className="highlights">
      <div className="highlight-box">
        <h3>🛫 In-flight Safety</h3>
        <p>
          Learn emergency protocols, evacuation training &amp; crew
          coordination.
        </p>
      </div>
      <div className="highlight-box">
        <h3>👔 Grooming &amp; Etiquette</h3>
        <p>
          Develop a professional appearance, body language &amp; customer
          interaction.
        </p>
      </div>
      <div className="highlight-box">
        <h3>🗣 Multilingual Communication</h3>
        <p>
          Master English &amp; Aviation Terminology for global career
          opportunities.
        </p>
      </div>
    </div>
    {/* Course Table */}
    <table className="course-table">
      <tbody>
        <tr>
          <th>Module</th>
          <th>Duration</th>
          <th>Topics Covered</th>
        </tr>
        <tr>
          <td>In-flight Safety &amp; Security</td>
          <td>2 Months</td>
          <td>Safety Equipment, Crew Coordination, Emergency Procedures</td>
        </tr>
        <tr>
          <td>Customer Handling</td>
          <td>2 Months</td>
          <td>Passenger Assistance, First-Class Service, Hospitality</td>
        </tr>
        <tr>
          <td>Aircraft Familiarization</td>
          <td>1 Month</td>
          <td>Aircraft Layout, Equipment Handling</td>
        </tr>
        <tr>
          <td>Mock Flight &amp; Exams</td>
          <td>1 Month</td>
          <td>Simulated Flight Operations, Final Assessments</td>
        </tr>
      </tbody>
    </table>
    {/* Course Fee & Duration */}
    {/* <div class="fee-section">
  <h3>Course Fee & Duration</h3>
  <div class="fee-box">₹1,80,000 - ₹2,50,000 | 6-8 Months</div>
    </div> */}
    {/* Career Path */}
    <div className="career-section">
      <h3>Career Opportunities</h3>
      <div className="career-list">
        <div>✈ Cabin Crew</div>
        <div>🛩 VIP Flight Attendant</div>
        <div>🛂 Airline Customer Service</div>
        <div>🏢 Airport Hospitality</div>
      </div>
    </div>
  </section>
  {/* ground staff course  */}
  <section id="ground" className="ground-staff-section">
    <h2>
      Ground Staff Training - <span>Master Airport Operations</span>
    </h2>
    <p>
      Get trained in airport coordination, customer service &amp; security
      management.
    </p>
    {/* Course Highlights */}
    <div className="highlights">
      <div className="highlight-box">
        <h3>🏢 Airport Coordination</h3>
        <p>Manage passenger flow, baggage handling, and flight coordination.</p>
      </div>
      <div className="highlight-box">
        <h3>🛃 Security &amp; Safety</h3>
        <p>
          Learn airport security checks, emergency protocols &amp; crisis
          handling.
        </p>
      </div>
      <div className="highlight-box">
        <h3>🗣 Customer Service</h3>
        <p>
          Handle airline passengers, complaints &amp; provide top-notch
          hospitality.
        </p>
      </div>
    </div>
    {/* Course Table */}
    <table className="course-table">
      <tbody>
        <tr>
          <th>Module</th>
          <th>Duration</th>
          <th>Topics Covered</th>
        </tr>
        <tr>
          <td>Airport Operations</td>
          <td>2 Months</td>
          <td>Airline Procedures, Check-in &amp; Boarding</td>
        </tr>
        <tr>
          <td>Security &amp; Safety</td>
          <td>2 Months</td>
          <td>Emergency Handling, Crisis Management</td>
        </tr>
        <tr>
          <td>Customer Handling</td>
          <td>1 Month</td>
          <td>Passenger Assistance, VIP Services</td>
        </tr>
        <tr>
          <td>Mock Airport Training</td>
          <td>1 Month</td>
          <td>Live Airport Operations, Practical Assessment</td>
        </tr>
      </tbody>
    </table>
    {/* Course Fee & Duration */}
    {/* <div class="fee-section">
  <h3>Course Fee & Duration</h3>
  <div class="fee-box">₹1,50,000 - ₹2,20,000 | 6-8 Months</div>
    </div> */}
    {/* Career Path */}
    <div className="career-section">
      <h3>Career Opportunities</h3>
      <div className="career-list">
        <div>🏢 Ground Staff</div>
        <div>🛩 Airline Customer Service</div>
        <div>🛃 Airport Security Officer</div>
        <div>🎟 Check-in Executive</div>
      </div>
    </div>
  </section>
  {/* ao/co course  */}
  <section id="aocs" className="aocs-section">
    <h2>
      AO/CS Training -{" "}
      <span>Master Airport Operations &amp; Customer Service</span>
    </h2>
    <p>
      Gain expertise in airport security, ticketing &amp; airline customer
      service.
    </p>
    {/* Course Highlights */}
    <div className="highlights">
      <div className="highlight-box">
        <h3>🛃 Airport Security</h3>
        <p>
          Understand security screening, baggage scanning &amp; emergency
          handling.
        </p>
      </div>
      <div className="highlight-box">
        <h3>🎟 Airline Ticketing</h3>
        <p>
          Train in ticket booking, reservation systems &amp; fare calculations.
        </p>
      </div>
      <div className="highlight-box">
        <h3>🗣 Customer Service</h3>
        <p>
          Handle airline passengers, complaints &amp; provide excellent support.
        </p>
      </div>
    </div>
    {/* Course Table */}
    <table className="course-table">
      <tbody>
        <tr>
          <th>Module</th>
          <th>Duration</th>
          <th>Topics Covered</th>
        </tr>
        <tr>
          <td>Airport Security</td>
          <td>2 Months</td>
          <td>Passenger Screening, Baggage Scanning</td>
        </tr>
        <tr>
          <td>Ticketing &amp; Reservation</td>
          <td>2 Months</td>
          <td>Airline Ticketing Software, Fare Calculation</td>
        </tr>
        <tr>
          <td>Customer Handling</td>
          <td>1 Month</td>
          <td>Complaint Resolution, Passenger Assistance</td>
        </tr>
        <tr>
          <td>Mock Training &amp; Exams</td>
          <td>1 Month</td>
          <td>Live Ticketing System Practice, Final Assessment</td>
        </tr>
      </tbody>
    </table>
    {/* Course Fee & Duration */}
    {/* <div class="fee-section">
  <h3>Course Fee & Duration</h3>
  <div class="fee-box">₹1,40,000 - ₹2,00,000 | 6-8 Months</div>
    </div> */}
    {/* Career Path */}
    <div className="career-section">
      <h3>Career Opportunities</h3>
      <div className="career-list">
        <div>🛃 Airport Officer</div>
        <div>🎟 Ticketing Agent</div>
        <div>🗣 Customer Support Executive</div>
        <div>🏢 Operations Manager</div>
      </div>
    </div>
  </section>
  {/* placement course  */}
  <section className="placements-section">
    <h2>
      Skillam <span>Placement Success</span>
    </h2>
    <p>
      100% Placement Assistance with Leading Airlines &amp; Airports Worldwide!
    </p>
    {/* Placement Stats */}
    <div className="stats-container">
      <div className="stats-box">
        <h3>200+</h3>
        <p>Students Placed</p>
      </div>
      <div className="stats-box">
        <h3>10+</h3>
        <p>Partnered Airlines</p>
      </div>
      <div className="stats-box">
        <h3>₹5 - ₹12 LPA</h3>
        <p>Average Salary</p>
      </div>
      <div className="stats-box">
        <h3>98%</h3>
        <p>Placement Rate</p>
      </div>
    </div>
    {/* Recruiter Logos */}
    <div className="recruiter-logos">
      <img src="/Images/Aviation/Indigo.webp" alt="Indigo" />
      <img src="/Images/Aviation/Emirates.webp" alt="Emirates" />
      <img src="/Images/Aviation/Qatar Airways.png" alt="Qatar Airways" />
      <img src="/Images/Aviation/SpiceJet.webp" alt="SpiceJet" />
      <img src="/Images/Aviation/lufthansa.webp" alt="Lufthansa" />
      <img src="/Images/Aviation/air india.webp" alt="Air India" />
    </div>
    {/* Placement Process */}
    <div className="process-container">
      <div className="process-step">
        <h3>Resume &amp; Soft Skills</h3>
        <p>
          We help you build a strong profile &amp; develop communication skills.
        </p>
      </div>
      <div className="process-step">
        <h3>Mock Interviews</h3>
        <p>Get hands-on practice with real industry experts.</p>
      </div>
      <div className="process-step">
        <h3>Direct Airline Interviews</h3>
        <p>We connect you with top recruiters for real job interviews.</p>
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
              <p class="courseen">Aviation Training</p>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-message">"Best place to train for a successful aviation career!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client2-optimized.webp" alt="Student 2" class="student-photo" loading="lazy">
              <h3>Priya Verma</h3>
              <p class="courseen">Aviation Training</p>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-message">"The aviation training at Skillam is world-class. Highly recommend it!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client3-optimized.webp" alt="Student 3" class="student-photo" loading="lazy">
              <h3>Arjun Singh</h3>
              <p class="courseen">Aviation Training</p>
              <div class="rating">⭐⭐⭐⭐</div>
              <p class="testimonial-message">"From zero to confident - Skillam shaped my aviation journey!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/client4-optimized.webp" alt="Student 4" class="student-photo" loading="lazy">
              <h3>Anjali Gupta</h3>
              <p class="courseen">Aviation Training</p>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-message">"Skillam gave me the skills and confidence to soar high!"</p>
          </div>
      </div>

      <div class="testimonial-slide">
          <div class="testimonial-contenten">
              <img src="images/Sids.jpg" alt="Student 5" class="student-photo" loading="lazy">
              <h3>Siddharth Singh</h3>
              <p class="courseen">Aviation Training</p>
              <div class="rating">⭐⭐⭐⭐</div>
              <p class="testimonial-message">"Top-notch training that prepared me for real airline jobs!"</p>
          </div>
      </div>
  </div> */}
  {/* Navigation Buttons */}
  {/* <button class="prev-btn" onclick="prevSlide()">&#10094;</button>
  <button class="next-btn" onclick="nextSlide()">&#10095;</button>
    </div>
</section> */}
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
            What will I learn in Skillam’s aviation courses?
          </button>
          <div className="faq-answer">
            <p>
              You’ll learn about aviation basics, airline operations, safety
              procedures, and industry regulations.
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div className="faq-item">
          <button className="faq-question">
            Who can enroll in aviation courses?
          </button>
          <div className="faq-answer">
            <p>
              Anyone interested in aviation, including beginners, students, and
              professionals looking to upskill.
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div className="faq-item">
          <button className="faq-question">
            Do these courses include pilot training?
          </button>
          <div className="faq-answer">
            <p>
              No, our courses focus on aviation management, air traffic control,
              and airline operations, not pilot training.
            </p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div className="faq-item">
          <button className="faq-question">
            Are these courses recognized in the aviation industry?
          </button>
          <div className="faq-answer">
            <p>
              Yes, our courses are designed as per industry standards and
              provide valuable skills for aviation careers.
            </p>
          </div>
        </div>
        {/* FAQ 5 */}
        <div className="faq-item">
          <button className="faq-question">
            Do I get a certificate after completing the course?
          </button>
          <div className="faq-answer">
            <p>
              Yes, a certificate is awarded upon successful course completion.
            </p>
          </div>
        </div>
        {/* FAQ 6 */}
        <div className="faq-item">
          <button className="faq-question">
            Are the courses online or offline?
          </button>
          <div className="faq-answer">
            <p>
              Our aviation courses are fully online, with recorded lectures and
              live sessions.
            </p>
          </div>
        </div>
        {/* FAQ 7 */}
        <div className="faq-item">
          <button className="faq-question">
            Will I get job assistance after completing the course?
          </button>
          <div className="faq-answer">
            <p>
              Yes, we provide career guidance and job assistance in the aviation
              sector.
            </p>
          </div>
        </div>
        {/* FAQ 8 */}
        <div className="faq-item">
          <button className="faq-question">
            How can I enroll in an aviation course?
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
  {/* cta section  */}
  <section className="cta-section">
    <h2>
      Start Tour Aviation Career Today! with <span>Skillam!</span>
    </h2>
    <p>
      Join our expert-led Cabin Crew, Ground Staff, and AO/CS training programs.
      Get certified &amp; land your dream job in aviation!.
    </p>
    <div className="cta-buttons">
      <a href="/#contact">
        <button className="cta-btn secondary">Contact Us</button>
      </a>
    </div>
  </section>
</>

  )
}

export default Aviation