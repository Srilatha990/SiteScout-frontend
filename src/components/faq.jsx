// import React, { useState, useEffect } from 'react';

// const FAQ = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isOpen, setIsOpen] = useState([]);
//   const base_URL = 'https://site-scout-backend.vercel.app';

//   // Fetch FAQ data from API
//   useEffect(() => {
//     const fetchFaqs = async () => {
//       try {
//         const response = await fetch(`${base_URL}/api/faqs`);
//         const data = await response.json();
//         setFaqs(data); // Assuming data is an array of FAQ objects
//       } catch (error) {
//         console.error('Error fetching FAQ data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFaqs();
//   }, []);

//   // Toggle accordion
//   const toggleAccordion = (index) => {
//     setIsOpen(prevState => {
//       const newState = [...prevState];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };

//   if (loading) {
//     return (
//       <div style={styles.loadingContainer}>
//         <p style={styles.loadingText}>Loading FAQs...</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Part 1: Banner Section */}
//       <div style={styles.bannerContainer}>
//         <div style={styles.banner}>
//           <img
//             src='url(../images/contact-img.webp) center no-repeat #164378'
//             alt="FAQ Background"
//             style={styles.bannerImg}
//           />
//           <h2 style={styles.bannerText}>Frequently Asked Questions</h2>
//         </div>
//       </div>

//       {/* Part 2: FAQ Section */}
//       <div style={styles.faqContainer}>
//         {faqs.length > 0 ? (
//           faqs.map((faq, index) => (
//             <div key={index} style={styles.accordion}>
//               <div
//                 style={styles.accordionHeader}
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <span style={styles.accordionTitle}>{faq.question}</span>
//                 <span style={styles.accordionIcon}>{isOpen[index] ? '-' : '+'}</span>
//               </div>
//               {isOpen[index] && (
//                 <div style={styles.accordionBody}>
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No FAQs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // Inline CSS styles
// const styles = {
//   bannerContainer: {
//     position: 'relative',
//     width: '100%',
//     height: '300px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   banner: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bannerImg: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     zIndex: -1,
//   },
//   bannerText: {
//     fontSize: '32px',
//     fontWeight: 'bold',
//     color: '#fff',
//     textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//     textAlign: 'center', // Center the text horizontally
//   },
//   faqContainer: {
//     maxWidth: '900px',
//     margin: '20px auto',
//     padding: '0 20px',
//   },
//   accordion: {
//     borderRadius: '8px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     marginBottom: '10px',
//     overflow: 'hidden',
//   },
//   accordionHeader: {
//     backgroundColor: '#f7f7f7',
//     padding: '15px',
//     cursor: 'pointer',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontWeight: 'bold',
//     transition: 'background-color 0.3s ease',
//   },
//   accordionHeaderHover: {
//     backgroundColor: '#f0f0f0',
//   },
//   accordionTitle: {
//     fontSize: '18px',
//   },
//   accordionIcon: {
//     fontSize: '20px',
//   },
//   accordionBody: {
//     backgroundColor: '#fafafa',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   loadingContainer: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: '20px',
//   },
//   loadingText: {
//     marginTop: '20px',
//   },
// };

// export default FAQ;





import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState([]);
  const base_URL = 'https://site-scout-backend.vercel.app';

  // Fetch FAQ data from API
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${base_URL}/api/faqs`);
        const data = await response.json();
        setFaqs(data); // Assuming data is an array of FAQ objects
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setIsOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Loading FAQs...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Part 1: Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.banner}>
          <h2 style={styles.bannerText}>Frequently Asked Questions</h2>
        </div>
      </div>

      {/* Part 2: FAQ Section */}
      <div style={styles.faqContainer}>
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} style={styles.accordion}>
              <div
                style={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <span style={styles.accordionTitle}>{faq.question}</span>
                <span style={styles.accordionIcon}>{isOpen[index] ? '-' : '+'}</span>
              </div>
              {isOpen[index] && (
                <div style={styles.accordionBody}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No FAQs available.</p>
        )}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background: 'url(../images/contact-img.webp) center no-repeat #164378', // Set background image here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  banner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    textAlign: 'center', // Center the text horizontally
  },
  faqContainer: {
    maxWidth: '900px',
    margin: '20px auto',
    padding: '0 20px',
  },
  accordion: {
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
    overflow: 'hidden',
  },
  accordionHeader: {
    backgroundColor: '#f7f7f7',
    padding: '15px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  accordionHeaderHover: {
    backgroundColor: '#f0f0f0',
  },
  accordionTitle: {
    fontSize: '18px',
  },
  accordionIcon: {
    fontSize: '20px',
  },
  accordionBody: {
    backgroundColor: '#fafafa',
    padding: '10px',
    fontSize: '16px',
  },
  loadingContainer: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  loadingText: {
    marginTop: '20px',
  },
};

export default FAQ;
