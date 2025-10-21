import React from 'react';

const About = () => {
  return (
    <div className="page">
      <section className='page-header'>
        <h3>About HulkApps</h3>
        <p>Learn more about our company and mission</p>
      </section>

      <section className='about-content'>
        <div className='about-section'>
          <h3>Our Story</h3>
          <p>HulkApps is a leading e-commerce platform dedicated to providing high-quality products and exceptional customer service. We believe in making online shopping simple, secure, and enjoyable.</p>
        </div>

        <div className='about-section'>
          <h3>Our Mission</h3>
          <p>To deliver premium products with outstanding customer experience, leveraging modern technology to create seamless shopping experiences.</p>
        </div>

        <div className='about-section'>
          <h3>Why Choose Us</h3>
          <ul>
            <li>Premium quality products</li>
            <li>Fast and secure delivery</li>
            <li>24/7 customer support</li>
            <li>Easy returns and exchanges</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;