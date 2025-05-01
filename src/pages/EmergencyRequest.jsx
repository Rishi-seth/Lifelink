import { useState } from 'react'
import '../styles/EmergencyRequest.css'

const EmergencyRequest = () => {
  const [requestData, setRequestData] = useState({
    patientName: '',
    bloodGroup: '',
    location: '',
    hospital: '',
    contactPerson: '',
    contactNumber: '',
    urgency: 'high',
    additionalInfo: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setRequestData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the emergency request to your backend
    console.log('Emergency request submitted:', requestData)
    alert('Emergency request has been sent! Donors will be notified immediately.')
  }

  return (
    <div className="emergency-request">
      <div className="emergency-header">
        <h1>Emergency Blood Request</h1>
        <p className="emergency-warning">
          ⚠️ This form is for urgent blood donation requests only. 
          For non-emergency requests, please use the regular search function.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="emergency-form">
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={requestData.patientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Required Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={requestData.bloodGroup}
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
            value={requestData.location}
            onChange={handleChange}
            required
            placeholder="Enter city or hospital location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hospital">Hospital Name</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={requestData.hospital}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactPerson">Contact Person</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={requestData.contactPerson}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={requestData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="urgency">Urgency Level</label>
          <select
            id="urgency"
            name="urgency"
            value={requestData.urgency}
            onChange={handleChange}
            required
          >
            <option value="high">High - Immediate Need</option>
            <option value="medium">Medium - Within 24 Hours</option>
            <option value="low">Low - Planned Surgery</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={requestData.additionalInfo}
            onChange={handleChange}
            rows="4"
            placeholder="Please provide any additional details about the patient's condition or specific requirements"
          />
        </div>

        <button type="submit" className="emergency-submit-btn">
          Send Emergency Request
        </button>
      </form>
    </div>
  )
}

export default EmergencyRequest 