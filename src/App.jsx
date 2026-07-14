import { useState, useEffect } from 'react'
import './App.css'

const projectsData = [
  // New Projects from User Uploads
  {
    id: 'new-kitchen-1',
    category: 'Kitchens',
    title: 'Modern Kitchen with Herringbone Flooring',
    description: 'A stunning kitchen transformation featuring premium herringbone wooden floors, custom grey cabinetry, and a luxurious marble island.',
    image: '/assets/projects/new/kitchen-new-1.jpg'
  },
  {
    id: 'new-bathroom-ba-1',
    category: 'Bathrooms',
    title: 'Luxury Bathroom Before & After',
    description: 'Complete transformation from a dated space to a contemporary sanctuary with bespoke finishes.',
    image: '/assets/projects/new/bathroom-before-after-2.png'
  },
  {
    id: 'new-bathroom-1',
    category: 'Bathrooms',
    title: 'Bespoke Vanity & Brass Detailing',
    description: 'Custom-made wooden vanity unit paired with an elegant vessel sink and wall-mounted brass taps.',
    image: '/assets/projects/new/bathroom-new-1.jpg'
  },
  {
    id: 'new-carpentry-1',
    category: 'Bespoke Carpentry',
    title: 'High-End Bespoke Wardrobe & Storage',
    description: 'Custom floor-to-ceiling wardrobes in a sleek matte black finish with integrated lighting.',
    image: '/assets/projects/new/carpentry-new-1.png'
  },
  {
    id: 'new-renovation-ba-1',
    category: 'Full Home Renovations',
    title: 'Living Space Structural Transformation',
    description: 'Full renovation from raw structure to a high-end living area with premium finishes.',
    image: '/assets/projects/new/renovation-before-after-1.png'
  },
  {
    id: 'new-garden-1',
    category: 'Gardens',
    title: 'Contemporary Patio & Landscape Design',
    description: 'Large-scale outdoor transformation featuring premium grey paving and professional landscaping.',
    image: '/assets/projects/new/garden-new-1.jpg'
  },
  // Existing Projects
  {
    id: 'clinic-1',
    category: 'Full Home Renovations',
    title: 'Premium Aesthetic Clinic Renovation',
    description: 'High-end refurbishment of a medical aesthetic clinic in London.',
    image: '/assets/projects/renovation/renovation-1.jpg'
  },
  {
    id: 'bathroom-waterproofing',
    category: 'Bathrooms',
    title: 'Professional Waterproofing Process',
    description: 'Technical demonstration of our thorough waterproofing process for long-lasting quality.',
    image: '/assets/projects/bathroom/bathroom-waterproofing.jpg'
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'bathroom',
    message: ''
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello BF Construction Solutions LTD, I would like to discuss a ${formData.projectType} project. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}. ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/4407865516023?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-flex">
          <div className="logo">
            <h1>BF CONSTRUCTION SOLUTIONS LTD</h1>
          </div>
          <div className="nav-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h2>Building Your Dreams Into Reality</h2>
          <p>Expert construction services for residential and commercial properties in London.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
            <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Building the Future</h2>
            <p>A Stunning Collection of Our Completed Projects</p>
          </div>
          <div className="portfolio-grid">
            {projectsData.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-badge">{project.category}</div>
                </div>
                <div className="portfolio-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Expert Services</h2>
            <p>We deliver excellence across all renovation types</p>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <h3>Full Refurbishments</h3>
              <p>Complete house transformations with meticulous attention to detail.</p>
            </div>
            <div className="service-item">
              <h3>Kitchen & Bathrooms</h3>
              <p>Specialised renovations focusing on luxury, functionality, and durability.</p>
            </div>
            <div className="service-item">
              <h3>Bespoke Carpentry</h3>
              <p>Custom-made storage solutions and woodwork tailored to your home.</p>
            </div>
            <div className="service-item">
              <h3>Extensions & Conversions</h3>
              <p>Maximising your space with expert structural work and loft conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section reviews">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <div className="google-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">4.9/5 Google Rating</span>
            </div>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <p>"Really happy with the bathroom, your team did an amazing job and was great to meet all. Thanks so much Elvis!"</p>
              <span className="author">- Dan</span>
            </div>
            <div className="review-card">
              <p>"Thank you for the great work, the finishing is great, top quality. I will definitely consider your team again."</p>
              <span className="author">- Stavros</span>
            </div>
          </div>
          <div className="center-btn">
            <a href="https://www.google.com/search?q=BF+Construction+Solutions+LTD+London" target="_blank" rel="noopener noreferrer" className="btn-link">View all reviews on Google</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact bg-light">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>Better yet, see us in person! We stay in constant communication with our customers until the job is done.</p>
              <div className="info-list">
                <div className="info-item">
                  <strong>Address</strong>
                  <p>London, United Kingdom</p>
                </div>
                <div className="info-item">
                  <strong>Phone</strong>
                  <p><a href="tel:+4407865516023">+44 (0)7865 516023</a></p>
                </div>
                <div className="info-item">
                  <strong>Email</strong>
                  <p><a href="mailto:Info@bfconstruction.co.uk">Info@bfconstruction.co.uk</a></p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://wa.me/4407865516023" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">WhatsApp</a>
                <a href="https://www.instagram.com/bfconstruction.uk" target="_blank" rel="noopener noreferrer" className="social-btn instagram">Instagram</a>
              </div>
            </div>
            <div className="contact-form-container">
              <h3>Get a Free Quote!</h3>
              <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} required />
                <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleFormChange} required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleFormChange} required />
                <textarea name="message" placeholder="Project details..." value={formData.message} onChange={handleFormChange} required></textarea>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Copyright © 2026 BF Construction Solutions LTD - All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp for quick access but discreet */}
      <a href="https://wa.me/4407865516023" target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
        💬
      </a>
    </div>
  )
}

export default App
