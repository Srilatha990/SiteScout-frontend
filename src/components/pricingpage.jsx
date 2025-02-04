


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PricingPage = () => {
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
//           <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>We have plans and pricing options to meet any budget or strategy</h1>
//           <div className="d-flex justify-content-center mt-4">
//             <button
//               className="btn btn-primary me-3" // Monthly button in blue
//               style={{ width: '150px' }}
//             >
//               Monthly
//             </button>
//             <button
//               className="btn btn-outline-light" // Yearly button in white
//               style={{ width: '150px' }}
//             >
//               Yearly
//             </button>
//           </div>
//           <p className="mt-3">
//             <strong>Save 25% on yearly plans</strong>
//           </p>
//         </div>
//       </div>

//       {/* Second Row - Cards */}
//       <div className="container" style={{ marginTop: '-90px', marginBottom: '50px' }}>
//         <div className="row justify-content-center">
//           {/* Card 1 */}
//           <div className="col-md-4 mb-4 d-flex justify-content-center"> {/* 3 Cards in 1 row */}
//             <div className="card shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
//               <div className="card-body text-center">
//                 <h5 className="card-title">Professional One</h5>
//                 <button className="btn btn-secondary mb-3">Cloud Service</button>
//                 <h4>$99/month</h4>
//                 <button className="btn btn-primary mb-3">Sign Up</button>
//                 <ul className="list-unstyled">
//                   <li>Powered by eDirectory</li>
//                   <li>Android and iOS App Builder</li>
//                   <li>Open API</li>
//                   <li>Complete Set of Built-in Features</li>
//                   <li>Unlimited Listings</li>
//                   <li>Hosting Included</li>
//                   <li>SSL Certificate Included</li>
//                   <li>Email Support</li>
//                 </ul>
//                 <button className="btn btn-success w-100">Start Free Demo</button>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="col-md-4 mb-4 d-flex justify-content-center"> {/* 3 Cards in 1 row */}
//             <div className="card shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
//               <div className="card-body text-center">
//                 <h5 className="card-title">Professional One</h5>
//                 <button className="btn btn-secondary mb-3">Cloud Service</button>
//                 <h4>$99/month</h4>
//                 <button className="btn btn-primary mb-3">Sign Up</button>
//                 <ul className="list-unstyled">
//                   <li>Unbranded/White-labeled</li>
//                   <li>Android and iOS App Builder</li>
//                   <li>Open API</li>
//                   <li>Complete Set of Built-in Features</li>
//                   <li>Unlimited Listings</li>
//                   <li>Hosting Included</li>
//                   <li>SSL Certificate Included</li>
//                   <li>Phone/Chat/Email Support</li>
//                 </ul>
//                 <button className="btn btn-success w-100">Start Free Demo</button>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="col-md-4 mb-4 d-flex justify-content-center"> {/* 3 Cards in 1 row */}
//             <div className="card shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
//               <div className="card-body text-center">
//                 <h5 className="card-title">Professional One</h5>
//                 <button className="btn btn-secondary mb-3">Cloud Service</button>
//                 <h4>$99/month</h4>
//                 <button className="btn btn-primary mb-3">Sign Up</button>
//                 <ul className="list-unstyled">
//                   <li>Full PHP Source Code Access¹</li>
//                   <li>Unbranded/White Labeled</li>
//                   <li>Android and iOS App Builder²</li>
//                   <li>Open API</li>
//                   <li>Complete Set of Built-in Features</li>
//                   <li>Unlimited Listings/Members</li>
//                   <li>eDirectory Hosting/Self-Hosted³</li>
//                 </ul>
//                 <button className="btn btn-success w-100">Start Free Demo</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;









import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false); // Track whether the 'Yearly' plan is selected

  // Data for Monthly Plan
  const monthlyCardsData = [
    {
      title: "Basic Plan",
      plan: "$29/month",
      details: [
        "Basic Features",
        "Up to 10 Listings",
        "Email Support",
        "1GB Storage",
        "No API Access",
        "Hosting Included"
      ]
    },
    {
      title: "Standard Plan",
      plan: "$49/month",
      details: [
        "Advanced Features",
        "Up to 50 Listings",
        "Priority Email Support",
        "5GB Storage",
        "API Access",
        "Hosting Included"
      ]
    },
    {
      title: "Premium Plan",
      plan: "$79/month",
      details: [
        "All Features",
        "Unlimited Listings",
        "24/7 Support",
        "50GB Storage",
        "API Access",
        "Custom Domain",
        "Hosting Included"
      ]
    }
  ];

  // Data for Yearly Plan
  const yearlyCardsData = [
    {
      title: "Basic Plan (Yearly)",
      plan: "$290/year (Save 20%)",
      details: [
        "Basic Features",
        "Up to 15 Listings",
        "Priority Email Support",
        "2GB Storage",
        "No API Access",
        "Free SSL Certificate"
      ]
    },
    {
      title: "Standard Plan (Yearly)",
      plan: "$490/year (Save 20%)",
      details: [
        "Advanced Features",
        "Up to 100 Listings",
        "Priority Email and Chat Support",
        "10GB Storage",
        "API Access",
        "Free SSL Certificate"
      ]
    },
    {
      title: "Premium Plan (Yearly)",
      plan: "$790/year (Save 20%)",
      details: [
        "All Features",
        "Unlimited Listings",
        "24/7 Support",
        "100GB Storage",
        "API Access",
        "Custom Domain",
        "Free SSL Certificate"
      ]
    }
  ];

  // Choose the card data based on the selected plan
  const cardsData = isYearly ? yearlyCardsData : monthlyCardsData;

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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>
            We have plans and pricing options to meet any budget or strategy
          </h1>
          <div className="d-flex justify-content-center mt-4">
            <button
              className={`btn ${!isYearly ? 'btn-primary' : 'btn-outline-light'} me-3`} // Apply different button styles for active state
              style={{ width: '150px' }}
              onClick={() => setIsYearly(false)} // Switch to Monthly
            >
              Monthly
            </button>
            <button
              className={`btn ${isYearly ? 'btn-primary' : 'btn-outline-light'}`} // Apply different button styles for active state
              style={{ width: '150px' }}
              onClick={() => setIsYearly(true)} // Switch to Yearly
            >
              Yearly
            </button>
          </div>
          <p className="mt-3">
            <strong>Save 20% on yearly plans</strong>
          </p>
        </div>
      </div>

      {/* Second Row - Cards */}
      <div className="container" style={{ marginTop: '-90px', marginBottom: '50px' }}>
        <div className="row justify-content-center">
          {cardsData.map((card, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex justify-content-center"> {/* 3 Cards in 1 row */}
              <div className="card shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
                <div className="card-body text-center">
                  <h5 className="card-title">{card.title}</h5>
                  <button className="btn btn-secondary mb-3">Cloud Service</button>
                  <h4>{card.plan}</h4>
                  {/* <button className="btn btn-primary mb-3">Sign Up</button> */}
                  <ul className="list-unstyled">
                    {card.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <Link to='/demo'><button className="btn btn-success w-100">Start Free Demo</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;


