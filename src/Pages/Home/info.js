import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-4'>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary p-4 text-white">
                    <figure>
                        <img src={clock} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>

                    </div>
                </div>
                <div className="card lg:card-side shadow-xl bg-accent text-white p-4">
                    <figure>
                        <img src={marker} alt="Album" />

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>

                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary p-4 text-white">
                    <figure>
                        <img src={phone} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;