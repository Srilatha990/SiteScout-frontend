





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Sample data for cards (added 3 more items)
// const cardData = [
//   { id: 1, image: '../images/service1.png', heading: 'Integrations Service', description: 'Need help to configure Google Integrations and Social Login in your new eDirectory site? Let us take care of the details so you can focus on building your business.', cost: 44 },
//   { id: 2, image: '../images/service2.png', heading: 'Premium Design Templates', description: 'Choose from 3 Advanced Style Templates to get an improved look and feel for your directory site.', cost: 49 },
//   { id: 3, image: '../images/service3.png', heading: 'Category Pack for Online Directories', description: 'Optimize your websites listing categories with the Category Pack for Online Directories.', cost: 55 },
//   { id: 4, image: '../images/service4.webp', heading: 'SEO Consultancy program', description: 'Get your site optimized for Google and other search engines to increase organic traffic.', cost: 60 },
//   { id: 5, image: '../images/service5.webp', heading: 'Development and Staging Site', description: 'Test updates between your live site and staging site to ensure smooth operations.', cost: 70 },
//   { id: 6, image: '../images/service6.webp', heading: 'Custom Development', description: 'Purchase Custom Development in (6) hour blocks.', cost: 80 },
//   { id: 7, image: '../images/service7.webp', heading: 'CRM Integration', description: 'We will make sure your prospects and customer data gets pushed to your preferred CRM', cost: 90 },
//   { id: 8, image: '../images/service8.webp', heading: 'App Store Submission', description: 'We will make submitting your App to the app store(s) a breeze.', cost: 100 },
// ];

// const Marketplace = () => {
//   return (
//     <div>
//       {/* First Row */}
//       <div
//         style={{
//           background: 'url(../images/contact-img.webp) center no-repeat #164378',
//           backgroundSize: 'cover',
//           position: 'relative',
//           minHeight: '80vh',
//           width: '100%',
//           display: 'flex', // Flexbox to center content
//           justifyContent: 'center', // Center horizontally
//           alignItems: 'center', // Center vertically
//         }}
//       >
//         <div
//           className="text-center text-white"
//           style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }} // Ensuring content doesn't exceed 700px and adding padding for responsiveness
//         >
//           <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Advanced Services</h1>
//           <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
//           Advanced technical support services for online directory projects of any size or scope.
//           </p>
//         </div>
//       </div>

//       {/* New Div for Background Color */}
//       <div style={{ backgroundColor: '#e8ecf1', width: '100%', padding: '50px' }}>
//         <div className="container text-center">
//           {/* Buttons */}
//           <div className="d-flex justify-content-center mb-4">
//             <button className="btn btn-primary me-3" style={{ width: '150px' }}>
//               Button 1
//             </button>
//             <button style={{ width: '150px', backgroundColor: '#fff', border: 'none', borderRadius: '5px' }}>
//               Button 2
//             </button>
//           </div>

//           {/* Cards Section */}
//           <div className="row mb-5 justify-content-center" style={{ padding: '20px' }}>
//             {cardData.map((card) => (
//               <div key={card.id} className="col-md-6 col-sm-6 mb-4">
//                 <div className="card" style={{ display: 'flex', flexDirection: 'row', height: '170px', alignItems: 'center' }}>
//                   {/* Image Section */}
//                   <div
//                     style={{
//                       width: '30%',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <img src={card.image} alt={card.heading} className="card-img-top" style={{ width: '80%', height: 'auto' }} />
//                   </div>

//                   {/* Content Section (Heading + Description) */}
//                   <div
//                     style={{
//                       width: '70%',
//                       padding: '20px',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     <h5 className="card-title">{card.heading}</h5>
//                     <p className="card-text">{card.description}</p>
//                     <span
//                       className="position-absolute top-0 end-0 bg-success text-white p-2"
//                       style={{ fontSize: '16px', borderRadius: '0 0 0 5px' }}
//                     >
//                       ${card.cost}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Marketplace;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for cards (added 3 more items)
const cardData = [
  { id: 1, image: '../images/service1.png', heading: 'Integrations Service', description: 'Need help to configure Google Integrations and Social Login in your new eDirectory site? Let us take care of the details so you can focus on building your business.', cost: 44 },
  { id: 2, image: '../images/service2.png', heading: 'Premium Design Templates', description: 'Choose from 3 Advanced Style Templates to get an improved look and feel for your directory site.', cost: 49 },
  { id: 3, image: '../images/service3.png', heading: 'Category Pack for Online Directories', description: 'Optimize your websites listing categories with the Category Pack for Online Directories.', cost: 55 },
  { id: 4, image: '../images/service4.webp', heading: 'SEO Consultancy program', description: 'Get your site optimized for Google and other search engines to increase organic traffic.', cost: 60 },
  { id: 5, image: '../images/service5.webp', heading: 'Development and Staging Site', description: 'Test updates between your live site and staging site to ensure smooth operations.', cost: 70 },
  { id: 6, image: '../images/service6.webp', heading: 'Custom Development', description: 'Purchase Custom Development in (6) hour blocks.', cost: 80 },
  { id: 7, image: '../images/service7.webp', heading: 'CRM Integration', description: 'We will make sure your prospects and customer data gets pushed to your preferred CRM', cost: 90 },
  { id: 8, image: '../images/service8.webp', heading: 'App Store Submission', description: 'We will make submitting your App to the app store(s) a breeze.', cost: 100 },
];

const Marketplace = () => {
  return (
    <div>
      {/* First Row */}
      <div
        style={{
          background: 'url(../images/contact-img.webp) center no-repeat #164378',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '80vh',
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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Advanced Services</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            Advanced technical support services for online directory projects of any size or scope.
          </p>
        </div>
      </div>

      {/* New Div for Background Color */}
      <div style={{ backgroundColor: '#e8ecf1', width: '100%', padding: '50px' }}>
        <div className="container text-center">
          {/* Buttons */}
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-primary me-3" style={{ width: '190px' }}>
              Advanced Services
            </button>
          </div>

          {/* Cards Section */}
          <div className="row mb-5 justify-content-center" style={{ padding: '20px' }}>
            {cardData.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column', // Make the card content stack vertically
                    height: '100%', // Ensures all cards maintain consistent height
                    padding: '10px', // Add some padding to make content more spacious
                    position: 'relative',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                    maxHeight: '400px', // Keep max height consistent for all cards
                  }}
                >
                  {/* Image Section */}
                  <div
                    style={{
                      width: '100%',
                      height: '100px', // Fixed height for the image container
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="card-img-top"
                      style={{
                        width: '100%', // Image width will be 100% of the container's width
                        height: '100%', // Image will fill the container height
                        objectFit: 'contain', // Ensures the image fits inside the container without cropping
                      }}
                    />
                  </div>

                  {/* Content Section (Heading + Description) */}
                  <div
                    style={{
                      flex: '1', // Allow content to fill the remaining space
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                      {card.heading}
                    </h5>
                    <p className="card-text" style={{ fontSize: '14px', marginBottom: '10px' }}>
                      {card.description}
                    </p>

                    {/* Price Section */}
                    <span
                      className="position-absolute top-0 end-0 bg-success text-white p-2"
                      style={{ fontSize: '16px', borderRadius: '0 0 0 5px' }}
                    >
                      ${card.cost}
                    </span>
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

export default Marketplace;



