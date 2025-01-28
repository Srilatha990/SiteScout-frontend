

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MembershipPage = () => {
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
//         <div
//           className="text-center text-white"
//           style={{ maxWidth: '700px', width: '100%', padding: '0 15px' }} // Max width with padding for responsiveness
//         >
//           <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Membership Features</h1>
//           <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
//           Membership Features are available to both advertisers and site visitors, maximizing your revenue model.
//           </p>
//         </div>
//       </div>

//       {/* Second Row (Content Sections) */}
//       <div
//         style={{
//           padding: '80px 0',
//           backgroundColor: '#e8ecf1',
//         }}
//       >
//         <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Section 1 */}
//           <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <h2 style={{ marginBottom: '10px' }}>A flexible Membership directory creator</h2>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             eDirectory is packed with paid membership features so you can create gated content and turn your advertisers - and site visitors - into paying customers. It’s great for Associations, Chambers, Charities, Clubs, Non-Profits, and more.
//             </p>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             Advertisers can create and/or view paywalled content. Site visitors can be charged to view paywalled content. Create different member plans based on the available billing cycles, recurring and one-time payments. It's up to you.
//             </p>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             SEO in mind: all pages are included in the sitemap and available for crawling and indexing by search engines, keeping your organic search competitive advantage.
//             </p>
//             <img
//               src="../images/membership1.webp" // Replace with actual image path
//               alt="Basic Membership"
//               className="img-fluid"
//             />
//           </div>

//           {/* Section 2 */}
//           <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             All modules can be turned on into gated content with ease. Simply mark the type and tier.
//             </p>
//             <img
//               src="../images/membership2.webp" // Replace with actual image path
//               alt="Standard Membership"
//               className="img-fluid"
//             />
//           </div>

//           {/* Section 3 */}
//           <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             For advertisers to see paywalled content, simply enable this option when creating the Subscription Plan.
//             </p>
//             <img
//               src="../images/membership3.webp" // Replace with actual image path
//               alt="Premium Membership"
//               className="img-fluid"
//             />
//           </div>

//           {/* Section 4 */}
//           <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             Create a special plan to your site visitors so they will be prompted to register for free or pay to join your directory. That’s an additional revenue stream for your project. Select which blog posts of your own will be members-only, offering special content to your most-valued audience.
//             </p>
//             <img
//               src="../images/membership4.webp" // Replace with actual image path
//               alt="Enterprise Membership"
//               className="img-fluid"
//             />
//           </div>

//           {/* Section 5 */}
//           <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             Members-Only seal: all gated content will have a seal to show your site visitors that they join your directory to see the content.
//             </p>
//             <img
//               src="../images/membership5.webp" // Replace with actual image path
//               alt="Custom Membership"
//               className="img-fluid"
//             />
//           </div>

//           {/* Section 6 */}
//           <div className="col-12 col-md-8 text-center mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
//             Collect member dues: eDirectory automates your billing efforts by charging member dues, activating and suspending accounts, without you having to lift a finger.
//             </p>
//             <img
//               src="../images/membership6.webp" // Replace with actual image path
//               alt="VIP Membership"
//               className="img-fluid"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MembershipPage;













import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MembershipPage = () => {
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
          <h1 style={{ marginBottom: '40px', color: '#fff', fontWeight: 'bold' }}>Membership Features</h1>
          <p style={{ fontWeight: '300', fontSize: '18px', color: '#fff', lineHeight: '1.56', letterSpacing: '0.8px' }}>
            Membership Features are available to both advertisers and site visitors, maximizing your revenue model.
          </p>
        </div>
      </div>

      {/* Second Row (Content Sections) */}
      <div
        style={{
          padding: '80px 0',
          backgroundColor: '#e8ecf1',
        }}
      >
        <div className="container">
          {/* Section 1 */}
          <div className="row mb-5">
            <div className="col-12 col-md-8 offset-md-2">
              <h2 style={{ marginBottom: '10px' }}>A flexible Membership directory creator</h2>
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                eDirectory is packed with paid membership features so you can create gated content and turn your advertisers - and site visitors - into paying customers. It’s great for associations, chambers, charities, clubs, non-profits, and more.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                Advertisers can create and/or view paywalled content. Site visitors can be charged to view paywalled content. Create different member plans based on the available billing cycles, recurring and one-time payments. It's up to you.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                SEO in mind: all pages are included in the sitemap and available for crawling and indexing by search engines, keeping your organic search competitive advantage.
              </p>
              <img
                src="../images/membership1.webp" // Replace with actual image path
                alt="Basic Membership"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="row mb-5">
            <div className="col-12 col-md-8 offset-md-2">
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                All modules can be turned on into gated content with ease. Simply mark the type and tier.
              </p>
              <img
                src="../images/membership2.webp" // Replace with actual image path
                alt="Standard Membership"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="row mb-5">
            <div className="col-12 col-md-8 offset-md-2">
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                For advertisers to see paywalled content, simply enable this option when creating the Subscription Plan.
              </p>
              <img
                src="../images/membership3.webp" // Replace with actual image path
                alt="Premium Membership"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="row mb-5">
            <div className="col-12 col-md-8 offset-md-2">
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                Create a special plan to your site visitors so they will be prompted to register for free or pay to join your directory. That’s an additional revenue stream for your project. Select which blog posts of your own will be members-only, offering special content to your most-valued audience.
              </p>
              <img
                src="../images/membership4.webp" // Replace with actual image path
                alt="Enterprise Membership"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Section 5 */}
          <div className="row mb-5">
            <div className="col-12 col-md-8 offset-md-2">
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                Members-Only seal: all gated content will have a seal to show your site visitors that they join your directory to see the content.
              </p>
              <img
                src="../images/membership5.webp" // Replace with actual image path
                alt="Custom Membership"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Section 6 */}
          <div className="row mb-5">
            <div className="col-12 col-md-8 offset-md-2">
              <p style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '16px' }}>
                Collect member dues: eDirectory automates your billing efforts by charging member dues, activating and suspending accounts, without you having to lift a finger.
              </p>
              <img
                src="../images/membership6.webp" // Replace with actual image path
                alt="VIP Membership"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
