import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SEOComponent = () => {
  return (
    <div>
     {/* First Row */}
     <div
        style={{
          background: 'url(../images/contact-img.webp) center no-repeat #164378',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '90vh',
          width: '100%',
          display: 'flex', // Flexbox to center content
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <div
          className="text-center text-white"
          style={{ maxWidth: '700px', width: '100%', padding: '0px 15px' }} // Ensuring content doesn't exceed 700px and adding padding for responsiveness
        >
          <h2 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Search Engine Optimization (SEO) For Directories</h2>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
          Maximize your website's potential for Google. Our search engine optimization (SEO) Consultancy Service takes a comprehensive approach to optimize your site across all search engines.
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
          <div className="row">
            {/* Left Section: Image and Description */}
            <div className="col-md-6">
              <img
                src="../images/seo1.webp" // Replace with actual image path
                alt="Tailored SEO"
                className="img-fluid mb-4"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Right Section: Text Content */}
            <div className="col-md-6">
              <h2>Tailored SEO Solutions for Directory-Based Websites</h2>
              <p>
                Our program is designed to unlock the potential of your website by implementing a comprehensive SEO strategy tailored to your specific needs. With our guidance, you'll gain a deeper understanding of your competitors and uncover the optimal keywords to target, while working on creating relevant content to attract new users and drive more traffic to your website. Enhance your online visibility, drive organic traffic, and rise above the competition with eDirectory's SEO Service Consultancy Program. Let’s work together to take your project to a new level.
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default SEOComponent;
