export const instructorEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #000000;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #6B2B7D, #4B1B6E);
          padding: 40px 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .header img {
          width: 200px;
        }
        .content {
          padding: 0 20px;
          line-height: 1.6;
        }
        .signature {
          margin-top: 40px;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }
        .name {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .position {
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://res.cloudinary.com/dzppawgat/image/upload/emailbanner_ocfqcl.png" alt="WorkPeace Logo">
        </div>
        <div class="content">
          <p>Dear ${data.first_name},</p>
          
          <p>We extend our sincere gratitude for your application for the instructor position at WorkPeace Academy.</p>
          
          <p>Your interest in contributing to our team has not gone unnoticed, and we are enthusiastic about the prospect of having someone of your caliber join us.</p>
          
          <p>Our hiring team will conduct a thorough review of your application. Should we find that there is a strong alignment between your skills and the requirements of the position.</p>
          
          <p>A member of our team will be in touch soon to discuss the next steps in the hiring process.</p>
          
          <p>Thank you once again for considering a career with WorkPeace Academy.</p>
          
          <p>Your interest is greatly appreciated, and we look forward to the opportunity to connect with you soon.</p>
          
          <p>Best Regards,</p>
          
          <div class="signature">
            <p class="name">Paul George</p>
            <p class="position">Customer Services [Workpeace Academy Team]</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const contactEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #000000;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #6B2B7D, #4B1B6E);
          padding: 40px 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .header img {
          width: 200px;
        }
        .content {
          padding: 0 20px;
          line-height: 1.6;
        }
        .message-box {
          background: #f9f9f9;
          border-left: 4px solid #6B2B7D;
          padding: 15px;
          margin: 20px 0;
        }
        .contact-details {
          margin: 20px 0;
          padding: 15px;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://res.cloudinary.com/dzppawgat/image/upload/emailbanner_ocfqcl.png" alt="WorkPeace Logo">
        </div>
        <div class="content">
          <h2>New Contact Form Submission</h2>
          
          <div class="contact-details">            <p><strong>Name:</strong> ${data.full_name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mobile Number:</strong> ${data.phone}</p>
          </div>

          <div class="message-box">
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const hiringEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #000000;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #6B2B7D, #4B1B6E);
          padding: 40px 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .header img {
          width: 200px;
        }
        .content {
          padding: 0 20px;
          line-height: 1.6;
        }
        .contact-details {
          margin: 20px 0;
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 4px;
        }
        .next-steps {
          background: #f9f9f9;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://res.cloudinary.com/dzppawgat/image/upload/emailbanner_ocfqcl.png" alt="WorkPeace Logo">
        </div>
        <div class="content">
          <h2>New Hiring Consultation Request</h2>
          
          <p>A new consultation request has been received from:</p>
          
          <div class="contact-details">
            <p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p>
            <p><strong>Work Email:</strong> ${data.email}</p>
            <p><strong>Mobile Number:</strong> ${data.mobile}</p>
          </div>

          <div class="next-steps">
            <p><strong>Next Steps:</strong></p>
            <p>Please schedule a consultation call with the client within the next 24 hours to discuss their hiring needs and business growth challenges.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
