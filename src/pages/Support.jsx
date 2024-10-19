import React from 'react'
function Support() {
  return (
    
    <div className="support-page">
      <h1>Support</h1>
      <form className="support-form" action="/submit-support" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <h3>How do I reset my password?</h3>
        <p>You can reset your password by clicking on the 'Forgot Password' link on the login page.</p>

        <h3>How do I change my email address?</h3>
        <p>To change your email address, go to the account settings page and update your email information.</p>

        <h3>How do I contact support?</h3>
        <p>You can contact our support team by filling out the form above or emailing us at support@newsapp.com.</p>
      </div>
    </div>
    
  )
}

export default Support
