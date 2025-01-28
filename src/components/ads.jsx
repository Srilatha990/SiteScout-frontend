


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdsPage = () => {
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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Classified Ads Directory</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            Whether it's advertisements or sales, it's a one-stop-shop for getting your Classifieds on your directory. Customize the Classifieds Module to do whatever you wish.
          </p>
        </div>
      </div>

      {/* Second Row (Content Sections with Image & Card) */}
     <div style={{backgroundColor:'#e8ecf1', width:'100%', padding:'50px'}}>
     <div className="container">
        {/* New Heading: Build a Classified Ads Directory */}
        <div className="container text-center">
          <h2>Build a Classified Ads Directory</h2>
        </div>

        {/* Section 1: Image on Left, Cards on Right */}
        <div className="row align-items-center mt-5 mb-5 g-3">
          <div className="col-md-6">
            <img
              src="../images/ads1.webp"
              alt="Image 1"
              className="img-fluid"
              style={{ height: '500px', width:'100%' }} // Set height to 500px for this section
            />
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Hit your Niche</h5>
                <p className="card-text">
                eDirectory is the perfect fit for any industry or purpose with real opportunity to generate online recurring revenue.
                </p>
              </div>
            </div>
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Scalable</h5>
                <p className="card-text">
                With eDirectory you can build your business from a small site with thousands of listings, to a network of sites with millions.
                </p>
              </div>
            </div>
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">All-in-One</h5>
                <p className="card-text">
                eDirectory comes with Listings, Classifieds, Events, Deals, Articles, Blog and Banner Ads modules. The most-complete set of built-in features you need to skyrocket your idea!
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
                <h5 className="card-title fw-bold">Robust system</h5>
                <p className="card-text">
                Classifieds show all the information you need to make a great directory, including descriptions, photos, videos, downloadable files, pricing, contact information, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../images/ads2.webp"
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
              src="../images/ads3.webp"
              alt="Image 3"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Monetize your Site</h5>
                <p className="card-text">
                Create up to 3 plans for your Classifieds and monetize also selling, listings, events, articles, banner ads, and more. Hook up eDirectory with your gateway of choice, sit back, and start collecting recurring payments.
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
                <h5 className="card-title fw-bold">Custom Design</h5>
                <p className="card-text">
                Drag-and-drop widgets to customize your pages and highlight the best content in your site such as top-level classifieds, new members, most-recent added items, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../images/ads4.webp"
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
              src="../images/ads5.webp"
              alt="Image 5"
              className="img-fluid"
              style={{ height: '250px', width:'100%' }} // Set height to 250px for this section
            />
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'none' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Unlimited Categories</h5>
                <p className="card-text">
                Create as many categories and sub-categories you need to provide detailed content and advanced filtering capabilities.
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
                <h5 className="card-title fw-bold">Content Moderation</h5>
                <p className="card-text">
                Ensure the quality of your content putting all new or modified classifieds in a moderation queue so you can review before they go live.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="../images/ads6.webp"
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

export default AdsPage;
