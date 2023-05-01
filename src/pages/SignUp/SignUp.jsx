import { Link } from "react-router-dom";
import signUp from '../../images/signup.svg';
import google from '../../images/logo/google.svg';
import github from '../../images/logo/github.svg';

const SignUp = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12 h-50">
                    <img className='img-fluid h-75' src={signUp} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center">
                    <form className='w-50 mx-auto'>
                        <div className="text-center">
                            <p className="fs-1 fw-bold m-0 color-primary">Zestful</p>
                            <p>Sign Up</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Profile name</label>
                            <input type="text" className="form-control" placeholder='Your name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Your email address' aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='Your password' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Profile photo</label>
                            <input type="file" className="form-control" placeholder='' />
                        </div>

                        <button type="submit" className="btn btn-warning text-white fw-bold w-100">Sign Up</button>

                        <div className="mt-2 text-end">
                            <p>Already have an account? <Link className='color-primary sign-up-link' to='/sign-in'>Sign In</Link></p>
                        </div>
                        <div className="container my-3">
                            <div className="row">
                                <div className="col-5">
                                    <hr className="my-2" />
                                </div>
                                <div className="col-2 text-center">
                                    <span className="px-2">or</span>
                                </div>
                                <div className="col-5">
                                    <hr className="my-2" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="sign-in-btn w-100 mb-3 color-primary"><img src={google} alt="" className="icon me-2" /> Sign up with Google</button>
                        <button type="submit" className="sign-in-btn w-100 color-primary"><img src={github} alt="" className="icon me-2" /> Sign up with GitHub</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;