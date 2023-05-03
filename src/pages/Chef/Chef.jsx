import './Chef.css'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Chef = ({ chef }) => {
    const showToastSuccessMessage = () => {
        toast.success('Add to favorite successfully !', {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const btnHandle = event => {
        event.currentTarget.disabled = true;
        showToastSuccessMessage();
        console.log('button clicked');
    };

    console.log(chef);
    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                        <img className="img-fluid" src={chef.chef_picture} alt="" />
                    </div>
                    <h4 className="mb-0">{chef.chef_name}</h4>
                    <div className="d-flex justify-content-around mt-2">
                        <small className="fw-semibold">Experience: <span className="color-primary">{chef.years_of_experience}</span> <span className="fw-light">years</span></small>
                        <small className="fw-semibold">Likes: <span className="color-primary">{chef.likes}</span></small>
                    </div>
                    <p className="fw-semibold mt-2">Number of Recipes: <span className="color-primary">{chef.num_of_recipes}</span></p>
                    <div className="d-flex justify-content-center mt-3">
                        <Link className="btn btn-square btn-warning card-btn mx-1 text-white">View Recipes</Link>
                        <button onClick={btnHandle} className="btn btn-square btn-warning card-btn mx-1 text-white" >Add to Favorite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chef;
