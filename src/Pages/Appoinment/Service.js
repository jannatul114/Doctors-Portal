import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { slots, name, _id } = service;
    return (
        <div className="card w-80 bg-base-100 shadow-xl m-2">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'> try another date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} space available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} htmlFor="booking-modal" disabled={slots.length === 0} className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary my-4">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;