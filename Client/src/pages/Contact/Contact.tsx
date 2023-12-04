import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <style>
        {`
          body {
            padding-top: 60px;
          }
          .contact-msg {
            color: black;
            height: 40px;
            font-size: 0.85rem;
            width: 90%;
            padding-left: 450px;
            padding-top: 25px;
          }
          .contact-msg u {
            color: blue;
          }
        `}
      </style>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea className="form-control" id="message" rows={4} placeholder="Enter your message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>

              
            </form>
          </div>
        </div>
      </div>

               <div className="contact-msg">
                 To reach our customer service team please email us at:
                 <u>
                  <a href="mailto:grocary12@gmail.com">grocary12@gmail.com</a>
                 </u>
              </div>

    </>
  );
};

export default Contact;
