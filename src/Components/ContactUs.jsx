import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contact_us' id='contact'>
        <div className="heading">
        <h3>Contact Us</h3>
        <span>We Are Nice</span>
        </div>

    <div className="form__container">
        <form action="">
            <div className="form__names">
            <input type="text" placeholder='First Name*'/>
            <input type="text" placeholder='Last Name*'/>
            </div>
            <div className="form__names">
            <input type="text" placeholder='Job title*'/>
            <input type="email" placeholder='Your Email*'/>
            </div>
            <div className="form__names">
            <input type="text" placeholder='Company name*'/>
            <input type="text" placeholder='Country/Region'/>
            </div>
            <div className="form__names web">
                <input type="text" placeholder='Website URL*' />
            </div>
            <div className="form__names desc">
                <input type="text" placeholder='What best describes your Industry*' />
            </div>
            <div className="form__names emp">
                <input type="text" placeholder='Number of Employees*' />
            </div>
       
            <div className="btn__submit__container">
                <button type='submit'>Send Message</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default ContactUs