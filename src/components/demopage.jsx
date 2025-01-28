

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DemoPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     email: '',
//     country: '',
//     phoneNumber: '',
//     interestedInCreating: '',
//   });

//   const countries = ['USA', 'Canada', 'UK', 'Australia', 'India']; // Example countries
//   const interestedOptions = ['Website', 'Mobile App', 'Both'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Here, you would handle form submission logic
//   };

//   return (
//     <div>
//       {/* First Row */}
//       <div
//         style={{
//           background: 'url(../images/contact-img.webp) center no-repeat #164378',
//           backgroundSize: 'cover',
//           position: 'relative',
//           minHeight: '80vh',
//           width: '100%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div
//           className="text-center text-white"
//           style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }}
//         >
//           <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Start an eDirectory Demo</h1>
//           <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
//             Take a Guided Tour of eDirectory and we'll show you how easy is to build a profitable directory-based website. Use the form below to receive the links to our demo site by email or schedule a call to the day/time that works best for you.
//           </p>
//         </div>
//       </div>

//       {/* Second Row */}
//       <div className="container my-5">
//         <div className="row">
//           {/* Left Side: Contact Form */}
//           <div className="col-md-6 col-12">
//             <div className="card p-4">
//               <form onSubmit={handleSubmit}>
//                 {/* First Name and Email in the same row */}
//                 <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
//                   {/* First Name */}
//                   <div style={styles.formGroup} className="w-100">
//                     <label style={styles.label} htmlFor="firstName">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       style={styles.input}
//                       required
//                     />
//                   </div>

//                   {/* Email */}
//                   <div style={styles.formGroup} className="w-100">
//                     <label style={styles.label} htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       style={styles.input}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Country Dropdown */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.label} htmlFor="country">
//                     Country
//                   </label>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                   >
//                     <option value="">Select Country</option>
//                     {countries.map((country, index) => (
//                       <option key={index} value={country}>
//                         {country}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Phone Number */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.label} htmlFor="phoneNumber">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                   />
//                 </div>

//                 {/* Interested in Creating Dropdown */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.label} htmlFor="interestedInCreating">
//                     Interested in Creating
//                   </label>
//                   <select
//                     id="interestedInCreating"
//                     name="interestedInCreating"
//                     value={formData.interestedInCreating}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                   >
//                     <option value="">Select Option</option>
//                     {interestedOptions.map((option, index) => (
//                       <option key={index} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Submit Button */}
//                 <div style={styles.formGroup}>
//                   <button type="submit" style={styles.submitButton}>
//                     Request a guided tour
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Right Side: Image and Card */}
//           <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
//             <div className="d-flex justify-content-center">
//               <img
//                 src="../images/contactpage1.webp" // Replace with actual image path
//                 alt="eDirectory Setup"
//                 className="img-fluid mb-3"
//                 style={{ maxWidth: '100%', height: '600px' }}
//               />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline CSS styles for the form
// const styles = {
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     fontSize: '1.2rem',
//     marginBottom: '8px',
//     textAlign: 'left',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     marginTop: '5px',
//   },
//   submitButton: {
//     padding: '10px 20px',
//     fontSize: '1.2rem',
//     backgroundColor: '#199adb',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default DemoPage;





import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DemoPage = () => {
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
        alert(data.message); // Success message
      } else {
        alert(data.message); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      {/* First Row */}
      <div
        style={{
          background: 'url(../images/contact-img.webp) center no-repeat #164378',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '80vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="text-center text-white"
          style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }}
        >
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Start an eDirectory Demo</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            Take a Guided Tour of eDirectory and we'll show you how easy it is to build a profitable directory-based website. Use the form below to receive the links to our demo site by email or schedule a call to the day/time that works best for you.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="container my-5">
        <div className="row">
          {/* Left Side: Contact Form */}
          <div className="col-md-6 col-12">
            <div className="card p-4">
              <form onSubmit={handleSubmit}>
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

          {/* Right Side: Image and Card */}
          <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <img
                src="../images/contactpage1.webp" // Replace with actual image path
                alt="eDirectory Setup"
                className="img-fluid mb-3"
                style={{ maxWidth: '100%', height: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles for the form
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

export default DemoPage;
