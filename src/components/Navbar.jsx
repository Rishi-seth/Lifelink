import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LifeLink
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/register" className="nav-link">Register as Donor</Link>
          <Link to="/search" className="nav-link">Search Donors</Link>
          <Link to="/emergency" className="nav-link emergency">Emergency Request</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 