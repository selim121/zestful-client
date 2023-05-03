/* eslint-disable react/prop-types */
import './Chef.css'
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {

    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                        <LazyLoad height={162}>

                            <img className="img-fluid" src={chef.chef_picture} alt="" />
                        </LazyLoad>
                    </div>
                    <h4 className="mb-0">{chef.chef_name}</h4>
                    <div className="d-flex justify-content-around mt-2">
                        <small className="fw-semibold">Experience: <span className="color-primary">{chef.years_of_experience}</span> <span className="fw-light">years</span></small>
                        <small className="fw-semibold">Likes: <span className="color-primary">{chef.likes}</span></small>
                    </div>
                    <p className="fw-semibold mt-2">Number of Recipes: <span className="color-primary">{chef.num_of_recipes}</span></p>
                    <div className="d-flex justify-content-center mt-3">
                        <Link className="btn btn-square btn-warning card-btn mx-1 text-white" to={`/chef/recipe-details/${chef.id}`}>View Recipes</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chef;
