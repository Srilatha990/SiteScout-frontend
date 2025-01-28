
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rank = () => {
  // Array of card data with Font Awesome icon classes
  const cardData = [
    {
      icon: 'fas fa-bullseye', // Font Awesome icon class
      title: 'Built to Rank',
      description: 'eDirectory is built with SEO in mind, from the latest Google tagging, sitemap generation, to built-in onsite SEO. Focus on content and rest assured your site will rank well in the SERPs.',
    },
    {
      icon: 'far fa-handshake', // Another Font Awesome icon class
      title: 'Enterprise Grade',
      description: 'eDirectory powers thousands of sites world-wide. Whether you run a large online business, or are planning to build one, eDirectory is the solution you can trust.',
    },
    {
      icon: 'fas fa-power-off', // Another Font Awesome icon class
      title: 'Technology Stack',
      description: 'eDirectory is built using technology platforms that powers many of the largest sites on the internet. In addition to the core technology, our code is optmized for speed and reliability.',
    },
  ];

  return (
    <div className="rank-section" style={{ width: '100%', background: '#E8ECF1', padding: '100px 0px 150px 0px', boxSizing: 'border-box' }}>

      {/* First Row - Centered text with added flex styling */}
      <div className="container py-3" style={{ maxWidth: '1200px' }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 mb-5">
            <p style={{ fontSize: '28px', color: '#4a4a4a', fontWeight: '600', letterSpacing:'1px', fontWeight:'700' }}>
              The ultimate all-in-one online directory builder
            </p>
            <p style={{ fontSize: '22px', color: '#4a4a4a', fontWeight:'400', lineHeight:'1.42' }}>
              eDirectory is designed to be easy to operate, yet powerful enough to meet all your business needs as your online community grows.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row - Radial Gradient Background */}
      <div style={{ width: '100%', background: 'radial-gradient(circle, #7dd3ff 0%, #199adb 67%)' }}>
        <div className="container py-5" style={{ maxWidth: '1200px' }}>
          <div className="row justify-content-center text-center">
            {/* Centered Image */}
            <div className="col-12">
              <img
                src="../images/rank-img.webp"
                alt="Centered"
                style={{
                  maxWidth: '700px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  marginTop:'-120px',
                }}
              />
            </div>
          </div>

          {/* Horizontal Cards */}
          <div className="row justify-content-center">
            {/* Map through the cardData array to render each card */}
            {cardData.map((card, index) => (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <div className="card" style={{ height: '100%' }}>
                  {/* Render Font Awesome icon instead of an image */}
                  <div className="card-img-top text-center" style={{ fontSize: '40px', padding: '10px' }}>
                    <i className={card.icon}></i> {/* Font Awesome icon */}
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{color:'#4a4a4a',fontWeight:'bold', fontSize:'1.25rem', marginBottom:'0.5rem'}}>{card.title}</h5>
                    <p className="card-text" style={{color:'#4A4A4A', fontSize:'1rem', marginBottom:'1rem'}}>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;
