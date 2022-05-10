import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'
import StartedButton from '../Shared/StartedButton';
const MakeAppoinment = () => {
    return (
        <section style={{ backgroundImage: `url(${appoinment})` }} className='flex p-3 my-20 items-center '>
            <div className='flex-1 mt-[-100px] mb-[-12px] hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h3 className='text-3xl font-bold my-3'>Make an Appoinment</h3>
                <p >This dentist diagnoses, treats, and manages your overall oral health care needs, including gum care, root canals, fillings, crowns, veneers, bridges, and preventive education. All practicing general dentists have earned either a DDS or DMD degree (doctor of dental surgery or doctor of dental medicine, respectively)</p>
                <StartedButton>Get Started</StartedButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;