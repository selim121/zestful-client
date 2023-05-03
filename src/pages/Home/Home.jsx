import './Home.css';
import hero from '../../images/header/hero.png';
import masterChef from '../../images/logo/master-chef.svg';
import food from '../../images/logo/logo.svg';
import cart from '../../images/logo/cart.svg';
import callUs from '../../images/logo/call-us.svg';
import about1 from '../../images/about/about-1.jpg';
import about2 from '../../images/about/about-2.jpg';
import about3 from '../../images/about/about-3.jpg';
import about4 from '../../images/about/about-4.jpg';
import { Link } from 'react-router-dom';
import Chef from '../Chef/Chef';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import bookingImg from '../../images/booking.jpg';
import { ColorRing } from 'react-loader-spinner';

const Home = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`https://zestful-server.vercel.app/allData/`);
            const data = await res.json();
            setChefs(data);
            setLoading(false);
        }
        fetchData();
    }, [])


    return (
        <>
            <div className="container-xxl py-2 bg-dark hero-header">
                <div className="container my-5 py-2">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            {
                                user?.email ? '' : <Link to="/sign-in"><button className='signin-btn'>Sign In</button></Link>
                            }
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className='container-xxl bg-white py-5'>
                <p className='fs-1 fw-bold text-center mb-5'>Our <span className="color-primary">Services</span></p>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <img src={masterChef} alt="" className="service-icon mb-4" />
                                    <h5>Master Chefs</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <img src={food} alt="" className="service-icon mb-4" />
                                    <h5>Quality Food</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <img src={cart} alt="" className="service-icon mb-4" />
                                    <h5>Online Order</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <img src={callUs} alt="" className="service-icon mb-4" />
                                    <h5>24/7 Service</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-xxl bg-white py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100" data-wow-delay="0.1s" src={about1} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 img-margin" data-wow-delay="0.3s" src={about2} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75" data-wow-delay="0.5s" src={about3} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100" data-wow-delay="0.7s" src={about4} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="color-primary fw-semibold">About Us</h5>
                            <h1 className="mb-4">Welcome to <img src={food} alt="" className="service-icon" /> Zestful</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                                        <h1 className="flex-shrink-0 display-5 color-primary mb-0" data-toggle="counter-up">15</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Years of</p>
                                            <h6 className="text-uppercase mb-0">Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                                        <h1 className="flex-shrink-0 display-5 color-primary mb-0" data-toggle="counter-up">50</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Popular</p>
                                            <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/booking'}><button className="signin-btn text-white py-3 px-5 mt-2" >Book a Table </button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chef section  */}

            <section className='container-xxl py-5 bg-white'>
                <p className='fs-1 fw-bold text-center mb-5'>Our <span className="color-primary">Master</span> Chefs</p>
                <div className="row g-4">
                    {
                        loading ? <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        /> : chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </div>
            </section>

            {/* Booking  */}

            <div className="container-xxl py-5 bg-white px-0">
                <p className='fs-1 fw-bold text-center mb-5'><span className="color-primary">Book</span> Now</p>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={bookingImg} className='img-fluid' />
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5">
                            <h5 className="text-start color-primary fw-normal">Reservation</h5>
                            <h1 className="text-white mb-4">Book A Table Online</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                            <label >Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                            <label >Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                            <label >Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select">
                                                <option value="1">People 1</option>
                                                <option value="2">People 2</option>
                                                <option value="3">People 3</option>
                                            </select>
                                            <label >No Of People</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Special Request"></textarea>
                                            <label>Special Request</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-warning text-white fw-bold w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;