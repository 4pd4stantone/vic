import "./Contact.css"

function Contact() {


    return (
        <section id="contact-section">
            <h1 id="contact-title">Contact Victor Stanton</h1>
            <div className="contact-info-section">
                <div className="input-names">
                    <input type="text" placeholder="First Name" required className="input-name"/>
                    <input type="text" placeholder="Last Name" required className="input-name"/>
                </div>
                <div className="input-infos">
                    <input type="email" placeholder="Email" required className="input-info"/>
                    <input type="phone" placeholder="Phone" className="input-info"/>
                </div>
                
                <textarea name="" id="text-area" placeholder="Your message here..." rows="10" cols="40"></textarea>
            </div>
        </section>
    )


}

export default Contact;