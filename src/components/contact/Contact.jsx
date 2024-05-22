import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import right_arrow from '../../assets/rightarrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

      const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending......");
            const formData = new FormData(event.target);

        formData.append("access_key", "262a58c3-237e-408f-9687-9615de96a9e8");
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
    
        if (res.success) {
          setResult("Email sent successfully!", res);
          event.target.reset();
        } else {
          console.log("Error", res);
          setResult(res.message);
        }
      };

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
                <form onSubmit={onSubmit}>
                    <label>Your Name: </label>
                    <input type="text" name='name' placeholder='Enter your name' required /><br/>
                    <label>Phone Number: </label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required /><br/>
                    <label>Write your message here: </label>
                    <textarea name="massage" rows="6" placeholder='Enter your message' required></textarea><br/>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={right_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact;
