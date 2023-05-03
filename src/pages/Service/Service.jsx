import masterChef from '../../images/logo/master-chef.svg';
import food from '../../images/logo/logo.svg';
import cart from '../../images/logo/cart.svg';
import callUs from '../../images/logo/call-us.svg';

const Service = () => {
    return (
        <>
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
        </>
    );
};

export default Service;