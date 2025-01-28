
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturesPage = () => {
  return (
    <div>
      {/* First Row */}
      <div
        style={{
          background: 'url(../images/contact-img.webp) center no-repeat #164378',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '70vh',
          width: '100%',
          display: 'flex', // Flexbox to center content
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <div
          className="text-center text-white"
          style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }} // Ensuring content doesn't exceed 700px and adding padding for responsiveness
        >
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Complete in Features</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            With the most complete set of out-of-the-box features for directory-based websites. eDirectory is a one-stop-shop for entrepreneurs looking to set up their online communities.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div
        style={{
          padding: '80px 0 0 0',
          backgroundColor: '#e8ecf1',
        }}
      >
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#333',
                  lineHeight: '1.56',
                  letterSpacing: '0.8px',
                  // Restrict paragraph width
                  margin: '0 0', // Center the paragraph
                  padding: '0 0', // Ensure padding on smaller screens
                }}
              >
                We’ve been developing eDirectory since 2003, we power thousands of sites around the world, and we
                launch directories for any industry or purpose. We love coding, and we strive to consistently deliver
                the latest features as desired by our online community. Have a look at the highlight list of features.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <img
                src="../images/featurepage1.webp" // Replace with actual image path
                alt="eDirectory Features"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
