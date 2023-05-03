/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import signUp from '../../images/signup.svg';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import 'firebase/compat/storage';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";

// import {getFirestore} from 'firebase/firestore';
// import { useState } from "react";

const SignUp = () => {

    const {registerUser} = useContext(AuthContext);

    // const [photo, setPhoto] = useState(null);

    const navigate = useNavigate();

    

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');

        // if(!/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$/.test(password)){
        //     setError(`Must have at least one numeric character
        //     Must have at least one lowercase character
        //     Must have at least one uppercase character
        //     Must have at least one special symbol among @#$%
        //     Password length should be between 8 and 20`);
        //     return;
        // }

        registerUser(name, email, password)
            .then(result => {
                navigate('/sign-in', { replace: true });
                console.log(result.user);
                setError('');
                setSuccess('User has been created successfully');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12 h-50">
                    <img className='img-fluid h-75' src={signUp} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 my-auto">
                    <div className="">
                        <div className="text-center">
                            <p className="fs-1 fw-bold m-0 color-primary">Zestful</p>
                            <p>Sign Up</p>
                        </div>
                        <form className='w-50 mx-auto' onSubmit={handleSubmit}>

                            <label className="form-label">Profile name</label>
                            <input onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control mb-3" placeholder='Your name' required />


                            <label className="form-label">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-control mb-3" placeholder='Your email address' aria-describedby="emailHelp" required />


                            <label className="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="form-control mb-3" placeholder='Your password' required />


                            <label className="form-label">Profile photo</label>
                            <input name="photo" type="file" className="form-control mb-3" placeholder='' required />
                            {/* {photo && <img src={photo} alt="selected photo" />} */}

                            <input type="submit" className="btn btn-warning text-white fw-bold w-100" value="Sign Up" />
                        </form>
                        <div className="mt-2 text-center">
                            <p>Already have an account? <Link className='color-primary sign-up-link' to='/sign-in'>Sign In</Link></p>
                            <p className="text-danger my-2">{error}</p>
                            <p className="text-success my-2">{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;