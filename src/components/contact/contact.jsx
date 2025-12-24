import React from "react";
import gmail from '../../assets/gmail.png';
import location from '../../assets/location.png';
import phone_call from '../../assets/phone_call.png';
import './contact.css';
const Contact=()=>{

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "40f7d503-8d94-4ae9-9d56-4666054bc428");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success){
        alert(data.message);
        event.target.reset();
        
    }
    else{
        alert(data.error);
        
    }
  };
    return(
        <div className="contact" id="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I’m currently looking for opportunities to learn and grow.
                        If you have a project, internship, or job opportunity,              
                        I’d love to hear from you.

                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={gmail} alt="" height={50} width={50} ></img>
                            <p>Shraag97@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone_call} alt="" height={50} width={50} style={{backgroundColor:"white"}}></img>
                            <p>788724020</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" height={50} width={50} style={{backgroundColor:"white"}}></img>
                            <p>surat gujrat india ,393292</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name"></input>
                        <label htmlFor="">Enter Your Email</label>
                        <input type="text" placeholder="Enter your email" name="email"></input>
                        <label htmlFor="">Write Your Message</label>
                        <textarea placeholder="Enter your message..." rows={8} name="message"></textarea>
                        <button className="contact-submit" type="submit">Send--></button>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}
export default Contact