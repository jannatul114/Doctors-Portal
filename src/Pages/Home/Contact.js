import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import StartedButton from '../Shared/StartedButton';

const Contact = () => {
    return (
        <section className=' h-full my-16 py-12 w-full' style={{ backgroundImage: `url(${appoinment})` }} >
            <h1 className='text-primary font-bold text-2xl text-center pt-9'>Contact Us</h1>
            <h1 className='text-white text-4xl text-center pt-9'>Stay connected with us</h1>


            <div className='flex justify-center items-center my-7  p-2'>
                <div className=''>
                    <div className='flex justify-center'>
                        <div>
                            <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-md" />
                            <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-md my-6" />
                        </div>
                    </div>
                    <textarea className="textarea w-full" placeholder="message"></textarea>
                    <div className='flex justify-center'>
                        <StartedButton>Submit</StartedButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;