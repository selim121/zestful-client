import { Link } from "react-router-dom";
import signUp from '../../images/signup.svg';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import 'firebase/compat/storage';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// import {getFirestore} from 'firebase/firestore';
// import { useState } from "react";

const SignUp = () => {
    // const [photo, setPhoto] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-in', { replace: true });
    }

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth(app);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const photo = event.target.photo.files[0];
        // console.log(event.target.photo);
        // if(photo) {
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //         setPhoto(reader.result);
        //     };
        //     reader.readAsDataURL(photo);
        // }

        // const storage = firebase.storage();
        // const storageRef = storage.ref(`users/${email}/${photo.name}`);

        // storageRef.put(photo)
        // .then(() => {
        //     storageRef.getDownloadURL()
        //     .then(url => {
        //         createUserWithEmailAndPassword(auth, email, password)
        //         .then(result => {
        //             const loggedUser = result.user;
        //             const db = getFirestore(app);
        //             db.collection('users').doc(loggedUser.uid).set({
        //                 name: name,
        //                 photoURL: url
        //             })
        //             .then(() => {
        //                 console.log('User added successfully');
        //             })
        //             .catch(error => {
        //                 console.log(error);
        //             })
        //         })
        //     })
        // })


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                handleSignUp();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setSuccess('');
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
                            <input name="name" type="text" className="form-control mb-3" placeholder='Your name' required />


                            <label className="form-label">Email address</label>
                            <input name="email" type="email" className="form-control mb-3" placeholder='Your email address' aria-describedby="emailHelp" required />


                            <label className="form-label">Password</label>
                            <input name="password" type="password" className="form-control mb-3" placeholder='Your password' required />


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