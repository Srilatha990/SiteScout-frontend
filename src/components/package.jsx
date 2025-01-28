


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PackagePage = () => {
  return (
    <div>
      {/* First Row (Background Image with Text) */}
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
          style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }} // Max width with padding for responsiveness
        >
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Package Builder</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            Besides selling subscriptions for individual products (listings, classifieds, banners, etc) you can maximize revenue per order by packaging opportunities together and offering as one.
          </p>
        </div>
      </div>

      {/* Second Row (Content Sections) */}
      <div
        style={{
          padding: '80px 0',
          backgroundColor: '#e8ecf1',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Section 1 */}
          <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '10px' }}>Basic Package</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
              Perfect for startups and small businesses looking for essential features at an affordable price.
            </p>
            <img
              src="../images/package1.webp" // Replace with actual image path
              alt="Basic Package"
              className="img-fluid"
            />
          </div>

          {/* Section 2 */}
          <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '10px' }}>Pro Package</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
              Ideal for growing businesses that require advanced features and flexibility to scale.
            </p>
            <img
              src="../images/package2.webp" // Replace with actual image path
              alt="Pro Package"
              className="img-fluid"
            />
          </div>

          {/* Section 3 */}
          <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '10px' }}>Premium Package</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
              The ultimate package for large enterprises with custom requirements and full flexibility.
            </p>
            <img
              src="../images/package3.webp" // Replace with actual image path
              alt="Premium Package"
              className="img-fluid"
            />
          </div>

          {/* Section 4 */}
          <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '10px' }}>Enterprise Package</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
              For organizations requiring a bespoke solution with additional enterprise-level features.
            </p>
            <img
              src="../images/package4.webp" // Replace with actual image path
              alt="Enterprise Package"
              className="img-fluid"
            />
          </div>

          {/* Section 5 */}
          <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '10px' }}>Custom Package</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
              Tailored specifically for your unique business needs with fully customizable options.
            </p>
            <img
              src="../images/package5.webp" // Replace with actual image path
              alt="Custom Package"
              className="img-fluid"
            />
          </div>

          {/* Section 6 */}
          <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '10px' }}>Ultimate Package</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
              Get everything you need for your business with the Ultimate Package designed for maximum impact.
            </p>
            <img
              src="../images/package6.webp" // Replace with actual image path
              alt="Ultimate Package"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagePage;




