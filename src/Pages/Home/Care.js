import React from 'react';
import care from '../../assets/images/treatment.png'
import StartedButton from '../Shared/StartedButton';
const Care = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='lg:w-1/2 p-9 rounded-xl' src={care} alt='image' />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental</h1>
                        <h1 className="text-5xl font-bold mt-3">Care, on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptates non, quas corrupti est nisi aliquam aspernatur harum officiis error praesentium omnis debitis maiores eius sunt. Autem delectus nihil cupiditate, accusamus mollitia, molestias ut consequuntur consectetur voluptatum, molestiae impedit eaque ratione. Quis tenetur rem autem velit cum tempore dicta voluptas.</p>
                        <StartedButton>Get Started</StartedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;