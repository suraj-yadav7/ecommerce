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
                    <div className="text">menu item1</div>
                    <div className="text">menu item1</div>
                    <div className="text">menu item1</div>
                    <div className="text">menu item1</div>
                    <div className="text">menu item1</div>
                </div>
                <div className="col">
                    <div className="title" > pages</div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;