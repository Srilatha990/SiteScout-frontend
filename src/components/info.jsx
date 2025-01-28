// InfoSection.js
import React from 'react';

const InfoSection = () => {
  // Data for the steps in the info section
  const steps = [
    {
      image: '../images/info-1.webp',
      heading: 'Hit your Niche',
      description: 'eDirectory: the most complete set of features to dominate any industry.',
    },
    {
      image: '../images/info-2.webp',
      heading: 'Easy Setup and Fast Launch',
      description: 'Setup and launch your site in minutes. Manage content with ease.',
    },
    {
      image: '../images/info-3.webp',
      heading: 'Generate revenue',
      description: 'Monetize your site selling recurring subscriptions, leads, ads and more.',
    },
  ];

  // Inline styles for Info Section
  const infoSectionStyle = {
    position: 'relative',
    top: '-100px', // Adjust this to overlap with Hero Section
    marginBottom:'50px',
    backgroundColor: '#fff',
    borderRadius:'5px',
    padding: '5px 0',
    width: '100%',
    zIndex: 2,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
  };

  const stepBoxStyle = {
    textAlign: 'center',
    // backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    // borderRadius: '50%',
  };

  return (
    <div className="container" style={{background:'#e8ecf1'}}>
      <div style={infoSectionStyle}>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div style={stepBoxStyle}>
                <img src={step.image} alt={`Step ${index + 1}`} style={imageStyle} />
                <h5 style={{ marginTop: '20px', fontSize: '1.25rem', color:'#4a4a4a', fontWeight:'bold' }}>{step.heading}</h5>
                <p style={{fontSize:'16px', fontWeight:'400',marginBottom:'0', color:'#4a4a4a'}}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

