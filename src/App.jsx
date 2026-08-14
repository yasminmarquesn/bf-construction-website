import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const BeforeAfterSlider = ({ before, after, title }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div className="ba-container" ref={containerRef} onMouseMove={handleMove} onTouchMove={handleMove}>
      <div className="ba-after" style={{ backgroundImage: `url(${after})` }}></div>
      <div className="ba-before" style={{ backgroundImage: `url(${before})`, width: `${sliderPos}%` }}>
        <span className="ba-label before">BEFORE</span>
      </div>
      <div className="ba-after-label">
        <span className="ba-label after">AFTER</span>
      </div>
      <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
        <div className="ba-arrow left"></div>
        <div className="ba-arrow right"></div>
      </div>
      <div className="ba-title-overlay">{title}</div>
    </div>
  );
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const carouselImages = [
    '/assets/projects/bathroom/luxury-view-2.jpg',
    '/assets/projects/bathroom/pink-suite/pink-bathroom-1.jpeg',
    '/assets/projects/bathroom/marble-suite/marble-bathroom-1.jpeg',
    '/assets/projects/bathroom/luxury-view-3.jpg',
    '/assets/projects/bathroom/luxury-view-4.jpg',
    '/assets/projects/new/kitchen-new-1.jpg',
    '/assets/projects/new/garden-new-1.jpg',
  ];

  const categories = ['All', 'Bathrooms', 'Kitchens', 'Renovations', 'Gardens', 'Carpentry', 'Laundry', 'Clinic'];

  const projects = [
    // Recently completed bathroom projects
    { id: 501, category: 'Bathrooms', src: '/assets/projects/bathroom/pink-suite/pink-bathroom-1.jpeg', title: 'Statement Pink Bathroom' },
    { id: 502, category: 'Bathrooms', src: '/assets/projects/bathroom/pink-suite/pink-bathroom-2.jpeg', title: 'Bespoke Pink Bathroom Panelling' },
    { id: 503, category: 'Bathrooms', src: '/assets/projects/bathroom/pink-suite/pink-bathroom-3.jpeg', title: 'Bespoke Vanity & Decorative Mirror' },
    { id: 504, category: 'Bathrooms', src: '/assets/projects/bathroom/pink-suite/pink-bathroom-4.jpeg', title: 'Custom Pink Bathroom Storage' },
    { id: 505, category: 'Bathrooms', src: '/assets/projects/bathroom/marble-suite/marble-bathroom-1.jpeg', title: 'Marble Bathroom with Bespoke Vanity' },
    { id: 506, category: 'Bathrooms', src: '/assets/projects/bathroom/marble-suite/marble-bathroom-2.jpeg', title: 'Classic Marble Bathroom Suite' },
    { id: 507, category: 'Bathrooms', src: '/assets/projects/bathroom/marble-suite/marble-bathroom-3.png', title: 'Luxury Shower Room Details' },
    { id: 508, category: 'Bathrooms', src: '/assets/projects/bathroom/marble-suite/marble-bathroom-4.jpeg', title: 'Marble Bathroom Finishing Details' },

    // New Luxury Bathroom
    { id: 1, category: 'Bathrooms', src: '/assets/projects/bathroom/luxury-view-2.jpg', title: 'Luxury Lake View Suite' },
    { id: 2, category: 'Bathrooms', src: '/assets/projects/bathroom/luxury-view-1.jpg', title: 'Designer Entrance' },
    { id: 3, category: 'Bathrooms', src: '/assets/projects/bathroom/luxury-view-3.jpg', title: 'Bespoke Vanity Detail' },
    { id: 4, category: 'Bathrooms', src: '/assets/projects/bathroom/luxury-view-4.jpg', title: 'Premium Shower Suite' },
    
    // Original Projects (Restored)
    { id: 101, category: 'Kitchens', src: '/kitchen-project-1.jpg', title: 'Contemporary Kitchen' },
    { id: 102, category: 'Kitchens', src: '/kitchen-project-2.jpg', title: 'Modern Marble Kitchen' },
    { id: 103, category: 'Bathrooms', src: '/bathroom-project-1.jpg', title: 'Classic Bathroom' },
    { id: 104, category: 'Bathrooms', src: '/bathroom-project-2.jpg', title: 'Spa-Style Retreat' },
    { id: 105, category: 'Clinic', src: '/assets/projects/new/renovation-before-after-1.png', title: 'Medical Clinic Renovation' },
    
    // Transformations (Slider Ready)
    { id: 201, category: 'Renovations', isSlider: true, before: '/assets/projects/transform/renovation-before.jpg', after: '/assets/projects/transform/renovation-after.jpg', title: 'Living Space Transformation' },
    { id: 202, category: 'Bathrooms', isSlider: true, before: '/assets/projects/transform/bathroom-before.jpg', after: '/assets/projects/bathroom/correct-before-after/bathroom-after.png', title: 'Pink Bathroom Transformation' },
    { id: 203, category: 'Laundry', isSlider: true, before: '/assets/projects/laundry/clapham-laundry-before.jpg', after: '/assets/projects/laundry/clapham-laundry-1.jpg', title: 'Bespoke Laundry Room — Clapham Junction' },
    
    // Other New Projects
    { id: 301, category: 'Kitchens', src: '/assets/projects/new/kitchen-new-1.jpg', title: 'Modern Herringbone Kitchen' },
    { id: 302, category: 'Gardens', src: '/assets/projects/new/garden-new-1.jpg', title: 'Contemporary Garden' },
    { id: 303, category: 'Carpentry', src: '/assets/projects/new/carpentry-new-1.png', title: 'Custom Wardrobe' },
    { id: 304, category: 'Bathrooms', src: '/assets/projects/new/bathroom-new-1.jpg', title: 'Luxury Bath Detail' },
    { id: 305, category: 'Bathrooms', src: '/assets/projects/new/bathroom-before-after-2.png', title: 'Bathroom Before & After Study' },
    { id: 306, category: 'Bathrooms', src: '/bathroom-before-after.jpg', title: 'Complete Bathroom Transformation' },

    // Bespoke Laundry Room — Clapham Junction
    { id: 401, category: 'Laundry', src: '/assets/projects/laundry/clapham-laundry-1.jpg', title: 'Bespoke Laundry Room' },
    { id: 402, category: 'Laundry', src: '/assets/projects/laundry/clapham-laundry-2.jpg', title: 'Utility Room Cabinetry' },
    { id: 403, category: 'Laundry', src: '/assets/projects/laundry/clapham-laundry-3.png', title: 'Made-to-Measure Storage' },
    { id: 404, category: 'Laundry', src: '/assets/projects/laundry/clapham-laundry-4.jpeg', title: 'Full-Height Laundry Storage' },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const projectType = formData.get('projectType');
    const message = formData.get('message');
    const whatsappText = [
      'Hello BF Construction Solutions LTD, I would like to request a free quote.',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Project type: ${projectType}`,
      `Project details: ${message || 'Not provided'}`,
    ].join('\\n');
    window.open(`https://wa.me/447865516023?text=${encodeURIComponent(whatsappText)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-dark">
      {/* Header */}
      <header className="header-premium">
        <div className="header-container">
          <div className="logo-section">
            <h1 className="company-name">BF CONSTRUCTION</h1>
            <span className="company-suffix">SOLUTIONS LTD</span>
          </div>
          
          <nav className="nav-desktop">
            <a href="#work">WORK</a>
            <a href="#services">SERVICES</a>
            <a href="#process">PROCESS</a>
            <a href="#reviews">REVIEWS</a>
          </nav>

          <div className="header-contact">
            <a href="tel:447865516023" className="phone-link">+44 (0)7865 516023</a>
            <a href="#contact" className="btn-gold-outline">FREE QUOTE</a>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="hero-visual">
        <div className="carousel-wrapper">
          {carouselImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${img})` }}
            >
              <div className="hero-text-overlay">
                <h2 className="hero-title">BUILT ONCE.<br/>BUILT PROPERLY.</h2>
                <div className="hero-actions">
                  <a href="#work" className="btn-gold">VIEW OUR WORK</a>
                  <a href="#contact" className="btn-white-outline">GET IN TOUCH</a>
                </div>
                <div className="hero-trust">
                  <div className="trust-item">
                    <span className="gold-text">5/5</span> Google Rating
                  </div>
                  <div className="trust-divider"></div>
                  <div className="trust-item">
                    <span className="gold-text">QUALITY</span> Workmanship Guarantee
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transformations Section (Sliders) */}
      <section id="transformations" className="transform-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">TRANSFORMATIONS</span>
            <h2 className="main-title">BEFORE & AFTER</h2>
          </div>
          
          <div className="slider-grid">
            {projects.filter(p => p.isSlider).map(project => (
              <BeforeAfterSlider 
                key={project.id} 
                before={project.before} 
                after={project.after} 
                title={project.title} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work Section (Gallery) */}
      <section id="work" className="work-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">PORTFOLIO</span>
            <h2 className="main-title">OUR RECENT WORK</h2>
          </div>

          <div className="category-filter">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.filter(p => !p.isSlider).map(project => (
              <div key={project.id} className="project-card">
                <div className="project-media">
                  <img src={project.src} alt={project.title} />
                </div>
                <div className="project-hover-info">
                  <h3>{project.title}</h3>
                  <span className="project-cat">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="trades-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">WHAT WE DO</span>
            <h2 className="main-title">OUR CORE SERVICES</h2>
          </div>

          <div className="trades-grid">
            <div className="trade-card">
              <div className="trade-icon">🚿</div>
              <h3>BATHROOMS</h3>
              <p>Luxury renovations with premium waterproofing and bespoke finishes.</p>
            </div>
            <div className="trade-card">
              <div className="trade-icon">🍳</div>
              <h3>KITCHENS</h3>
              <p>Modern refurbishments with high-end cabinetry and integrated appliances.</p>
            </div>
            <div className="trade-card">
              <div className="trade-icon">🏠</div>
              <h3>RENOVATIONS</h3>
              <p>Complete home transformations managed by our expert team.</p>
            </div>
            <div className="trade-card">
              <div className="trade-icon">🪵</div>
              <h3>CARPENTRY</h3>
              <p>Bespoke storage, wardrobes, and custom under-stair solutions.</p>
            </div>
            <div className="trade-card">
              <div className="trade-icon">🌳</div>
              <h3>GARDENS</h3>
              <p>Landscaping, summer houses, and premium outdoor living spaces.</p>
            </div>
            <div className="trade-card">
              <div className="trade-icon">🏗️</div>
              <h3>EXTENSIONS</h3>
              <p>Structural additions to expand and elevate your living space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">OUR PROCESS</span>
            <h2 className="main-title">HOW WE WORK</h2>
          </div>

          <div className="process-steps">
            <div className="step">
              <span className="step-num">01</span>
              <h4>CONSULTATION</h4>
              <p>We visit your site to understand your vision and provide a detailed quote.</p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h4>DESIGN & PLAN</h4>
              <p>Our experts create a tailored plan focusing on quality and functionality.</p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h4>CONSTRUCTION</h4>
              <p>Expert execution with attention to detail and daily progress updates.</p>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <h4>HANDOVER</h4>
              <p>A final walkthrough ensuring every detail meets our premium standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-premium">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">TESTIMONIALS</span>
            <h2 className="main-title">CLIENT STORIES</h2>
          </div>

          <div className="reviews-carousel">
            <div className="review-item">
              <div className="stars">★★★★★</div>
              <p>"Exceptional craftsmanship. BF Construction transformed our home into a luxury retreat. The attention to detail is unmatched."</p>
              <span className="client-name">SARAH M.</span>
            </div>
          </div>
          
          <div className="google-cta">
            <a href="https://share.google/lkFdWaO63XaxsgRce" target="_blank" rel="noopener noreferrer" className="btn-gold-outline">
              READ ALL GOOGLE REVIEWS
            </a>
          </div>
        </div>
      </section>

      {/* Free Quote Section */}
      <section id="contact" className="quote-section">
        <div className="container quote-layout">
          <div className="quote-intro">
            <span className="sub-title">START YOUR PROJECT</span>
            <h2 className="main-title">REQUEST A FREE QUOTE</h2>
            <p>Tell us about your project and our team will be happy to discuss your ideas, answer your questions and arrange the next step.</p>
            <p className="quote-note">Your details will be prepared in a WhatsApp message so you can speak directly with BF Construction Solutions LTD.</p>
          </div>
          <form className="quote-form" onSubmit={handleQuoteSubmit}>
            <label htmlFor="quote-name">Your name</label>
            <input id="quote-name" name="name" type="text" placeholder="Full name" required />

            <label htmlFor="quote-phone">Phone number</label>
            <input id="quote-phone" name="phone" type="tel" placeholder="Your phone number" required />

            <label htmlFor="quote-project">Project type</label>
            <select id="quote-project" name="projectType" defaultValue="Bathrooms" required>
              <option>Bathrooms</option>
              <option>Kitchens</option>
              <option>Full Home Renovation</option>
              <option>Bespoke Carpentry</option>
              <option>Garden & Outdoor Living</option>
              <option>Laundry Room</option>
              <option>Other</option>
            </select>

            <label htmlFor="quote-message">Tell us about your project</label>
            <textarea id="quote-message" name="message" rows="5" placeholder="What would you like us to build or renovate?" required></textarea>

            <button type="submit" className="btn-gold quote-submit">SEND VIA WHATSAPP</button>
          </form>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="footer-contact" className="footer-premium">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <h3>BF CONSTRUCTION</h3>
              <p>Luxury Renovations & Bespoke Solutions</p>
              <p className="service-area">Serving London and surrounding areas.</p>
              <div className="footer-certifications">
                <span>✓ Insured</span>
                <span>✓ Guaranteed</span>
                <span>✓ 17+ Years</span>
              </div>
            </div>
            <div className="footer-contact">
              <h4>CONTACT</h4>
              <a href="mailto:Info@bfconstruction.co.uk">Info@bfconstruction.co.uk</a>
              <a href="tel:447865516023">+44 (0)7865 516023</a>
            </div>
            <div className="footer-social">
              <h4>FOLLOW</h4>
              <a href="https://instagram.com/bfconstruction.uk" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
              <a href="https://wa.me/447865516023" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 BF CONSTRUCTION SOLUTIONS LTD. BUILT ONCE. BUILT PROPERLY.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/447865516023" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span className="wa-icon">💬</span>
      </a>
    </div>
  );
}

export default App;
