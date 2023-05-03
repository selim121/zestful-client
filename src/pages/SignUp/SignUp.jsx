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

        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)){
            setError(`Minimum six characters, at least one letter and one number`);
            return;
        }

        registerUser(name, email, password)
            .then(result => {
                setError('');
                setSuccess('User has been created successfully');
                navigate('/', { replace: true });
            })
            .catch(error => {
                setError('Something wrong, try again!');

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
                        <form className='w-50 mx-auto'>

                            <label className="form-label">Profile name</label>
                            <input onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control mb-3" placeholder='Your name' required />


                            <label className="form-label">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-control mb-3" placeholder='Your email address' aria-describedby="emailHelp" required />


                            <label className="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="form-control mb-3" placeholder='Your password' required />


                            <label className="form-label">Profile photo</label>
                            <input name="photo" type="file" className="form-control mb-3" placeholder='' required />
        
                            <button onClick={handleSubmit} className="btn btn-warning text-white fw-bold w-100">Sign Up & Sign In</button>
                        </form>
                        <div className="mt-2 text-center">
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