// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Sample data for cards
// const cardData = [
//   {
//     id: 1,
//     image: 'path/to/image1.jpg',
//     heading: 'Card Title 1',
//     description: 'This is a description for card 1.',
//     cost: 44,
//   },
//   {
//     id: 2,
//     image: 'path/to/image2.jpg',
//     heading: 'Card Title 2',
//     description: 'This is a description for card 2.',
//     cost: 49,
//   },
//   {
//     id: 3,
//     image: 'path/to/image3.jpg',
//     heading: 'Card Title 3',
//     description: 'This is a description for card 3.',
//     cost: 55,
//   },
//   {
//     id: 4,
//     image: 'path/to/image4.jpg',
//     heading: 'Card Title 4',
//     description: 'This is a description for card 4.',
//     cost: 60,
//   },
//   {
//     id: 5,
//     image: 'path/to/image5.jpg',
//     heading: 'Card Title 5',
//     description: 'This is a description for card 5.',
//     cost: 70,
//   },
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
//               <h1>Complete in Features</h1>
//               <p>
//                 With the most complete set of out-of-the-box features for directory-based websites. eDirectory is a one-stop-shop for entrepreneurs looking to set up their online communities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Row */}
//       <div className="container text-center my-5">
//         {/* Buttons */}
//         <div className="d-flex justify-content-center mb-4">
//           <button className="btn btn-primary me-3" style={{ width: '150px' }}>
//             Button 1
//           </button>
//           <button className="btn btn-outline-light" style={{ width: '150px' }}>
//             Button 2
//           </button>
//         </div>

//         {/* Sections with Cards */}
//         {Array.from({ length: 5 }, (_, index) => (
//           <div key={index} className="row mb-5 justify-content-center">
//             <div className="col-md-5 mb-4">
//               <div className="card">
//                 <img src={cardData[index]?.image} alt={cardData[index]?.heading} className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">{cardData[index]?.heading}</h5>
//                   <p className="card-text">{cardData[index]?.description}</p>
//                   <span
//                     className="position-absolute top-0 end-0 bg-success text-white p-2"
//                     style={{ fontSize: '16px', borderRadius: '0 0 0 5px' }}
//                   >
//                     ${cardData[index]?.cost}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-5 mb-4">
//               <div className="card">
//                 <img src={cardData[index + 1]?.image} alt={cardData[index + 1]?.heading} className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">{cardData[index + 1]?.heading}</h5>
//                   <p className="card-text">{cardData[index + 1]?.description}</p>
//                   <span
//                     className="position-absolute top-0 end-0 bg-success text-white p-2"
//                     style={{ fontSize: '16px', borderRadius: '0 0 0 5px' }}
//                   >
//                     ${cardData[index + 1]?.cost}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* First Row at the Bottom */}
//       <div
//         style={{
//           background: 'url(../images/contact-img.webp) center no-repeat #164378',
//           backgroundSize: 'cover',
//           position: 'relative',
//           minHeight: '70vh',
//           width: '100%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div className="container text-center text-white">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-12">
//               <h1>Complete in Features</h1>
//               <p>
//                 With the most complete set of out-of-the-box features for directory-based websites. eDirectory is a one-stop-shop for entrepreneurs looking to set up their online communities.
//               </p>
//             </div>
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
  { id: 1, image: 'path/to/image1.jpg', heading: 'Card Title 1', description: 'This is a description for card 1.', cost: 44 },
  { id: 2, image: 'path/to/image2.jpg', heading: 'Card Title 2', description: 'This is a description for card 2.', cost: 49 },
  { id: 3, image: 'path/to/image3.jpg', heading: 'Card Title 3', description: 'This is a description for card 3.', cost: 55 },
  { id: 4, image: 'path/to/image4.jpg', heading: 'Card Title 4', description: 'This is a description for card 4.', cost: 60 },
  { id: 5, image: 'path/to/image5.jpg', heading: 'Card Title 5', description: 'This is a description for card 5.', cost: 70 },
  { id: 6, image: 'path/to/image6.jpg', heading: 'Card Title 6', description: 'This is a description for card 6.', cost: 80 },
  { id: 7, image: 'path/to/image7.jpg', heading: 'Card Title 7', description: 'This is a description for card 7.', cost: 90 },
  { id: 8, image: 'path/to/image8.jpg', heading: 'Card Title 8', description: 'This is a description for card 8.', cost: 100 },
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
          minHeight: '70vh',
          width: '100%',
          display: 'flex', // Flexbox to center content
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <div className="container text-center text-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <h1>Complete in Features</h1>
              <p>
                With the most complete set of out-of-the-box features for directory-based websites. eDirectory is a one-stop-shop for entrepreneurs looking to set up their online communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="container text-center my-5">
        {/* Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-primary me-3" style={{ width: '150px' }}>
            Button 1
          </button>
          <button className="btn btn-outline-light" style={{ width: '150px' }}>
            Button 2
          </button>
        </div>

        {/* Sections with Cards */}
        <div className="row mb-5 justify-content-center">
          {cardData.map((card, index) => (
            <div key={card.id} className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={card.image} alt={card.heading} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{card.heading}</h5>
                  <p className="card-text">{card.description}</p>
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

      {/* First Row at the Bottom */}
      <div
        style={{
          background: 'url(../images/contact-img.webp) center no-repeat #164378',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '70vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="container text-center text-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <h1>Complete in Features</h1>
              <p>
                With the most complete set of out-of-the-box features for directory-based websites. eDirectory is a one-stop-shop for entrepreneurs looking to set up their online communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
