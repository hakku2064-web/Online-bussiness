import React from 'react'
import "../css/contact.css"
function Contact() {
  return (
    <div className="page-contact-page">
      <div className='contact-top'>
        <p>GET IN TOUCH</p>
        <h2>Contact Us</h2>
      </div>

      <div className='contact-container'>

        <div className='contact-info-section'>
          <h3>Visit Our Atelier</h3>
          <p>We'd love to welcome you to our showroom for a personal consultant. Schedule and appoinment or simply walk in </p>

          <div className='contact-cards'>
            <div className='info-card'>
              <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2" />
                <path fill="currentColor" d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82c0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6c.02 4.44-4.39 8.43-6 9.74c-1.61-1.31-6.02-5.29-6-9.74c0-3.31 2.69-6 6-6" />
              </svg>
              </div>
              <div className='info-content'> <h4>ADDRESS</h4>
                <p>Thamel, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="info-card">
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" />
                </svg>


              </div>

              <div className='info-content'>
                <h4>PHONE</h4>
                <p>+977 9800000000</p>
              </div>
            </div>

            <div className="info-card">
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
                </svg>


              </div>
              <div className='info-content'>
                <h4>EMAIL</h4>
                <p>shopnepal@gmail.com</p>
              </div>
            </div>


            <div className="info-card">
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M18 4H2V2h16zm-.5 9H16v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-3.53 0-6.43-2.61-6.92-6H2v-6H1v-2l1-5h16l1 5v.29c2.89.87 5 3.54 5 6.71M3.04 10h13.92l-.6-3H3.64zM4 16h6v-4H4zm18 1c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5" />
                </svg>

              </div>
              <div className='info-content'>
                <h4>HOURS</h4>
                <p>Mon - Sat: 10 AM - 7 PM | Sun: 12 PM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-form-senction'>
          <h3>Send us a Message</h3>
          <p>Thank you for contacting us! We will repond shortly.</p>

          <div className='form-group'>
            <label htmlFor="name">NAME</label>
            <input
              type='text'
              required
              placeholder='Your full name'>
            </input>
          </div>

          <div className='form-group'>
            <label htmlFor="email">EMAIL</label>
            <input
              type='email'
              required
              placeholder='example@gmail.com'>
            </input>
          </div>

          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text" placeholder="Inquiry subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE </label>
            <textarea
              rows="7"
              required
              placeholder="How can we help you?"

            ></textarea>
          </div>
          <button className='send-msg' type='submit'> SEND MESSAGE </button>


        </div>

      </div>


    </div>
  )
}

export default Contact
