// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UseCasesPage = () => {
//   return (
//     <div>
//       {/* First Row (Background Image with Text) */}
//       <div
//         style={{
//           background: 'url(../images/contact-img.webp) center no-repeat #164378',
//           backgroundSize: 'cover',
//           position: 'relative',
//           minHeight: '70vh',
//           width: '100%',
//           display: 'flex', // Flexbox to center content
//           justifyContent: 'center', // Center horizontally
//           alignItems: 'center', // Center vertically
//         }}
//       >
//         <div className="container text-center text-white">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-12">
//               <h1>Use Cases of eDirectory</h1>
//               <p>
//                 Discover the various ways eDirectory helps businesses and organizations create successful online communities and marketplaces.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Row (Content Section) */}
//       <div
//         style={{
//           padding: '80px 0 0 0',
//           backgroundColor: '#e8ecf1',
//         }}
//       >
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-12">
//               <p>
//                 eDirectory powers thousands of websites around the world. Whether you're building a business directory, classified ads, or membership platform, we have a solution for you. Let’s explore how eDirectory can cater to different use cases.
//               </p>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="row justify-content-center">
//             <div className="col-12 col-md-8 col-lg-6">
//               <img
//                 src="path/to/your/image.jpg" // Replace with actual image path
//                 alt="eDirectory Use Cases"
//                 className="img-fluid"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UseCasesPage;














import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseCasesPage = () => {
  return (
    <div>
      {/* First Row (Background Image with Text) */}
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
          style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }} // Max width with padding for responsiveness
        >
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>eDirectory Use-Cases</h1>
          <p
            style={{
              fontWeight: '300',
              fontSize: '18px',
              color: '#fff',
              lineHeight: '1.56',
              letterSpacing: '0.8px',
            }}
          >
            Online directory or a membership website can be launched with eDirectory for any industry or purpose with real opportunity to generate online recurring revenue.
          </p>
        </div>
      </div>

      {/* Second Row (Content Section) */}
      <div
        style={{
          padding: '80px 0 0 0',
          backgroundColor: '#e8ecf1',
        }}
      >
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#333',
                  lineHeight: '1.56',
                  letterSpacing: '0.8px',
                  margin: '0 0 16px', // Adding margin for spacing
                  padding: '0 0', // Ensure padding on smaller screens
                }}
              >
                eDirectory is the most flexible software allowing you to create several types of directory-based websites. Powered with a complete set of built-in features, eDirectory has all you need to skyrocket your idea with ease.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <img
                src="../images/usecases1.webp" // Replace with actual image path
                alt="eDirectory Use Cases"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;
