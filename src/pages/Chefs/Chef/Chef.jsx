import { Carousel } from "react-bootstrap";
import './Chef.css'
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
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
                    <p className="fw-semibold">Number of Recipes: <span className="color-primary">{chef.num_of_recipes}</span></p>
                    <div className="d-flex justify-content-center mt-3">
                        <Link className="btn btn-square btn-warning mx-1 text-white">View Recipes</Link>
                        <button className="btn btn-square btn-warning mx-1 text-white">Add to Favorite</button>
                    </div>
                </div>
                {/* <Carousel>
                <div className="card">
                    <img src={chef.chef_picture} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{chef.chef_name}</h5>
                        <p className="card-text">{chef.years_of_experience}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Recipes: {chef.num_of_recipes}</li>
                            <li className="list-group-item">Total Likes: {chef.likes}</li>
                        </ul>
                        <a href="#" className="btn btn-primary">View Recipes</a>
                    </div>
                </div>
            </Carousel> */}
            </div>
        </>
    );
};

export default Chef;
