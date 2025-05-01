import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Donate Blood, Save Lives</h1>
          <p>Your single donation can save up to three lives. Join our community of heroes today.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn primary">Become a Donor</Link>
            <Link to="/search" className="btn secondary">Find Donors</Link>
          </div>
        </div>
      </section>

      <section className="why-donate">
        <div className="section-header">
          <h2>Why Donate Blood?</h2>
          <p>Every drop counts in saving precious lives</p>
        </div>
        <div className="why-donate-grid">
          <div className="why-donate-item">
            <div className="icon">❤️</div>
            <h3>Save Lives</h3>
            <p>One donation can save up to three lives and help patients in critical conditions.</p>
          </div>
          <div className="why-donate-item">
            <div className="icon">🏥</div>
            <h3>Emergency Care</h3>
            <p>Blood is essential for surgeries, cancer treatment, chronic illnesses, and traumatic injuries.</p>
          </div>
          <div className="why-donate-item">
            <div className="icon">⚡</div>
            <h3>Quick Recovery</h3>
            <p>Your donation helps patients recover faster and return to their loved ones.</p>
          </div>
          <div className="why-donate-item">
            <div className="icon">🌟</div>
            <h3>Be a Hero</h3>
            <p>Join our community of lifesavers and make a real difference in your community.</p>
          </div>
          <div className="why-donate-item">
            <div className="icon">🔄</div>
            <h3>Regular Need</h3>
            <p>Blood has a limited shelf life and needs constant replenishment to maintain adequate supplies.</p>
          </div>
          <div className="why-donate-item">
            <div className="icon">💪</div>
            <h3>Health Benefits</h3>
            <p>Donating blood can help reduce the risk of heart disease and reveal potential health issues.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Simple steps to start saving lives</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Quick Registration</h3>
            <p>Join our network of blood donors in minutes and make a lasting impact in your community</p>
            <Link to="/register" className="feature-link">Register Now</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Instant Search</h3>
            <p>Find compatible blood donors near you with our advanced matching system</p>
            <Link to="/search" className="feature-link">Search Donors</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚨</div>
            <h3>Emergency Response</h3>
            <p>Get immediate help during critical situations with our emergency request system</p>
            <Link to="/emergency" className="feature-link">Request Now</Link>
          </div>
        </div>
      </section>

      <section className="blood-types">
        <div className="section-header">
          <h2>Blood Types</h2>
          <p>Understanding blood compatibility</p>
        </div>
        <div className="blood-types-grid">
          <div className="blood-type-card">
            <h3>A+</h3>
            <p>Can receive from: A+, A-, O+, O-</p>
            <p>Can donate to: A+, AB+</p>
          </div>
          <div className="blood-type-card">
            <h3>O-</h3>
            <p>Can receive from: O-</p>
            <p>Universal donor - can donate to all types</p>
          </div>
          <div className="blood-type-card">
            <h3>B+</h3>
            <p>Can receive from: B+, B-, O+, O-</p>
            <p>Can donate to: B+, AB+</p>
          </div>
          <div className="blood-type-card">
            <h3>AB+</h3>
            <p>Universal recipient</p>
            <p>Can donate to: AB+ only</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h2>1000+</h2>
          <p>Active Donors</p>
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Lives Saved</p>
        </div>
        <div className="stat-item">
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Save Lives?</h2>
          <p>Join our community of blood donors today and help save lives in your area.</p>
          <Link to="/register" className="btn primary">Register as Donor</Link>
        </div>
      </section>
    </div>
  )
}

export default Home 