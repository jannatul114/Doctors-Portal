import React from 'react';
import cavity from '../../assets/images/cavity.png';
import white from '../../assets/images/whitening.png';
import floride from '../../assets/images/fluoride.png';
const Services = () => {
    return (
        <div className=''>
            <h1 className='text-2xl text-center font-bold text-secondary mt-12 mb-8'>OUR SERVICES</h1>
            <h1 className='text-4xl text-center font-bold mb-12'>Services We Provide</h1>
            <div className='flex justify-around'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 m-4'>
                    <div className="card w-80 m-3 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={floride} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Fluoride Treatment</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, provident illo. Voluptatum porro hic voluptates, vel eligendi ab, </p>
                        </div>
                    </div>
                    <div className="card w-80 m-3 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={cavity} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cavity Filling</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, provident illo. Voluptatum porro hic voluptates, vel eligendi ab, </p>

                        </div>
                    </div>
                    <div className="card w-80 m-3 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={white} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Teeth Whitening</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, provident illo. Voluptatum porro hic voluptates, vel eligendi ab, </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Services;