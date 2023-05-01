import './Home.css';
import hero from '../../images/header/hero.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="container-xxl py-2 bg-dark hero-header mb-5">
                <div className="container my-5 py-2">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link to="/sign-in"><button className='signin-btn'>Sign In</button></Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;