

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SetupServicePage = () => {
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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>eDirectory Setup Service</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            Let us take care of the details so you can focus on building your business. Our professionals will work with you to get your site setup and looking great!
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="container my-5">
        <div className="row g-3">
          {/* Left Side: List with Blue Dots */}
          <div className="col-md-6 col-12">
            <div className="card p-4">
              <ul className="list-unstyled">
                {[
                  '30-minute Kickstart Call to Review Your Website Objectives',
                  'Screenshare demonstrations to see how it all works before launch',
                  'Setup general settings, colors, and fonts',
                  'Setup site navigation',
                  'Setup listing levels and packages',
                  'Setup payment gateway in eDirectory (you provide gateway account info)',
                  'Setup all Google Integrations (Search Console, Analytics, Maps, Recaptcha, Tag Manager) Google login API, Facebook',
                  'Sitemap submission',
                  'Setup Social Login* (Google and Facebook)',
                  'Importing Categories',
                  'Importing Listing data (you provide the data)',
                  'Adding stock photos to various areas of the site',
                  'Building out 20 listings, using the info you provide plus internet research and stock photos',
                  'Assigned support agent during the setup process',
                  'One Business consulting session',
                ].map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-3">
                    <span
                      className="dot"
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#007bff',
                        marginRight: '10px',
                      }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Image and Card */}
          <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <img
                src="../images/setupservice1.jpg" // Replace with actual image path
                alt="eDirectory Setup"
                className="img-fluid mb-3"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="card text-center w-50 mt-3">
              <div className="card-body">
                <h5 className="card-title">Price: $697</h5>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Row Again at the Bottom */}
      <div
        style={{
          background: 'url(../images/contact-img.webp) center no-repeat #164378',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '70vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="container text-center text-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <h1>Complete in Features</h1>
              <p>
                With the most complete set of out-of-the-box features for directory-based websites. eDirectory is a one-stop-shop for entrepreneurs looking to set up their online communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupServicePage;
