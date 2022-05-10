import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='px-3'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review.reviews}</p>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-between items-center'>
                            <div className="avatar online">
                                <div className="w-24 mask  mask-hexagon ring-offset-base-100 ring-offset-2">
                                    <img src={review.img} alt='image' />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h3 className='text-lg font-bold'>{review.name}</h3>
                                <p>{review.location}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;