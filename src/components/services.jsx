// ServicesSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // Data for the cards (you can replace these with your actual data)
  const cardData = [
    {
      // image: 'fas fa-home',
      image: 'fa fa-building',  // Font Awesome icon class for "heart"
      heading: 'Business Listings Directory',
      description: 'eDirectory has all the key features you need',
    },
    {
      image: 'fas fa-map-marker-alt',
      heading: 'Classified Ads Directory',
      description: 'The Classifieds Site to build whatever you wish',
    },
    {
      image: 'fas fa-home',
      heading: 'Real Estate Directory',
      description: 'Perfect for directories serving real estate markets',
    },
    {
      image: 'far fa-user-circle',
      heading: 'Membership Directory',
      description: 'Create a winning membership directory for any purpose',
    },
    {
      image: 'fas fa-book',
      heading: 'Yellow Pages',
    },
    {
      image: 'fas fa-briefcase',
      heading: 'Job Board',
    },
    {
      image: 'far fa-calendar-alt',
      heading: 'Events Directory',
    },
  ];

  // Inline styles for the Services Section
  const servicesSectionStyle = {
    padding: '0px 0',
  };

  const cardStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    minHeight: '245px', // corrected the property name
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '5px', // added margin for spacing between cards
  };
  
  const smallCardStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    color:' #199adb',
    fontSize: '40px'
  };

  const buttonStyle = {
    padding: '15px 20px',
    fontSize: '16px',
    backgroundColor: '#199adb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    margin: '0px auto 0', // Spacing it from the cards
    transition:'.5s',
    fontWeight:'bold'
  };

  return (
    <section className="container" >
      <div style={servicesSectionStyle}>
        {/* First Row of Content */}
      <div className="container">
        <div className='row justify-content-center mb-5'>
          <div>
            <h3 style={{fontSize:'24px', fontWeight:'400', color:'#4a4a4a', textAlign:'center'}}>In just a few clicks, a stunning, beautifully designed directory or membership website can be online, ready to generate a recurring revenue stream for any industry or purpose.</h3>
            </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="container">
        <div className="row g-5">
          {/* Left side: Cards and content */}
          <div className="col-lg-6 col-md-12">
            {/* First Row of 2 Cards */}
            <div className="row mb-1">
              {cardData.slice(0, 2).map((card, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-1">
                  <div style={cardStyle}>
                  {/* <i alt={card.heading} style={imageStyle} class="fas fa-home"></i>  */}

                    <i className={card.image}  alt={card.heading} style={imageStyle}> </i> 
                    <h4 style={{fontSize:'20px', marginTop:'20px', color:'#4A4A4A', fontWeight:'bold', marginBottom:'0.5rem'}}>{card.heading}</h4>
                    <p style={{fontSize:'16px', color:'#4A4A4A', marginBottom:'1rem'}}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row of 2 Cards */}
            <div className="row mb-1">
              {cardData.slice(2, 4).map((card, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-4">
                  <div style={cardStyle}>
                    {/* <img src={card.image} alt={card.heading} style={imageStyle} /> */}
                    <i className={card.image}  alt={card.heading} style={imageStyle}> </i> 
                    <h4  style={{fontSize:'20px', marginTop:'20px', color:'#4A4A4A', fontWeight:'bold', marginBottom:'0.5rem'}}>{card.heading}</h4>
                    <p style={{fontSize:'16px', color:'#4A4A4A', marginBottom:'1rem'}}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row of 3 Small Cards */}
            <div className="row mb-1">
              {cardData.slice(4, 7).map((card, index) => (
                <div key={index} className="col-lg-4 col-md-4 mb-4">
                  <div style={smallCardStyle}>
                    {/* <img src={card.image} alt={card.heading} style={imageStyle} /> */}
                    <i className={card.image}  alt={card.heading} style={imageStyle}> </i> 
                    <h6 className='mt-2 fw-bold' style={{color:'#4A4A4A'}}>{card.heading}</h6>
                  </div>
                </div>
              ))}
            </div>

            {/* Left side centered button */}
            <div className="text-center">
              <Link to='/usecases' style={{textDecoration:'none'}}>
              <button style={buttonStyle}>More Use Cases</button></Link>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="col-lg-6 col-md-12">
            <img
              src="../images/services-img.webp"
              alt="Service Image"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
