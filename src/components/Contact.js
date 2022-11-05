
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p className="dsp-text">Hi there, contact me to ask me about anything you have in mind.</p>
      
      {/* Contact Form */}
      <form>
        <div className="name-inputs">
          <div>
            <label for="first_name" >First name</label>
            <input id="first_name" type="text" placeholder="Enter your first name" required />
          </div>
          <div>
            <label for="last_name" >Last name</label>
            <input id="last_name" type="text" placeholder="Enter your last name" required />
          </div>
        </div>

        <label for="email">Email</label>
        <input id="email" type="email" placeholder="yourname@email.com" required />
        
        <label for="message">Message</label>
        <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required />

        <div className="consent-msg">
          <input id="check" type="checkbox" />
          <label for="check">You agree to providing your data to David who may contact you.</label>
        </div>

        <button id="btn__submit" type="submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact