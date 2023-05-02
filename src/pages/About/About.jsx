import food from '../../images/logo/logo.svg';
import about1 from '../../images/about/about-1.jpg';
import about2 from '../../images/about/about-2.jpg';
import about3 from '../../images/about/about-3.jpg';
import about4 from '../../images/about/about-4.jpg';

const About = () => {
    return (
        <>
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
                            <button className="signin-btn text-white py-3 px-5 mt-2" >Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;