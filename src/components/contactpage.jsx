
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>
            Questions About Our Products or Services? Let’s Talk!
          </h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            We make ourselves available for technical support, training, and even basic questions. We're always happy to help!
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div style={{ backgroundColor: '#e8ecf1', width: '100%', padding: '0px' }}>
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '300px' }}>
          {/* First Section */}
          <div className="row justify-content-center text-center mb-4">
            <div className="col-md-12">
              <p>
                We appreciate you taking the time to check out our software. Whether you have questions regarding features, functionalities, signups, or need support for your site, we’re ready to help you! Just start a conversation and we'll get back to you ASAP!
              </p>
              <Link to='/demo' style={{textDecoration:'none'}}>
              <button className="btn btn-primary" style={{ width: '200px' }}>
                Leave a message
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section (Contact Info & Map) */}
      <div className="row justify-content-center text-center mt-4">
            {/* Left Side: Contact Info */}
            <div className="col-md-6">
              <h4>ARCA SOLUTIONS INC.</h4>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>7138 Little River Turnpike</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>#1825</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>Annandale, VA 22003, USA</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>Washington DC Metro Area</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>Toll Free: +1 800-630-4694</p>
              <p style={{ marginTop: 0, marginBottom:'3px' }}>+1 703-914-0770</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>+1 703-842-8199 (fax)</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>+44 118 370 2340 (UK)</p>
              <p style={{ marginTop: 0, marginBottom: '3px' }}>sales@edirectory.com</p>
            </div>

            {/* Right Side: Map */}
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="Google Map Location"
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.2326656842547!2d78.55341579895448!3d17.353557610504733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99005a6b6089%3A0x78a0bd01ec6960f2!2sTechno%20Tide%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737977845975!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: 0, width: '100%', height: '300px' }}
                />
              </div>
            </div>
          </div>

          <hr/>

      {/* Third Section (Duplicate of Second Section) */}
      <div className="container my-5">
        <div className="row justify-content-center text-center">
          {/* Left Side: Contact Info */}
          <div className="col-md-6">
            <h4>ARCA SOLUTIONS LTDA., BRAZIL</h4>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>Av. Getulio Vargas, 22-25</p>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>Ed. Prime Square, Torre II, Sala</p>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>1706</p>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>Jd. Europa, 17017-383</p>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>Bauru, SP</p>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>+55 (14) 9 9119 2695</p>
            <p style={{ marginTop: 0, marginBottom: '3px' }}>comercial@arcasolutions.com.br</p>
          </div>

          {/* Right Side: Map */}
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Google Map Location"
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.2326656842547!2d78.55341579895448!3d17.353557610504733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99005a6b6089%3A0x78a0bd01ec6960f2!2sTechno%20Tide%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737977845975!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                style={{ border: 0, width: '100%', height: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


