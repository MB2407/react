import React from 'react';
import './contact.css';
import FooterLink from '../footerlink/FooterLink';
import Head from '../head/Head';

const Contact = () => {
    return(
        <div className='section-container'>
        <Head
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />
            <div className="contact-form-container">
                <form   action="https://formspree.io/f/mayabadk"
  method="POST">
                    <input
                        type="email"
                        placeholder="Your Email ID"
                        name="email"
                        className="input-box email-input"/>
                    <textarea
                        type="text"
                        placeholder="Your message"
                        name="email"
                        className="input-box email-input">

                        </textarea>
                    <button type="submit" className="contact-btn">
                        Send your message
                    </button>
                </form>
            </div>
            <FooterLink
                phrase='Read more '
                toAdress='/Intro'
                link='about me.'
            />

        </div>
    );
};
export default Contact;