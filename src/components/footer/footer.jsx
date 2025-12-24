import React from "react";
import './footer.css';
import user from '../../assets/user.png';
import mylogo from '../../assets/mylogo.gif';
const Footer=()=>{

    return(
        <div className="footer" id="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={mylogo} alt="" height={80} width={80}></img>
                    <p>
                        <b>Salman Hashmi</b><br/>
                        Full Stack Web Developer<br/>
                        <span><u>Turning ideas into digital reality</u></span><br/>
                        <span style={{color:"#a81b45ff"}}>
                            React , Node.js , MongoDB , JavaScript.<br/> 
                            Code. Create. Innovate.
                        </span>
                       
                        
                    </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt="" height={50} width={50}></img>
                        <input type="email" placeholder="Enter your email"></input>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&copy; 2025 <b>Salman Hashmi. </b><span>All rights reserved</span></p>

                </div>
                <div className="footer-bottom-right">
                    <p>Terms of services</p>
                    <p>Privacy policy</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;