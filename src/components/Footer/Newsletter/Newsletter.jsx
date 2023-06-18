import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss"

const Newsletter = () => {
    return (
    <>
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text" >Newsletter</span>
                <span className="big-text"> Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button className="btn-sub">Subscribe</button>
                </div>
                <div className="text">will be used in accoudance with our privacy policy </div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={18} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={18} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={18} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={18} />
                    </div>
                     
                </div>
            </div>
        </div>;
    </>
    )
};
export default Newsletter;