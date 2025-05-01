import { useState } from 'react'
import '../styles/DonorRegister.css'

const DonorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    location: '',
    lastDonation: '',
    healthConditions: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for registering as a donor!')
  }

  return (
    <div className="donor-register">
      <h1>Register as a Blood Donor</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
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
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastDonation">Last Donation Date</label>
          <input
            type="date"
            id="lastDonation"
            name="lastDonation"
            value={formData.lastDonation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="healthConditions">Health Conditions (if any)</label>
          <textarea
            id="healthConditions"
            name="healthConditions"
            value={formData.healthConditions}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn">Register as Donor</button>
      </form>
    </div>
  )
}

export default DonorRegister 