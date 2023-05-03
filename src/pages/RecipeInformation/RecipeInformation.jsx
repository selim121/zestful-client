/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeInformationCard from '../RecipeInformationCard/RecipeInformationCard';
import { ColorRing } from 'react-loader-spinner';

const RecipeInformation = () => {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`https://zestful-server.vercel.app/allData/${id}`);
            const data = await res.json();
            setRecipe(data.item);
            setLoading(false);
        }
        fetchData();
    }, []);

    const {recipes} = recipe;

    // console.log(recipes);

    return (
        <>
            <section className="container-xxl bg-white py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        loading ? <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /> :recipes && recipes.map(recipe => <RecipeInformationCard
                            recipe={recipe}
                        ></RecipeInformationCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default RecipeInformation;