import React from 'react';
import chair from '../../assets/images/chair.png';
import banner from '../../assets/images/bg.png';
import StartedButton from '../Shared/StartedButton';
const Banner = () => {
    return (
        // <div className="hero min-h-screen p-0" style={{ backgroundImage: `url(${banner})` }}>
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div className='flex justify-center'>
        //             <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        //         </div>
        //         <div>
        //             <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <StartedButton>Get Started</StartedButton>
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen p-0" style={{ backgroundImage: `url(${banner})` }}>


            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <StartedButton>Get Started</StartedButton>

                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="max-w-lg">
                                <img className="object-cover object-center w-full h-64 rounded-md shadow" src={chair} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;