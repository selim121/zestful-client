import locate from '../../../images/logo/location.svg';
import phone from '../../../images/logo/phone.svg';
import mail from '../../../images/logo/mail.svg';
import facebook from '../../../images/logo/facebook.svg';
import twitter from '../../../images/logo/twitter.svg';
import youtube from '../../../images/logo/youtube.svg';
import linkedin from '../../../images/logo/linkedin.svg';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-bg text-light pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="color-primary">Company</h4>
                            <p className="mb-1">About</p>
                            <p className="mb-1">Contact Us</p>
                            <p className="mb-1">Reservation</p>
                            <p className="mb-1">Privacy Policy</p>
                            <p>Terms & Condition</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="color-primary">Contact</h4>
                            <p className="mb-2"><img className='icon me-2' src={locate} alt="" /> 10/7 Shekhertek, Adabor, Dhaka - 1207</p>
                            <p className="mb-2"><img className='icon me-2' src={phone} alt="" />+880 1639 523 282</p>
                            <p className="mb-2"><img className='icon me-2' src={mail} alt="" />zestful@info.com</p>
                            <div className="d-flex pt-2">
                                <img className='icon border rounded p-1 me-2' src={facebook} alt="" />
                                <img className='icon border rounded p-1 me-2' src={twitter} alt="" />
                                <img className='icon border rounded p-1 me-2' src={youtube} alt="" />
                                <img className='icon border rounded p-1 me-2' src={linkedin} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="color-primary">Opening</h4>
                            <h5 className="text-light fw-normal">Sunday - Thursday</h5>
                            <p>9:00 AM - 10:00 PM</p>
                            <h5 className="text-light fw-normal">Saturday</h5>
                            <p>11:00 AM - 11:00 PM</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="color-primary">Newsletter</h4>
                            <p>You can subscribe our newsletter for update.</p>
                            <div className="position-relative mx-auto">
                                <input type="text" name="email" placeholder='Your email' id="" className="form-control border-primary-w-100 py-3 ps-4 pe5" />
                                <button className="newsletter-btn py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="container">
                        <div className="text-center">
                            &copy; Zestful, All Right Reserved
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;