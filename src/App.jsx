import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'bathroom',
    message: ''
  })

  const [activeSection, setActiveSection] = useState('home')

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello BF Construction, I would like to discuss a ${formData.projectType} renovation project. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}. ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/4407865516023?text=${encodedMessage}`, '_blank')
    setFormData({ name: '', email: '', phone: '', projectType: 'bathroom', message: '' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="BF Construction Logo" className="logo-image" />
            <div className="logo-text">
              <h1>BF Construction</h1>
              <p className="tagline">Transform Your Space, Elevate Your Day</p>
            </div>
          </div>
          <ul className="nav-menu">
            <li><button className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Home</button></li>
            <li><button className={activeSection === 'services' ? 'active' : ''} onClick={() => setActiveSection('services')}>Services</button></li>
            <li><button className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setActiveSection('portfolio')}>Portfolio</button></li>
            <li><button className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => setActiveSection('testimonials')}>Testimonials</button></li>
            <li><button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</button></li>
            <li><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="hero">
          <div className="hero-content">
            <h2>Complete Home Renovations</h2>
            <p>Specialising in Kitchen & Bathroom Renovations | 17+ Years of Expert Construction and Renovation</p>
            <button className="cta-button" onClick={() => setActiveSection('contact')}>Get a Free Quote</button>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className="services">
          <div className="container">
            <h2>Our Services</h2>
            <p className="services-intro">We specialise in complete home renovations, with particular expertise in kitchens and bathrooms.</p>
            <div className="services-grid">
              <div className="service-card">
                <h3>Bathroom Renovations</h3>
                <p>Complete bathroom transformations including:</p>
                <ul>
                  <li>Modern suite installations</li>
                  <li>Tiling and waterproofing</li>
                  <li>Luxury fixtures and fittings</li>
                  <li>Lighting and ventilation</li>
                  <li>Wet rooms and steam showers</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Kitchen Renovations</h3>
                <p>Bespoke kitchen design and installation:</p>
                <ul>
                  <li>Custom cabinetry</li>
                  <li>Worktop installation</li>
                  <li>Appliance integration</li>
                  <li>Splashback and tiling</li>
                  <li>Lighting solutions</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Full Home Renovations</h3>
                <p>Complete house refurbishment services:</p>
                <ul>
                  <li>Structural work and repairs</li>
                  <li>Flooring installation</li>
                  <li>Decorating and painting</li>
                  <li>Electrical and plumbing</li>
                  <li>Project management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {activeSection === 'portfolio' && (
        <section className="portfolio">
          <div className="container">
            <h2>Recent Projects</h2>
            <p className="portfolio-intro">Showcasing our expertise in complete home renovations, with specialisation in kitchen and bathroom transformations.</p>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <img src="/kitchen-project-1.jpg" alt="Modern kitchen renovation" />
                <div className="portfolio-info">
                  <h3>Contemporary Kitchen Refurbishment</h3>
                  <p>Stunning modern kitchen with handleless cabinetry, integrated appliances, and bespoke tiling. Part of a complete home renovation project.</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img src="/bathroom-project-1.jpg" alt="Luxury bathroom renovation" />
                <div className="portfolio-info">
                  <h3>Luxury Bathroom Transformation</h3>
                  <p>Complete bathroom overhaul featuring freestanding bath, walk-in shower, and premium finishes. Expertly executed as part of our full home renovation services.</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img src="/bathroom-before-after.jpg" alt="Bathroom before and after" />
                <div className="portfolio-info">
                  <h3>Complete Bathroom Refurbishment</h3>
                  <p>Dramatic transformation from dated to contemporary, showcasing our attention to detail and quality craftsmanship in complete home renovation projects.</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img src="/kitchen-project-2.jpg" alt="Modern kitchen with marble countertops" />
                <div className="portfolio-info">
                  <h3>Premium Kitchen with Marble Finishes</h3>
                  <p>Elegant kitchen renovation featuring stunning marble countertops, black cabinetry, and sophisticated design. A showcase of luxury and functionality in complete home renovation.</p>
                </div>
              </div>
              <div className="portfolio-item">
                <img src="/bathroom-project-2.jpg" alt="Luxury bathroom with freestanding bath" />
                <div className="portfolio-info">
                  <h3>Luxury Bathroom with Premium Fixtures</h3>
                  <p>Stunning bathroom featuring freestanding bath, rainfall shower with crystal chandelier, and premium marble tiling. Expertly designed and executed as part of our full home renovation services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {activeSection === 'testimonials' && (
        <section className="testimonials">
          <div className="container">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
                <p className="testimonial-text">"Really happy with the bathroom, your team did an amazing job and was great to meet all. Thanks so much Elvis - we'll reach out when we get round to tiling the fireplace if that suits"</p>
                <p className="testimonial-author">Dan</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
                <p className="testimonial-text">"Morning, Yes keys arrived safe and sound. Thank you for the great work, the finishing is great, top quality. If there be anything require you to visit. And I will definitely consider your team for decorating works I plan in the spring. You too have a great day. All the best."</p>
                <p className="testimonial-author">Stavros</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
                <p className="testimonial-text">"Work is ready. Key is with your cleaner. Thank you so much! Sure you did a great job"</p>
                <p className="testimonial-author">Georgia Leggy</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="about">
          <div className="container">
            <h2>About BF Construction</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>London's Premier Renovation Specialists</h3>
                <p>With over 17 years of experience, BF Construction is London's trusted name in complete home renovations, specialising in kitchen and bathroom transformations. We have established ourselves as industry leaders, transforming ordinary spaces into extraordinary homes with expert craftsmanship and innovative design.</p>
                
                <h4>Our Expertise</h4>
                <p>We specialise in complete home renovations with particular expertise in:</p>
                <ul className="about-list">
                  <li><strong>Kitchen Renovations:</strong> From custom cabinetry to appliance integration, we create bespoke kitchens tailored to your lifestyle.</li>
                  <li><strong>Bathroom Renovations:</strong> Luxurious transformations featuring modern suites, walk-in showers, and premium finishes.</li>
                  <li><strong>Full Home Renovations:</strong> Complete house refurbishments including structural work, flooring, electrical, plumbing, and decorating.</li>
                </ul>
                
                <h4>Why Choose BF Construction?</h4>
                <ul className="about-list">
                  <li><strong>17+ Years Experience:</strong> Proven track record of successful projects across London.</li>
                  <li><strong>Expert Craftsmanship:</strong> Our team consists of skilled professionals with extensive experience in all renovation types.</li>
                  <li><strong>Quality Materials:</strong> We source premium materials and fixtures to ensure longevity and aesthetic appeal.</li>
                  <li><strong>Transparent Pricing:</strong> Clear quotations with no hidden costs.</li>
                  <li><strong>Project Management:</strong> We handle every aspect of your project from conception to completion.</li>
                  <li><strong>Customer Focus:</strong> Your satisfaction is our priority.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Contact Details</h3>
                <div className="info-item">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/4407865516023" target="_blank" rel="noopener noreferrer">+44 (0)7865 516023</a>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <a href="mailto:bfconstruction26@gmail.com">bfconstruction26@gmail.com</a>
                </div>
                <div className="info-item">
                  <h4>Location</h4>
                  <p>London, United Kingdom</p>
                </div>
                <div className="info-item">
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/bfconstruction.uk?igsh=eHUyYW9qMXZqZTRr&utm_source=qr" target="_blank" rel="noopener noreferrer">@bfconstruction.uk</a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <h3>Request a Quote</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                  >
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="full">Full Home Renovation</option>
                    <option value="both">Both Kitchen & Bathroom</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Send via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2026 BF Construction. All rights reserved.</p>
              <p>Complete Home Renovations | Kitchen & Bathroom Specialists | London, United Kingdom</p>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/bfconstruction.uk?igsh=eHUyYW9qMXZqZTRr&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://wa.me/4407865516023" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
              <a href="mailto:bfconstruction26@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
