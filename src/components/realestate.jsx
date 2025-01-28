


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RealEstatePage = () => {
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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Real Estate Directory</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
          Perfect for directory websites serving real estate markets. List properties to buy, rent, and sell. Showcase your agents, property portfolios, open houses, and more.
          </p>
        </div>
      </div>

     <div style={{backgroundColor:'#e8ecf1', width:'100%', padding:'50px'}}>
       {/* Second Row (Content Sections with Image & Card) */}
       <div className="container">
        {/* New Heading: Build a Classified Ads Directory */}
        <div className="container text-center">
          <h2>Launch a Real Estate/Property Directory</h2>
        </div>

        {/* Section 1: Image on Left, Cards on Right */}
        <div className="row align-items-center mt-5 mb-5 g-3">
          <div className="col-md-6">
            <img
              src="../images/realstate1.webp"
              alt="Image 1"
              className="img-fluid"
              style={{ height: '500px', width:'100%' }} // Set height to 500px for this section
            />
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Create A Real Estate Directory</h5>
                <p className="card-text">
                eDirectory is the most complete platform for creating powerful Real Estate Directories with superior design and functionalities.
                </p>
              </div>
            </div>
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Search & Filter</h5>
                <p className="card-text">
                The Real Estate theme enables users to search properties and filter for price, location, bedrooms, bathrooms, and car parking spots.
                </p>
              </div>
            </div>
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Powerful SEO</h5>
                <p className="card-text">
                Developed according to schema.org markup fields to ensure your data is correctly read, indexed, ranked, and displayed by search engines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Card on Left, Image on Right */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Integrated Map</h5>
                <p className="card-text">
                Users can easily locate property listings with the intuitive map view feature, enhancing the usability of the Real Estate Online Directory.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../images/realstate2.webp"
              alt="Image 2"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
        </div>

        {/* Section 3: Image on Left, Card on Right */}
        <div className="row align-items-center mb-5 g-3">
          <div className="col-md-6">
            <img
              src="../images/realstate3.webp"
              alt="Image 3"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Template Editor</h5>
                <p className="card-text">
                Personalize listing fields and design to match your data with the Listing Template Editor. Deliver a unique, professional experience for users and advertisers, including Realtors and Real Estate agencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Card on Left, Image on Right */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Multi-listing Publisher</h5>
                <p className="card-text">
                Enable advertisers to post multiple property listings and effortlessly manage everything through their advertiser self-service portal. You don't have to lift a finger.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../images/realstate4.webp"
              alt="Image 4"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
        </div>

        {/* Section 5: Image on Left, Card on Right */}
        <div className="row align-items-center mb-5 g-3">
          <div className="col-md-6">
            <img
              src="../images/realstate5.webp"
              alt="Image 5"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Related/Linked Listings</h5>
                <p className="card-text">
                exclusive feature showcases related or associated property listings on the detail page, enriching the user experience with more relevant content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Card on Left, Image on Right */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Monetize Your Directory</h5>
                <p className="card-text">
                eDirectory offers several ways for you to monetize your Real Estate directory selling recurring subscriptions, leads, banner ads, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../images/realstate6.webp"
              alt="Image 6"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default RealEstatePage;
