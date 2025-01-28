

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

const Testimonial = () => {
  const [idx, setIdx] = useState(0);

  const prevTestimonial = () => {
    setIdx((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const nextTestimonial = () => {
    setIdx((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const { name, position, photo, text } = testimonials[idx];

  return (
    <div className="testimonial-section" style={{ width: '100%', background: '#E8ECF1', padding:'10px' }}>
      <div className="container">
        {/* Heading - #1 Trusted Online Directory Platform */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12">
            <h2 style={{ fontSize: '2rem', color: '#333', fontWeight: '700', letterSpacing: '1px' }}>
              #1 Trusted Online Directory Platform
            </h2>
          </div>
        </div>

        {/* Testimonial container */}
        <div
          className="testimonial-container d-flex flex-column align-items-center justify-content-center gap-4 text-dark rounded-3 p-4 my-5 position-relative"
          style={{ maxWidth: '900px', margin: '0 auto' }} // Limit the width of the testimonial container for better responsiveness
        >
          {/* Navigation buttons */}
          <div className="position-absolute top-50 start-0 translate-middle-y" style={{ left: '25px' }}>
            <button className="btn btn-light border" onClick={prevTestimonial}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y" style={{ right: '25px' }}>
            <button className="btn btn-light border" onClick={nextTestimonial}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Stars */}
          <div className="stars d-flex justify-content-center gap-1">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          {/* Testimonial Text */}
          <p
            className="testimonial text-center fw-bold lh-lg"
            style={{ fontWeight: 900, fontSize: '1rem' }}
          >
            {text}
          </p>

          {/* User Info */}
          <div className="user d-flex flex-column align-items-center gap-2">
            <img
              src={photo}
              alt="user"
              className="user-image rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div className="user-details text-center">
              <h4 className="username mb-0" style={{ fontSize: '14px' }}>
                {name}
              </h4>
              <p className="role mb-0" style={{ fontSize: '12px' }}>
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

