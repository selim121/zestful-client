/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RecipeInformationCard = ({ recipe }) => {

    const {image, description, preparation_time, recipe_name, ingredients} = recipe;

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="h-75 card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title color-primary">{recipe_name}</h4>
                            <p className="card-text">{description}</p>
                            <small className='fw-semibold'>Preparation Time: <span className="color-primary">{preparation_time}</span></small>
                            <p className="fw-semibold m-0">Ingredients:</p>
                            <div className="mt-2">
                                <ol>
                                    {
                                        ingredients.map(ingredient => <li className='mb-1'>{ingredient}</li>)
                                    }
                                </ol>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default RecipeInformationCard;