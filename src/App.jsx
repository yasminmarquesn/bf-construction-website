import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const carouselImages = [
    '/assets/projects/bathroom/luxury-view-2.jpg',
    '/assets/projects/bathroom/luxury-view-3.jpg',
    '/assets/projects/bathroom/luxury-view-4.jpg',
    '/assets/projects/new/kitchen-new-1.jpg',
    '/assets/projects/new/garden-new-1.jpg',
  ];

  const galleryImages = [
    { src: '/assets/projects/bathroom/luxury-view-2.jpg', title: 'Luxury Bathroom with Spectacular View' },
    { src: '/assets/projects/bathroom/luxury-view-1.jpg', title: 'Luxury Bathroom Entrance Detail' },
    { src: '/assets/projects/bathroom/luxury-view-3.jpg', title: 'Premium Bathroom with Bespoke Vanity' },
    { src: '/assets/projects/bathroom/luxury-view-4.jpg', title: 'Luxury Shower & Vanity Suite' },
    { src: '/assets/projects/new/bathroom-new-1.jpg', title: 'Luxury Bathroom Transformation' },
    { src: '/assets/projects/new/bathroom-before-after-2.png', title: 'Complete Bathroom Refurbishment' },
    { src: '/assets/projects/new/kitchen-new-1.jpg', title: 'Modern Kitchen with Marble Countertops' },
    { src: '/assets/projects/new/renovation-before-after-1.png', title: 'Complete Home Renovation' },
    { src: '/assets/projects/new/garden-new-1.jpg', title: 'Contemporary Garden Design' },
    { src: '/assets/projects/new/carpentry-new-1.png', title: 'Bespoke Built-In Storage' },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
              <h1>BF CONSTRUCTION<br />SOLUTIONS LTD</h1>
              <p className="tagline">Transform Your Space, Elevate Your Day</p>
            </div>
            <ul className="nav-links">
              <li><a href="#home">HOME</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="#testimonials">TESTIMONIALS</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="carousel-section">
        <div className="carousel-container">
          <img 
            src={carouselImages[currentSlide]} 
            alt="Project showcase" 
            className="carousel-image"
          />
          <div className="carousel-overlay"></div>
          
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
          
          <div className="carousel-dots">
            {carouselImages.map((_, idx) => (
              <div
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              ></div>
            ))}
          </div>

          <div className="carousel-content">
            <h2>Complete Home Renovations</h2>
            <p>Specialising in Kitchen & Bathroom Renovations | 17+ Years of Expert Craftsmanship</p>
            <a href="#contact" className="cta-button">GET A FREE QUOTE</a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="gallery-section">
        <div className="container">
          <h2>Our Recent Projects</h2>
          <p className="gallery-intro">Showcasing our expertise in complete home renovations</p>
          
          <div className="gallery-grid">
            {galleryImages.map((image, idx) => (
              <div 
                key={idx} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <p>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>✓ Bathrooms</h3>
              <p>Luxury bathroom renovations with premium finishes, waterproofing, and bespoke design</p>
            </div>
            <div className="service-card">
              <h3>✓ Kitchens</h3>
              <p>Modern kitchen refurbishments featuring handleless cabinetry and integrated appliances</p>
            </div>
            <div className="service-card">
              <h3>✓ Full Home Renovations</h3>
              <p>Complete home transformations with expert craftsmanship and attention to detail</p>
            </div>
            <div className="service-card">
              <h3>✓ Bespoke Carpentry</h3>
              <p>Custom-made storage solutions for kitchens, bathrooms, wardrobes, and under-stair storage</p>
            </div>
            <div className="service-card">
              <h3>✓ Garden & Outdoor Living</h3>
              <p>Garden design, landscaping, patio installation, and summer house construction</p>
            </div>
            <div className="service-card">
              <h3>✓ Extensions</h3>
              <p>Structural extensions and modern house additions with premium finishes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Exceptional craftsmanship and attention to detail. BF Construction transformed our bathroom into a luxury retreat. Highly recommended!"</p>
              <strong>- Sarah M.</strong>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Professional team, excellent communication, and outstanding results. Our kitchen renovation exceeded all expectations."</p>
              <strong>- James K.</strong>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"From initial consultation to final touches, BF Construction delivered premium quality. Worth every penny!"</p>
              <strong>- Emma L.</strong>
            </div>
          </div>
          <div className="google-link">
            <a href="https://share.google/lkFdWaO63XaxsgRce" target="_blank" rel="noopener noreferrer">
              View Our Google Page & Reviews
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About BF Construction Solutions LTD</h2>
          <p>With over 17 years of experience in luxury home renovations, we specialise in creating bespoke spaces that combine functionality with premium aesthetics. Our team of expert craftsmen is dedicated to delivering exceptional results on every project.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-methods">
            <div className="contact-card">
              <h3>📧 Email</h3>
              <a href="mailto:Info@bfconstruction.co.uk">Info@bfconstruction.co.uk</a>
            </div>
            <div className="contact-card">
              <h3>💬 WhatsApp</h3>
              <a href="https://wa.me/447865516023" target="_blank" rel="noopener noreferrer">+44 (0)7865 516023</a>
            </div>
            <div className="contact-card">
              <h3>📷 Instagram</h3>
              <a href="https://instagram.com/bfconstruction.uk" target="_blank" rel="noopener noreferrer">@bfconstruction.uk</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 BF Construction Solutions LTD. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/447865516023" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        💬
      </a>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close">&times;</span>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
