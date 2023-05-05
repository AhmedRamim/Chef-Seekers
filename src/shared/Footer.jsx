import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#01051e]'>
            <footer className="footer p-10 w-[80%] mx-auto  text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">All Chefs</a>
                    <a className="link link-hover">Recipes</a>
                    
                </div>
                <div>
                    <span className="footer-title">Chefs Seekers</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Available Chefs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Enter your email </span>
                        </label>
                        <div className="md:relative ">
                            <input type="text" placeholder="username@site.com" className="input input-bordered  md:pr-16" />
                            <br />
                            <button className="btn btn-primary md:absolute md:top-0 md:right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;