/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './RecipesDetails.css';


const RecipesDetails = () => {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://zestful-server.vercel.app/allData/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data.item))
    }, []);

    const { bio, chef_name, chef_picture, likes, num_of_recipes, years_of_experience } = recipe;

    

    return (
        <>
            <section className="container-xxl py-5">
                <div className="row g-4 ">
                    <div className="col-lg-6 col-md-12 bg-white rounded d-flex justify-content-center align-items-center">
                        <div className="p-5">
                            <h3 className="color-primary fw-bold text-center chef-name">{chef_name}</h3>
                            <p className="bio py-2">{bio}</p>
                            <div className="d-flex justify-content-between">
                                <p className="text-semibold fs-5">Experience: <span className="color-primary">{years_of_experience}</span> <span className="fw-light fs-6">years</span></p>
                                <p className="text-semibold fs-5">Likes: <span className="color-primary">{likes}</span></p>
                                <p className="text-semibold fs-5">Number of Recipes: <span className="color-primary">{num_of_recipes}</span></p>
                            </div>
                            <div className="text-center">
                                <Link to={`/recipe-information/${recipe.id}`}><button className="btn btn-square btn-warning card-btn text-white">Recipe Information</button></Link>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        {
                            <img src={chef_picture} alt="" className="img-fluid rounded" />
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecipesDetails;