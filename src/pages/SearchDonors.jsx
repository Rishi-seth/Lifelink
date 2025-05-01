import { useState } from 'react'
import '../styles/SearchDonors.css'

const SearchDonors = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    bloodGroup: '',
    location: '',
    radius: '10'
  })

  // Initial suggested donors list
  const suggestedDonors = [
    {
      id: 1,
      name: 'John Doe',
      bloodGroup: 'O+',
      location: 'Mumbai',
      lastDonation: '2024-01-15',
      contact: '+91 98765-43210',
      email: 'john.doe@email.com',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      bloodGroup: 'A+',
      location: 'Delhi',
      lastDonation: '2024-02-01',
      contact: '+91 87654-32109',
      email: 'priya.s@email.com',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      bloodGroup: 'B-',
      location: 'Bangalore',
      lastDonation: '2024-01-30',
      contact: '+91 76543-21098',
      email: 'rahul.k@email.com',
      availability: 'Not Available'
    },
    {
      id: 4,
      name: 'Sarah Khan',
      bloodGroup: 'AB+',
      location: 'Chennai',
      lastDonation: '2024-02-10',
      contact: '+91 65432-10987',
      email: 'sarah.k@email.com',
      availability: 'Available'
    }
  ]

  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchCriteria(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Filter suggested donors based on search criteria
    const filteredResults = suggestedDonors.filter(donor => {
      const matchBloodGroup = !searchCriteria.bloodGroup || donor.bloodGroup === searchCriteria.bloodGroup
      const matchLocation = !searchCriteria.location || 
        donor.location.toLowerCase().includes(searchCriteria.location.toLowerCase())
      return matchBloodGroup && matchLocation
    })
    setSearchResults(filteredResults)
  }

  return (
    <div className="search-donors">
      <h1>Search for Blood Donors</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={searchCriteria.bloodGroup}
            onChange={handleChange}
          >
            <option value="">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={searchCriteria.location}
            onChange={handleChange}
            placeholder="Enter city or area"
          />
        </div>

        <div className="form-group">
          <label htmlFor="radius">Search Radius (km)</label>
          <select
            id="radius"
            name="radius"
            value={searchCriteria.radius}
            onChange={handleChange}
          >
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="20">20 km</option>
            <option value="50">50 km</option>
          </select>
        </div>

        <button type="submit" className="search-btn">Search Donors</button>
      </form>

      <div className="search-results">
        <h2>{searchResults.length > 0 ? 'Search Results' : 'Suggested Donors'}</h2>
        <div className="donor-cards">
          {(searchResults.length > 0 ? searchResults : suggestedDonors).map(donor => (
            <div key={donor.id} className="donor-card">
              <div className="donor-card-header">
                <h3>{donor.name}</h3>
                <span className={`availability-badge ${donor.availability === 'Available' ? 'available' : 'not-available'}`}>
                  {donor.availability}
                </span>
              </div>
              <div className="donor-info">
                <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
                <p><strong>Location:</strong> {donor.location}</p>
                <p><strong>Last Donation:</strong> {donor.lastDonation}</p>
                <p><strong>Contact:</strong> {donor.contact}</p>
                <p><strong>Email:</strong> {donor.email}</p>
              </div>
              <div className="donor-card-actions">
                <button className="contact-btn">Contact Donor</button>
                <button className="message-btn">Send Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchDonors 