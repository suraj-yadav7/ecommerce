import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title" > About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, similique rerum. Quo et praesentium cumque laudantium autem reprehenderit, sit corporis, architecto ea ipsum vitae aspernatur. </div>
                </div>
                <div className="col">
                    <div className="title" > contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">city tower, hitech city, hyderabad, telangan 500023</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">phone : +91909334543</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">email: surajyadav@gmail.com</div>
                    </div>

                </div>
                <div className="col">
                    <div className="title" > categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">smart watches</div>
                    <div className="text">Bluethooth speaker</div>
                    <div className="text">Wireless speaker</div>
                    <div className="text">Home theater</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title" > pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms and conditions</div>
                    <div className="text">Contact us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        SKYSTORE 2023 CREATED AND MAINTAINED BY SKY, PREMIUM E-COMMERCE SOLUTIONS. 
                    </div>
                    <img src={Payment} alt="payment-options"/> 
                </div>
            </div>
        </footer>
    )
};
export default Footer;