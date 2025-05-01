import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>LifeLink</h3>
          <p>Connecting donors with those in need</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/search">Search</Link>
          <Link to="/emergency">Emergency</Link>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@lifelink.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LifeLink. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 