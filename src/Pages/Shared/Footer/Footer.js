import React from 'react';
import footerbg from '../../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${footerbg})`, backgroundSize: 'cover' }} className=" p-10 text-neutral ">
            <div className="footer">
                <div>
                    <span className="footer-title font-bold">SERVICES</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>

                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>

            </div>
            <div className='my-10 text-center'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;