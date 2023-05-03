
import { Link } from 'react-router-dom';
import signIn from '../../images/signin.svg';
import google from '../../images/logo/google.svg';
import github from '../../images/logo/github.svg';
import './SignIn.css';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const SignIn = () => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12 my-auto">
                    <div className="">
                        <form className='w-50 mx-auto'>
                            <div className="text-center">
                                <p className="fs-1 fw-bold m-0 color-primary">Zestful</p>
                                <p>Sign In</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder='Your email address' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder='Your password' />
                            </div>
                            <button type="submit" className="btn btn-warning text-white fw-bold w-100">Sign In</button>
                            <div className="mt-2 text-end">
                                <p>Don`t have an account? <Link className='color-primary sign-up-link' to='/sign-up'>Sign Up</Link></p>
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
                        </form>
                        <div className="text-center">
                            <div className="my-5">
                                <Link onClick={handleGoogleSignIn} className="sign-in-btn color-primary"><img src={google} className="icon me-2" /> Sign in with Google</Link>
                            </div>
                            <div className="">
                                <Link onClick={handleGithubSignIn} className="sign-in-btn color-primary"><img src={github} alt="" className="icon me-2" /> Sign in with GitHub</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 h-50">
                    <img className='img-fluid h-75' src={signIn} alt="" />
                </div>
            </div>
        </>
    );
};

export default SignIn;