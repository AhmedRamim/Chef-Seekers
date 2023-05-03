import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar} from "react-icons/fa";

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://food-recipe-server-site-ahmedramim528-gmailcom.vercel.app')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    console.log(chefs);
    return (
        <div className=' pb-12 text-white'>
            <h1 className='text-center text-5xl font-bold my-12 pb-12'>Our Chefs </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 my-12 gap-12'>
                {
                    chefs && chefs.map(chef => {
                        return <div key={chef.id} className="card w-full bg-[#050c39] shadow-2xl  text-white  ">
                            <figure><img src={chef.picture} alt="chefs" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{chef.chef_name}</h2>
                                <p>Years of Experience: {chef.years_of_experience}</p>
                                <p>Number of Recipes: {chef.number_of_recipes}</p>
                                <div className='flex gap-2 items-center'>
                                    <Rating className='text-yellow-400'
                                        placeholderRating={chef.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                        readonly
                                    >

                                    </Rating>
                                    <p>{chef.rating}</p>
                                </div>
                                <div className="card-actions ">
                                    <Link to={`/chefsdetails/${chef.id}`}><button className="btn btn-primary">View Recipes</button></Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Chefs;