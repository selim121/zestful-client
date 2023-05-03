/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeInformationCard from '../RecipeInformationCard/RecipeInformationCard';

const RecipeInformation = () => {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://zestful-server.vercel.app/allData/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data.item))
    }, []);

    const {recipes} = recipe;

    // console.log(recipes);

    return (
        <>
            <section className="container-xxl bg-white py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        recipes && recipes.map(recipe => <RecipeInformationCard
                            recipe={recipe}
                        ></RecipeInformationCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default RecipeInformation;