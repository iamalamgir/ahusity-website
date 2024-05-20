import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                    Feel free to reach out through contact form or find
                    our contact information below. Your feedback, questions,
                    and suggestions are important to us we strive to provide
                    exceptional service to our university community.
                </p>
                <ul>
                    <li> <img src={mail_icon} alt="" />mdalamgir.pro@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />+880 1571-773745</li>
                    <li> <img src={location_icon} alt="" />Level-7 Asha Center House-44, Road-2/A<br/> Zigatola, Dhanmondi, Dhaka-1209</li>
                </ul>
            </div>
            <div className="contact-col">
                
            </div>
        </div>
    )
}

export default Contact;
