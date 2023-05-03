/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './RecipeInformationCard.css';

const RecipeInformationCard = ({ recipe }) => {

    const { image, description, preparation_time, recipe_name, ingredients, cooking_method, rating} = recipe;
    // console.log(typeof recipe.rating);
    const showToastSuccessMessage = () => {
        toast.success('Add to favorite successfully !', {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const btnHandle = event => {
        event.currentTarget.disabled = true;
        showToastSuccessMessage();
    };
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="h-75 card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title color-primary">{recipe_name}</h4>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between">
                            <p>Method: <span className="color-primary">{cooking_method}</span></p>
                            <p>Rating: <span className="color-primary">{rating}</span></p>
                        </div>
                        <small className='fw-semibold'>Preparation Time: <span className="color-primary">{preparation_time}</span></small>
                        <p className="fw-semibold m-0">Ingredients:</p>
                        <div className="mt-2">
                            <ol>
                                {
                                    ingredients.map(ingredient => <li className='mb-1'>{ingredient}</li>)
                                }
                            </ol>
                        </div>
                        <div className="text-center">
                            <button onClick={btnHandle} className="btn btn-square btn-warning card-btn text-white" >Add to Favorite</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeInformationCard;