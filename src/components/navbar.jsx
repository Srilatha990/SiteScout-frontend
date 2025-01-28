


import React, { useState, useEffect } from 'react'; 
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile or not
  const checkMobile = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Add event listeners when component mounts
  useEffect(() => {
    checkMobile();  // Initial check for screen size
    window.addEventListener('resize', checkMobile);  // Update on window resize
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);  // Clean up event listeners
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dropdown content for each nav link
  const dropdownContent = {
    Features: [
      { name: 'Features overview', path: '/featurepage' },
      { name: 'Package Builder', path: '/package' },
      { name: 'Membership', path: '/membership' },
    ],
    'Use Cases': [
      { name: 'Business Listings', path: '/usecases' },
      { name: 'Classified Ads', path: '/ads' },
      { name: 'Real Estate', path: '/realestate' },
    ],
    Marketplace: [
      { name: 'Website Setup Service', path: '/setupservice' },
      { name: 'SEO Services', path: '/seo' },
      { name: 'Advanced Services', path: '/advanced' },
    ],
    Support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Blog', path: '/blogs' },
      { name: 'FAQ', path: '/faq' },
    ],
  };

  // Custom styles for nav links
  const navLinkStyle = {
    textDecoration: 'none',  // Remove underline
    letterSpacing: '0.5px',  // Add a bit of letter spacing
    color: 'white',  // Ensure text is white
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar ${scrolling ? 'bg-black' : ''} fixed-top`}
      variant="dark"
      style={{ transition: 'background-color 0.3s ease', padding: '15px 50px' }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" className="text-white">
          SiteScout
        </Navbar.Brand>

        {/* Mobile Navbar Toggle Button */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setShowSidebar(true)} 
        />

        {/* For Large Screens */}
        <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-center">
          <Nav className="d-flex align-items-center">
            {/* Dropdowns for Nav Links */}
            {['Features', 'Use Cases', 'Marketplace', 'Support'].map((title) => (
              <NavDropdown
                key={title}
                title={<span style={{ color: 'white' }}>{title}</span>}
                id={`${title.toLowerCase()}-dropdown`}
                className="text-white me-4"
                drop="down"
                menuVariant="light"
              >
                {dropdownContent[title].map((item, index) => (
                  <NavDropdown.Item 
                    key={index} 
                    as={Link} 
                    to={item.path} 
                    style={navLinkStyle} 
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}

            {/* Pricing Link */}
            <Nav.Link as={Link} to="/pricing" className="text-white me-4" style={navLinkStyle}>
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* For Large Screens: Button on the Right */}
        {isMobile ? null : (
          <Link to="/demo">
            <Button variant="outline-light" className="ml-3">
              Start Free Demo
            </Button>
          </Link>
        )}
      </Container>

      {/* Offcanvas for Mobile Devices */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="end"  // Display the offcanvas from the right side
        style={{
          width: '250px',
          backgroundColor: 'black',  // Sidebar background color black
          color: 'white',  // Text color inside sidebar white
        }}
      >
        <Offcanvas.Header closeButton className="text-white">
          <Offcanvas.Title />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {/* Dropdowns for Mobile Devices */}
            {['Features', 'Use Cases', 'Marketplace', 'Support'].map((title) => (
              <NavDropdown
                key={title}
                title={<span style={{ color: 'white' }}>{title}</span>}
                id={`${title.toLowerCase()}-dropdown`}
                className="text-white me-4"
                drop="down"
                menuVariant="light"
              >
                {dropdownContent[title].map((item, index) => (
                  <NavDropdown.Item 
                    key={index} 
                    as={Link} 
                    to={item.path} 
                    style={{ color: 'black' }} 
                    onClick={() => setShowSidebar(false)} // Close on click
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
            {/* Pricing Link */}
            <Nav.Link as={Link} to="/pricing" className="text-white" style={{ color: 'black' }} onClick={() => setShowSidebar(false)}>
              Pricing
            </Nav.Link>

            {/* Start Free Demo Button inside the Offcanvas */}
            <Link to="/demo">
              <Button variant="outline-light" className="mt-3" onClick={() => setShowSidebar(false)}>
                Start Free Demo
              </Button>
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;




