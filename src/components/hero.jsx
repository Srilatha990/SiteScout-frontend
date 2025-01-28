import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Inline styles for Hero Section
  const heroSectionStyle = {
    background: 'url(../images/contact-img.webp) center no-repeat #164378', // Background image and color
    backgroundSize: 'cover',
    position: 'relative',
    minHeight: '120vh', // Set to 100vh to cover full viewport height
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space between left content and image
    alignItems: 'center', // Centers both columns vertically
    width: '100%',
    padding: '0 20px', // Adding some padding for better responsiveness
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column', // Ensures that the heading, paragraph, and button stack vertically
    justifyContent: 'flex-start', // Starts from the top of the container
    alignItems: 'flex-start', // Aligns content to the left
    textAlign: 'left', // Align text to the left
    maxWidth: '100%', // To prevent overflow on smaller screens
  };

  const rightColumnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Makes sure the image takes up available space
    textAlign: 'center', // Centers image horizontally
  };

  const imgStyle = {
    width: '100%', // Makes the image responsive to the container's width
    maxWidth: '600px', // Maximum image width
    height: 'auto', // Ensures the image maintains its aspect ratio
    objectFit: 'cover', // Ensures image covers the available space
  };

  return (
    <section style={heroSectionStyle}>
      <div className="container" style={contentStyle}>
        <div className="row w-100" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          {/* Left Content - Column 1 */}
          <div className="col-lg-6 col-md-12 text-white" style={leftColumnStyle}>
            <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold', fontSize: '2.5rem', lineHeight: ' 1.2' }}>The World's Best Online Directory Software</h1>
            <p style={{ marginBottom: '30px', fontWeight: '300', lineHeight: '1.56', fontSize: '18px' }}>Building a modern online directory and membership sites has never been easier</p>

            <Link to="/featurepage" style={{ textDecoration: 'none' }}>
              <Button
                variant="primary"
                size="lg"
                style={{
                  padding: '20px 40px',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: '#f26e0f',
                  background: 'linear-gradient(90deg, #f26e0f 0%, #f2a60f)',
                  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#f26e0f", endColorstr="#f2a60f", GradientType=1)',
                  border: 'none',
                  textTransform: 'uppercase',
                  fontFamily: 'Rubik, Sans-Serif',
                  transition: '.3s',
                  marginBottom: '20px',
                  borderRadius: '3px',
                  lineHeight: '1.5',
                }}
              >
                SEE HOW IT ALL WORKS
              </Button>
            </Link>
          </div>

          {/* Right Image - Column 2 */}
          <div className="col-lg-6 col-md-12" style={rightColumnStyle}>
            <img src="../images/hero-img2.png" alt="Hero" className="img-fluid" style={imgStyle} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
