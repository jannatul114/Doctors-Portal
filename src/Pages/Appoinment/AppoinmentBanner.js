import React, { useState } from 'react';
import banner from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppoinmentBanner = ({ selectedDate, setDate }) => {
    const css = `
    .my-selected:not([disabled]) { 
      font-weight: bold; 
      border: 2px solid currentColor;
      border-color: #03B8D7;
      color: #03B8D7;
    }
    .my-selected:hover:not([disabled]) { 
      border-color: #03B8D7;
      color: #03B8D7;
    }
    .my-today { 
      font-weight: bold;
      font-size: 140%; 
      color: #03B8D7;
    }
  `;

    return (
        <div className="hero min-h-screen p-0" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex justify-center">
                    <div>
                        <div className="lg:w-96 bg-white shadow-2xl flex justify-center rounded-xl">
                            <style>{css}</style>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setDate}
                                modifiersClassNames={{
                                    selected: 'my-selected',
                                    today: 'my-today'
                                }}
                            />

                        </div>

                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2 ">
                        <div className="flex items-center justify-center lg:justify-end ">
                            <div className="max-w-lg">
                                <img className="object-cover object-center w-full h-64 rounded-md shadow" src={chair} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center my-8 font-bold'>You have selected: {format(selectedDate, 'PP')}</p>

            </div>
        </div>
    );
};

export default AppoinmentBanner;