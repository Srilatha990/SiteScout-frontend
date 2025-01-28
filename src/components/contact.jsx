


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    country: '',
    phoneNumber: '',
    interestedInCreating: '',
  });

  const countries = ['USA', 'Canada', 'UK', 'Australia', 'India']; // Example countries
  const interestedOptions = ['Website', 'Mobile App', 'Both'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://site-scout-backend.vercel.app/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Thanks message
      } else {
        alert(data.message); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      style={{
        background: 'url(../images/contact-img.webp) center no-repeat #164378',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          color: 'white',
          textAlign: 'center',
          padding: '30px',
        }}
      >
        <div style={{ maxWidth: '700px', width: '100%' }}>
          <h2 style={{ color: '#fff' }}>Get your online revenue goals today with eDirectory!</h2>
          <p style={{ fontSize: '18px', color: '#fff', marginTop: '20px' }}>
            Sign up for a guided demo with an eDirectory Specialist and we'll
            show you how easy it can be to build the directory website you've
            been looking for.
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
            {/* First Name and Email in the same row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
              {/* First Name */}
              <div style={styles.formGroup} className="w-100">
                <label style={styles.label} htmlFor="firstName">
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              {/* Email */}
              <div style={styles.formGroup} className="w-100">
                <label style={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            {/* Country Dropdown */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="country">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                style={styles.input}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            {/* Interested in Creating Dropdown */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="interestedInCreating">
                Interested in Creating
              </label>
              <select
                id="interestedInCreating"
                name="interestedInCreating"
                value={formData.interestedInCreating}
                onChange={handleChange}
                style={styles.input}
                required
              >
                <option value="">Select Option</option>
                {interestedOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div style={styles.formGroup}>
              <button type="submit" style={styles.submitButton}>
                Request a guided tour
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '1.2rem',
    marginBottom: '8px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#199adb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Contact;
