

// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap'; // Make sure to install react-bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// const FeaturesSection = () => {
//   // Array of data for the 12 cards with image URLs
//   const cardData = [
//     { title: 'Card 1', content: 'Description for card 1', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 2', content: 'Description for card 2', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 3', content: 'Description for card 3', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 4', content: 'Description for card 4', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 5', content: 'Description for card 5', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 6', content: 'Description for card 6', image: 'https://via.placeholder.com/150' },
//   ];

//   // Function to chunk the cardData array into groups of 3 (for carousel items)
//   const chunkCards = (cards, size) => {
//     const result = [];
//     for (let i = 0; i < cards.length; i += size) {
//       result.push(cards.slice(i, i + size));
//     }
//     return result;
//   };

//   const cardChunks = chunkCards(cardData, 3); // Create chunks of 3 cards

//   // State to track the active index of the carousel
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Handle carousel slide change
//   const handleSelect = (selectedIndex) => {
//     setActiveIndex(selectedIndex);
//   };

//   return (
//     <div
//       className="features-section"
//       style={{
//         background: 'url(../images/features-img.webp) center no-repeat #164378',
//         backgroundSize: 'cover',
//         position: 'relative',
//         minHeight: '100vh',
//         width: '100%',
//         padding: '100px 0 50px 0px', // Add padding to the entire section
//       }}
//     >
//       {/* Single Container for all sections */}
//       <div className="container py-5">
        
//         {/* First Row - Centered Paragraph */}
//         <div className="text-center mb-5"> {/* Added margin-bottom */}
//           <p style={{ fontSize: '1.75rem', color: 'white' }}>
//             Launch your online directory with the most complete set of built-in features
//           </p>
//         </div>

//         {/* Second Row - Card Carousel */}
//         <div>
//           <Carousel
//             activeIndex={activeIndex}
//             onSelect={handleSelect}
//             indicators={false}
//             prevLabel=""
//             nextLabel=""
//             controls={false} // We will add custom controls outside the carousel
//             interval={null} // To disable auto sliding of cards
//           >
//             {cardChunks.map((chunk, index) => (
//               <Carousel.Item key={index}>
//                 <div className="row justify-content-center">
//                   {chunk.map((card, cardIndex) => (
//                     <div className="col-12 col-md-4 col-lg-4" key={cardIndex}>
//                       <div className="card">
//                         {/* Card Image */}
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="card-img-top"
//                           style={{
//                             height: '150px',  // Reduced height for images
//                             objectFit: 'cover', // Ensure the image covers the area
//                           }}
//                         />
//                         <div className="card-body d-flex flex-column justify-content-center text-center">
//                           <h5 className="card-title">{card.title}</h5>
//                           <p className="card-text">{card.content}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Carousel.Item>
//             ))}
//           </Carousel>

//           {/* Arrows below the carousel */}
//           <div className="text-center mt-5"> {/* Margin top for spacing */}
//             <button
//               className="btn btn-dark custom-left-arrow"
//               style={{
//                 borderRadius: '50%',
//                width:'50px',
//                 height:'50px',
//                 marginRight: '20px', // Space between arrows
//               }}
//               onClick={() => setActiveIndex(activeIndex - 1 >= 0 ? activeIndex - 1 : cardChunks.length - 1)}
//             >
//               &#8592;
//             </button>
//             <button
//               className="btn btn-dark custom-right-arrow"
//               style={{
//                 borderRadius: '50%',
//                 width:'50px',
//                 height:'50px'
//               }}
//               onClick={() => setActiveIndex((activeIndex + 1) % cardChunks.length)}
//             >
//               &#8594;
//             </button>
//           </div>
//         </div>

//         {/* Third Row - Centered Button */}
//         <div className="text-center py-5">
//           <button className="btn btn-primary" style={{ fontSize: '16px' }}>
//             Click Me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;








import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Make sure to install react-bootstrap
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturesSection = () => {
  // Array of data for the cards with FontAwesome icon class names
  const cardData = [
    { title: 'Fully Featured', content: 'Listings, Classifieds, Deals, Events, Ad Banners, Articles, Blog, and more', icon: 'fas fa-layer-group' },
    { title: 'Membership', content: 'Create gated content and turn advertisers and site visitors into paying customers.', icon: 'far fa-user-circle' },
    { title: 'Package Builder', content: 'Maximize revenue per order by packaging opportunities together and offering as one.', icon: 'fas fa-box' },
    { title: 'Integrated App Builder', content: 'Build beautiful iPhone and Android Apps with no code knowledge', icon: 'fas fa-mobile-alt' },
    { title: 'Template Editor', content: 'Unleash your creativity with another great visual editor for Listings', icon: 'fas fa-paste' },
    { title: 'Source Code Access', content: 'Complete access to the source code for design and features', icon: 'fas fa-laptop-code' },
  ];

  // Function to chunk the cardData array into groups of 3 (for carousel items)
  const chunkCards = (cards, size) => {
    const result = [];
    for (let i = 0; i < cards.length; i += size) {
      result.push(cards.slice(i, i + size));
    }
    return result;
  };

  const cardChunks = chunkCards(cardData, 3); // Create chunks of 3 cards

  // State to track the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle carousel slide change
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div
      className="features-section"
      style={{
        background: 'url(../images/features-img.webp) center no-repeat #164378',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        padding: '100px 0 50px 0px', // Add padding to the entire section
      }}
    >
      {/* Single Container for all sections */}
      <div className="container py-5">
        
        {/* First Row - Centered Paragraph */}
        <div className="text-center mb-5"> {/* Added margin-bottom */}
          <p style={{ fontSize: '1.75rem', color: 'white' }}>
            Launch your online directory with the most complete set of built-in features
          </p>
        </div>

        {/* Second Row - Card Carousel */}
        <div>
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            indicators={false}
            prevLabel=""
            nextLabel=""
            controls={false} // We will add custom controls outside the carousel
            interval={null} // To disable auto sliding of cards
          >
            {cardChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="row justify-content-center g-4">
                  {chunk.map((card, cardIndex) => (
                    <div className="col-12 col-md-4 col-lg-4" key={cardIndex}>
                      <div className="card">
                        {/* Card Icon (FontAwesome) */}
                        <div className="card-icon" style={{ fontSize: '3rem', color: '#164378', textAlign: 'center', marginTop: '20px' }}>
                          <i className={card.icon}></i> {/* Dynamically add the icon class */}
                        </div>
                        <div className="card-body d-flex flex-column justify-content-center text-center">
                          <h5 style={{color:'#4A4A4A', fontSize:'20px', fontWeight:'bold'}}>{card.title}</h5>
                          <p style={{color:'#4A4A4A', marginBottom:'1rem'}}>{card.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Arrows below the carousel */}
          <div className="text-center mt-5"> {/* Margin top for spacing */}
            <button
              className=" custom-left-arrow"
              style={{
                borderRadius: '50%',
                backgroundColor:'#fff',
                width: '50px',
                height: '50px',
                marginRight: '20px',
                fontSize:'20px', // Space between arrows
                fontWeight:'bold',
                border:'none'
              }}
              onClick={() => setActiveIndex(activeIndex - 1 >= 0 ? activeIndex - 1 : cardChunks.length - 1)}
            >
              &#8592;
            </button>
            <button
              className=" custom-right-arrow"
              style={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                 fontSize:'20px', // Space between arrows
                fontWeight:'bold',
                backgroundColor:'#fff',
                border:'none'
              }}
              onClick={() => setActiveIndex((activeIndex + 1) % cardChunks.length)}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Third Row - Centered Button */}
        <div className="text-center py-5">
          <Link to='/featurepage' >
          <button  style={{ fontSize: '16px', padding:'15px 20px', fontWeight:'bold', backgroundColor:'#199adb', border:'none', color:'#fff' }}>
            See All Features
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
