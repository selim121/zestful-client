/* eslint-disable no-unused-vars */
import React from 'react';
import bookingImg from '../../images/booking.jpg';

const Booking = () => {
    return (
        <>
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

export default Booking;