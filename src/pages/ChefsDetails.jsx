import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Footer from '../shared/Footer';

const ChefsDetails = () => {
    const [ChefsDetails, setChefsDetails] = useState([])
    const [disable,setDisable]= useState(false)
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://food-recipe-server-site-ahmedramim528-gmailcom.vercel.app/chefsdetails/${id}`)
            .then(res => res.json())
            .then(data => setChefsDetails(data))
    }, [])
    const handleFavorite = () => {
        toast("Added on Favorite")
        setDisable(true)
    }
    return (
        <div className=' bg-[#01051e] '>
            <div className='w-[80%] mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='mt-12 w-[80%] mx-auto text-white mb-14'>
                <div className="card lg:card-side  bg-[#050e41] shadow-xl p-4">
                    <figure className='w-1/2 '><img className='rounded-2xl' src={ChefsDetails.picture} alt="Album" /></figure>
                    <div className="card-body w-1/2">
                        <h2 className="card-title text-4xl">{ChefsDetails.chef_name}</h2>
                        <p>{ChefsDetails.description}</p>
                        <p className='font-semibold'>Number of recipes: {ChefsDetails.number_of_recipes}</p>
                        <p className='font-semibold'>Years of Experience: {ChefsDetails.years_of_experience} Years</p>
                        <h2 className="card-title">My Recipes</h2>
                        {
                            ChefsDetails.popular_recipes && ChefsDetails.popular_recipes.map(rs => <li  key={rs.id}>{rs}</li>)
                        }
                        <h2 className="card-title">Ingredients</h2>
                        {
                            ChefsDetails.ingredients && ChefsDetails.ingredients.map(is => <li  key={is.id}>{is}</li>)
                        }
                        <h2 className="card-title">Cooking Method</h2>
                        {
                            ChefsDetails.cooking_method && ChefsDetails.cooking_method.map(cm => <li key={cm.id}>{cm}</li>)
                        }
                        <div className='flex gap-2 items-center'>
                                    <Rating className='text-yellow-400'
                                        placeholderRating={ChefsDetails.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                        readonly
                                    >

                                    </Rating>
                                    <p>{ChefsDetails.rating}</p>
                                </div>
                        <div className="card-actions ">
                            <button  disabled={disable}  onClick={handleFavorite } className="btn btn-primary">Favorite Recipe</button>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ChefsDetails;