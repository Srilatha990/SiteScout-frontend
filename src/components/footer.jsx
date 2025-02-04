

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         <div style={styles.column}>
//           <h3 style={styles.columnHeading}>FEATURES</h3>
//           <ul style={styles.navList}>
//             <li><Link to="/featurepage" style={styles.navLink}>Features Overview</Link></li>
//             <li><Link to="/package" style={styles.navLink}>Package Builder</Link></li>
//             <li><Link to="/membership" style={styles.navLink}>Membership</Link></li>
//           </ul>
//         </div>
//         <div style={styles.column}>
//           <h3 style={styles.columnHeading}>USE CASES</h3>
//           <ul style={styles.navList}>
//             <li><Link to="/usecases" style={styles.navLink}>Business Listings</Link></li>
//             <li><Link to="/ads" style={styles.navLink}>Classified Ads</Link></li>
//             <li><Link to="/realestate" style={styles.navLink}>Real Estate</Link></li>
//           </ul>
//         </div>
//         <div style={styles.column}>
//           <h3 style={styles.columnHeading}>SUPPORT</h3>
//           <ul style={styles.navList}>
//             <li><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
//             <li><Link to="/blogs" style={styles.navLink}>Blog</Link></li>
//             <li><Link to="/faq" style={styles.navLink}>FAQ</Link></li>
//           </ul>
//         </div>

//         {/* New CONTACT US Column */}
//         <div style={styles.column}>
//           <h3 style={styles.columnHeading}>CONTACT US</h3>
//           <ul style={styles.navList}>
//             <li style={styles.contactItem}>+1 800 630 4694 (toll-free)</li>
//             <li style={styles.contactItem}>+44 118 370 2340 (UK)</li>
//             <li style={styles.contactItem}>+61 8 6119 8176 (Australia)</li>
//           </ul>
//         </div>
//       </div>

//       {/* Horizontal Line */}
//       <hr style={styles.hr} />

//       {/* Social Media Section */}
//       <div style={styles.contactSection}>
//         <div style={styles.contactRight}>
//           <a href="#" style={styles.socialIcon}>
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="#" style={styles.socialIcon}>
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="#" style={styles.socialIcon}>
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="#" style={styles.socialIcon}>
//             <i className="fab fa-linkedin-in"></i>
//           </a>
//         </div>
//       </div>

//       {/* Bottom Text Section */}
//       <div style={styles.bottomText}>
//         <p>&copy; 2003 - 2024 eDirectory.com All Rights Reserved. Best Business Directory Software & Directory Script</p>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     padding: '50px 0 0 0',
//     backgroundColor: '#081a30',
//     color: '#fff',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     width: '90%',
//     margin: '0 auto',
//   },
//   column: {
//     flex: '1 1 23%',
//     minWidth: '250px',
//     marginBottom: '30px',
//   },
//   columnHeading: {
//     fontSize: '1.6rem',
//     marginBottom: '20px',
//     fontWeight: 'bold',
//   },
//   navList: {
//     listStyleType: 'none',
//     paddingLeft: '0',
//   },
//   navLink: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '1.1rem',
//     marginBottom: '12px',
//     display: 'block',
//     transition: 'color 0.3s',
//   },
//   contactItem: {
//     color: '#fff',
//     fontSize: '1.1rem',
//     marginBottom: '12px',
//   },
//   hr: {
//     border: '0',
//     borderTop: '1px solid #fff',
//     margin: '30px 0',
//   },
//   contactSection: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '30px 0',
//   },
//   contactRight: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '200px',
//   },
//   socialIcon: {
//     color: '#fff',
//     fontSize: '2rem',
//     margin: '0 10px',
//     textDecoration: 'none',
//     borderRadius: '50%',
//     padding: '10px',
//     transition: 'background-color 0.3s, transform 0.3s',
//   },
//   bottomText: {
//     textAlign: 'center',
//     color: '#fff',
//     marginTop: '30px',
//     fontSize: '1rem',
//   },
// };

// export default Footer;






import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.columnHeading}>FEATURES</h3>
          <ul style={styles.navList}>
            <li><Link to="/featurepage" style={styles.navLink}>Features Overview</Link></li>
            <li><Link to="/package" style={styles.navLink}>Package Builder</Link></li>
            <li><Link to="/membership" style={styles.navLink}>Membership</Link></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={styles.columnHeading}>USE CASES</h3>
          <ul style={styles.navList}>
            <li><Link to="/usecases" style={styles.navLink}>Business Listings</Link></li>
            <li><Link to="/ads" style={styles.navLink}>Classified Ads</Link></li>
            <li><Link to="/realestate" style={styles.navLink}>Real Estate</Link></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={styles.columnHeading}>SUPPORT</h3>
          <ul style={styles.navList}>
            <li><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
            <li><Link to="/blogs" style={styles.navLink}>Blog</Link></li>
            <li><Link to="/faq" style={styles.navLink}>FAQ</Link></li>
          </ul>
        </div>

        {/* New CONTACT US Column */}
        <div style={styles.column}>
          <h3 style={styles.columnHeading}>CONTACT US</h3>
          <ul style={styles.navList}>
            <li style={styles.contactItem}>+1 800 630 4694 (toll-free)</li>
            <li style={styles.contactItem}>+44 118 370 2340 (UK)</li>
            <li style={styles.contactItem}>+61 8 6119 8176 (Australia)</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr style={styles.hr} />

      {/* Social Media Section */}
      <div style={styles.contactSection}>
        <div style={styles.contactRight}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div style={styles.bottomText}>
        <p>&copy; 2003 - 2024 eDirectory.com All Rights Reserved. Best Business Directory Software & Directory Script</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '50px 0 0 0',
    backgroundColor: '#081a30',
    color: '#fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    margin: '0 auto',
  },
  column: {
    flex: '1 1 23%',
    minWidth: '250px',
    marginBottom: '30px',
  },
  columnHeading: {
    fontSize: '1.6rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  navList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    marginBottom: '12px',
    display: 'block',
    transition: 'color 0.3s',
  },
  contactItem: {
    color: '#fff',
    fontSize: '1.1rem',
    marginBottom: '12px',
  },
  hr: {
    border: '0',
    borderTop: '1px solid #fff',
    margin: '30px 0',
  },
  contactSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0',
  },
  contactRight: {
    display: 'flex',
    justifyContent: 'center', // Aligning the icons in the center
    alignItems: 'center',
    width: '200px',
  },
  socialIcon: {
    color: '#fff',
    fontSize: '2rem',
    margin: '0 10px',
    textDecoration: 'none',
    borderRadius: '50%',
    padding: '10px',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  bottomText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: '30px',
    fontSize: '1rem',
  },
};

export default Footer;
