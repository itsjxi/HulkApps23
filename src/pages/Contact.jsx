import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <section className='page-header'>
        <h3>Contact Us</h3>
        <p>Get in touch with our team</p>
      </section>

      <section className='contact-content'>
        <div className='contact-info'>
          <h3>Get In Touch</h3>
          <div className='contact-item'>
            <i className='fas fa-envelope'></i>
            <span>support@hulkapps.com</span>
          </div>
          <div className='contact-item'>
            <i className='fas fa-phone'></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className='contact-item'>
            <i className='fas fa-map-marker-alt'></i>
            <span>123 Business St, City, State 12345</span>
          </div>
        </div>

        <div className='contact-form'>
          <h3>Send Message</h3>
          <form>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
            <textarea placeholder='Your Message' rows='5' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;